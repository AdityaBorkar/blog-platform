import Link from 'next/link'

// TODO: Also attach Specific Schema Markup to Tags
// Categories - Name Slug Parent-Category Description / Separate Pages
// Tags - Name Slug Description / Separate Pages
// Authors - Name Description Socials / Separate Pages

export default function BlogMetadataPage({
	children,
}: {
	children: React.ReactNode
}) {
	const NavigationItems = [
		{ name: 'Authors', href: '/authors' },
		{ name: 'Categories', href: '/categories' },
		{ name: 'Tags', href: '/tags' },
	]
	return (
		<div className='grid h-screen grid-cols-[12rem_auto] gap-4'>
			<div className='border-r border-neutral-900 px-4 pt-20 font-medium'>
				{NavigationItems.map((item) => (
					<Link
						key={item.name}
						href={`/blog-metadata${item.href}`}
						className='block rounded-md px-4 py-2 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-300'
					>
						{item.name}
					</Link>
				))}
			</div>

			<div className='overflow-y-auto'>{children}</div>
		</div>
	)
}
