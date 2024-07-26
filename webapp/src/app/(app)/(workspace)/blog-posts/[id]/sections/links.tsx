import { useAtomValue } from 'jotai'
import type { IconType } from 'react-icons'
import { LuArrowUpRight, LuLink2, LuUnlink } from 'react-icons/lu'

import { ExternalLinks, InternalLinks } from '../atoms'
import { cn } from '@/lib/utils'

export default function LinksSection() {
	const internalLinks = useAtomValue(InternalLinks)
	const externalLinks = useAtomValue(ExternalLinks)

	console.log({ internalLinks, externalLinks })

	// Content Sampler: Run in a Web Worker -> Run analyzer in web worker -> update `state` using ExternalStore from Jotai

	// TODO: ADD: Link Analyzer Tool

	// USE:
	// Link Velocity: Monitor the rate at which you are acquiring new backlinks.
	// Link Diversity: A mix of different types of links (e.g., from blogs, news sites, forums) is generally healthier than links from a single source type.
	// Link Freshness

	// - Detect continous links and ask to separate them

	// Good anchor text is descriptive, reasonably concise, and relevant to the page that it's on and to the page it links to. It provides context for the link, and sets the expectation for your readers. The better your anchor text, the easier it is for people to navigate your site and for Google to understand what the page you're linking to is about.
	// Remember to give context to your links: the words before and after links matter, so pay attention to the sentence as a whole. Don't chain up links next to each other; it's harder for your readers to distinguish between links, and you lose surrounding text for each link.
	// Linking to other sites isn't something to be scared of; in fact, using external links can help establish trustworthiness (for example, citing your sources). Link out to external sites when it makes sense, and provide context to your readers about what they can expect.

	// add title tag to `a`
	// (replace with title / add short block / add OG Preview Block)
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

	// Affiliate/Sponsered Links
	// Suggested Internal Links

	return (
		<div className='py-4 text-sm *:px-8'>
			<div className='flex flex-row justify-around !px-4 py-4 text-center'>
				<LinkStat icon={LuUnlink} number={0} name='Broken' />
				<LinkStat icon={LuLink2} number={4} name='Internal' />
				<LinkStat icon={LuArrowUpRight} number={11} name='External' />
				{/* <LinkStat icon={LuArrowDownLeft} number={4} name='Inbound' /> */}
			</div>

			<div className='mb-2 mt-8 font-semibold'>Internal Links</div>
			<div>
				{internalLinks.map((link) => (
					<LinkBlock key={link.anchor} link={link} />
				))}
			</div>

			<div className='mb-2 mt-8 font-semibold'>Outgoing Links</div>
			<div>
				{externalLinks.map((link) => (
					<LinkBlock key={link.anchor} link={link} />
				))}
			</div>
		</div>
	)
}

function LinkStat(props: { icon: IconType; number: number; name: string }) {
	return (
		<div
			className={cn(
				'rounded-md px-4 py-2 hover:bg-neutral-200/50 hover:text-neutral-950',
				'dark:hover:text-neutral-200',
			)}
		>
			<div
				className={cn(
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

function LinkBlock(props: { link: Blog.Link }) {
	const { text, href } = props.link
	return <div></div>
}
