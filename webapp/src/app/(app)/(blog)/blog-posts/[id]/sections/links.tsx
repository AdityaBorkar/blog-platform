import {
	LuArrowDownLeft,
	LuArrowUpRight,
	LuLink2,
	LuUnlink,
} from 'react-icons/lu'

export default function LinksSection() {
	const inboundLinks = [
		{
			anchor: '1',
			text: '',
			href: '',
			domain: {
				name: '',
				authority: 12,
				isSpam: false,
			},
			checks: {
				pass: true,
				errors: [],
				anchorTextRelevant: true,
				isRelevant: true,
				pageAuthority: 12,
			},
		},
	]
	const externalLinks = [
		{
			anchor: '1',
			text: '',
			href: '',
			domain: {
				name: '',
				authority: 12,
				isSpam: false,
			},
			checks: {
				pass: true,
				errors: [],
				anchorTextRelevant: true,
				isRelevant: true,
				pageAuthority: 12,
			},
		},
	]
	const internalLinks = [
		{
			anchor: '1',
			text: '',
			href: '',
			domain: {
				name: '',
				authority: 12,
				isSpam: false,
			},
			checks: {
				pass: true,
				errors: [],
				anchorTextRelevant: true,
				// descriptive, keyword-rich anchor texts
				// Assess the structure of internal links to ensure they guide users effectively and indicate the importance of different pages to search engines.
				isRelevant: true,
				pageAuthority: 12,
			},
		},
	]
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
		<div className='py-4 text-sm text-neutral-400 *:px-8'>
			<div className='flex flex-row justify-around !px-4 py-4 text-center'>
				<div className='hover:text-neutral-200'>
					<div className='text-lg text-neutral-300'>0</div>
					<div className='tracking-tighter'>
						<LuUnlink className='-mt-0.5 inline-block' /> Broken
					</div>
				</div>
				<div className='hover:text-neutral-200'>
					<div className='text-lg text-neutral-300'>11</div>
					<div className='tracking-tighter'>
						<LuArrowUpRight className='-mt-0.5 inline-block' /> External
					</div>
				</div>
				<div className='hover:text-neutral-200'>
					<div className='text-lg text-neutral-300'>4</div>
					<div className='tracking-tighter'>
						<LuLink2 className='-mt-0.5 inline-block' /> Internal
					</div>
				</div>
				<div className='hover:text-neutral-200'>
					<div className='text-lg text-neutral-300'>4</div>
					<div className='tracking-tighter'>
						<LuArrowDownLeft className='-mt-0.5 inline-block' /> Inbound
					</div>
				</div>
			</div>

			<div className='mb-2 mt-8 font-semibold'>Outgoing Links</div>
			<div>
				{externalLinks.map((link) => (
					<div key={link.anchor}>{link.text}</div>
				))}
			</div>

			<div className='mb-2 mt-8 font-semibold'>Internal Links</div>
			<div>
				{internalLinks.map((link) => (
					<div key={link.anchor}>{link.text}</div>
				))}
			</div>

			<div className='mb-2 mt-8 font-semibold'>Incoming Links</div>
			<div>
				{inboundLinks.map((link) => (
					<div key={link.anchor}>{link.text}</div>
				))}
			</div>
		</div>
	)
}
