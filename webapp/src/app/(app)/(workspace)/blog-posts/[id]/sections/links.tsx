import type { IconType } from 'react-icons'
import {
	LuArrowDownLeft,
	LuArrowUpRight,
	LuLink2,
	LuUnlink,
} from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

type BlogPost_Link = {}

export default function LinksSection() {
	// TODO: Collection Strategy
	// TODO: Link Analyzer Tool
	// TODO: Link Analyzer Algorithm
	// TODO: Use external APIs and AI models for analysis

	// TODO: Fetch internal links - title, description, tags, page authority
	// TODO: Fetch external links - title, description, tags, page authority

	const internalLinks = [
		{ text: '', href: '' },
		{ text: '', href: '' },
		{ text: '', href: '' },
	]
	// * hreflang
	// * referrerpolicy
	// no-referrer
	// no-referrer-when-downgrade
	// origin
	// origin-when-cross-origin
	// same-origin
	// strict-origin-when-cross-origin
	// unsafe-url
	// * rel
	// alternate
	// author
	// bookmark
	// external
	// help
	// license
	// next
	// nofollow
	// noreferrer
	// noopener
	// prev
	// search
	// tag
	// type: text/html / PDF / ...

	const externalLinks = [
		{ text: '', href: '' },
		{ text: '', href: '' },
		{ text: '', href: '' },
	]

	// const inboundLinks = [
	// 	{
	// 		anchor: '1',
	// 		text: '',
	// 		href: '',
	// 		domain: {
	// 			name: '',
	// 			authority: 12,
	// 			isSpam: false,
	// 		},
	// 		checks: {
	// 			pass: true,
	// 			errors: [],
	// 			anchorTextRelevant: true,
	// 			isRelevant: true,
	// 			pageAuthority: 12,
	// 		},
	// 	},
	// ]
	// const externalLinks = [
	// 	{
	// 		anchor: '1',
	// 		text: '',
	// 		href: '',
	// 		domain: {
	// 			name: '',
	// 			authority: 12,
	// 			isSpam: false,
	// 		},
	// 		checks: {
	// 			pass: true,
	// 			errors: [],
	// 			anchorTextRelevant: true,
	// 			isRelevant: true,
	// 			pageAuthority: 12,
	// 		},
	// 	},
	// ]
	// const internalLinks = [
	// 	{
	// 		anchor: '1',
	// 		text: '',
	// 		href: '',
	// 		domain: {
	// 			name: '',
	// 			authority: 12,
	// 			isSpam: false,
	// 		},
	// 		checks: {
	// 			pass: true,
	// 			errors: [],
	// 			anchorTextRelevant: true,
	// 			// descriptive, keyword-rich anchor texts
	// 			// Assess the structure of internal links to ensure they guide users effectively and indicate the importance of different pages to search engines.
	// 			isRelevant: true,
	// 			pageAuthority: 12,
	// 		},
	// 	},
	// ]
	// Link Analyzer -
	// Inbound Backlinks with PA, do/no-follow
	// Outbound Backlinks with PA, do/no-follow
	// Broken Links
	// TODO: Subscribe to Content / Link Content / Run in a Web Worker
	// USE: Google’s Disavow Links Tool
	// Link Velocity: Monitor the rate at which you are acquiring new backlinks.
	// Link Diversity: A mix of different types of links (e.g., from blogs, news sites, forums) is generally healthier than links from a single source type.
	// Link Freshness

	// ---

	// Anchors:
	// Ensure that the anchor text provides a good user experience by being relevant and informative.
	// Anchors should be concise yet descriptive enough to inform users and search engines about the link's content.
	// The text used for anchors should be relevant to the content of the linked page.
	// Use keywords strategically in anchor text but avoid over-optimization or keyword stuffing.
	// It's important for the anchor text to match the destination URL’s topic to maximize its SEO value.

	return (
		<div className='py-4 text-sm *:px-8'>
			<div className='flex flex-row justify-around !px-4 py-4 text-center'>
				<LinkStat icon={LuUnlink} number={0} name='Broken' />
				<LinkStat icon={LuLink2} number={4} name='Internal' />
				<LinkStat icon={LuArrowUpRight} number={11} name='External' />
				<LinkStat icon={LuArrowDownLeft} number={4} name='Inbound' />
			</div>

			<div className='mb-2 mt-8 font-semibold'>Outgoing Links</div>
			<div>
				{externalLinks.map((link) => (
					<LinkBlock key={link.anchor} link={link} />
				))}
			</div>

			<div className='mb-2 mt-8 font-semibold'>Internal Links</div>
			<div>
				{internalLinks.map((link) => (
					<LinkBlock key={link.anchor} link={link} />
				))}
			</div>

			<div className='mb-2 mt-8 font-semibold'>Incoming Links</div>
			<div>
				{inboundLinks.map((link) => (
					<LinkBlock key={link.anchor} link={link} />
				))}
			</div>
		</div>
	)
}

function LinkStat(props: { icon: IconType; number: number; name: string }) {
	return (
		<div
			className={twMerge(
				'rounded-md px-4 py-2 hover:bg-neutral-200/50 hover:text-neutral-950',
				'dark:hover:text-neutral-200',
			)}
		>
			<div
				className={twMerge(
					'text-lg font-semibold text-neutral-800',
					'dark:text-neutral-300',
				)}
			>
				{props.number}
			</div>
			<div className='tracking-tighter'>
				<props.icon className='-mt-0.5 inline-block' /> {props.name}
			</div>
		</div>
	)
}

function LinkBlock(props: { link: BlogPost_Link }) {
	return <div></div>
}
