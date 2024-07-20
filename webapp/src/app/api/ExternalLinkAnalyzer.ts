'use server'

import { JSDOM } from 'jsdom'

// * Competitor Link Analysis:  5 rows per link returned. If 50 links are returned, 250 rows are consumed.
// https://moz.com/help/links-api/making-calls/link-intersect
// https://moz.com/help/links-api/making-calls/link-status

export default async function ExternalLinkAnalyzer(props: {
	text: string
	href: string
	suggestText?: {
		sentence: string
	}
}) {
	const { href, text, suggestText } = props

	const url = await fetchMeta(href)
	if (!url) return null
	const redirects: string[] = [] // TODO: Analyze all the links across redirects at each level and measure PA / DA / ...
	console.log({ url })

	const preview = {
		logo: url.metadata['og:logo'] || url.linkdata.icon[0] || '',
		image: url.metadata['og:image'] || '',
		title: url.metadata['og:title'] || url.docTitle || '',
		description:
			url.metadata['og:description'] || url.metadata.description || '',
	}

	// TODO: If the link has fragment, use the heading instead of the text
	// MATCH RELEVANCE: docTitle and text
	// Detect Keyword Stuffing
	const relevance = 1
	const keywords: string[] = []
	const suggestions: string[] = []

	const da = 1 // aka, domain rating
	const pa = 1 // aka, url rating
	const lang = url.docLang
	const isNewsy = false
	const isSpamy = false
	const freshness = 'https://moz.com/help/links-api/making-calls/index-metadata'

	// TODO: dofollow / nofollow

	return {
		lang,
		da,
		pa,
		freshness,
		isNewsy,
		isSpamy,
		redirects,
		preview,
		text: { relevance, keywords, suggestions },
	}
}

async function fetchMeta(url: string) {
	// Fetch till the end of the <head> tag
	// const controller = new AbortController()
	const response = await fetch(url, {
		mode: 'cors',
		method: 'GET',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		// signal: controller.signal,
	})
	if (response.status !== 200) throw new Error('Status not 200')
	const reader = response.body?.getReader()
	if (!reader) throw new Error('No reader')

	const decoder = new TextDecoder('utf-8')
	let headContent = ''
	let done = false

	while (!done) {
		const { done: readerDone, value } = await reader.read()
		done = readerDone

		if (value) {
			const textChunk = decoder.decode(value, { stream: true })
			headContent += textChunk
			if (headContent.includes('</head>')) {
				// controller.abort()
				reader.cancel('Head tag end reached')
				break
			}
		}
	}
	headContent = `${headContent.substring(0, headContent.indexOf('</head>'))}</head></html>`

	// Parse the head content to extract data
	const dom = new JSDOM(headContent)
	const docLang = dom.window.document.documentElement.getAttribute('lang')
	const docTitle = dom.window.document.head.getAttribute('title')

	const linkdata: Record<string, string[]> = {}
	const linkTags = dom.window.document.head.querySelectorAll('link')
	for (const tag of linkTags) {
		const rel = tag.getAttribute('rel') || ''
		const href = tag.getAttribute('href') || ''
		if (linkdata[rel]) linkdata[rel].push(href)
		else linkdata[rel] = [href]
	}

	const metadata: Record<string, string> = {}
	const metaTags = dom.window.document.head.querySelectorAll('meta')
	for (const tag of metaTags) {
		const name = tag.getAttribute('name') || tag.getAttribute('property') || ''
		const value = tag.getAttribute('content') || ''
		if (!name || ['viewport'].includes(name)) continue
		metadata[name] = value
	}

	return { docTitle, docLang, linkdata, metadata }
}
