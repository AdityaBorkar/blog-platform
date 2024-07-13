import Link from 'next/link'

const NavigationItems = [
	{ name: 'Dashboard', href: '/dashboard' },
	{ name: 'Canvas', href: '/canvas' },
	{ name: 'Drawers', href: '/drawers' },
	{
		name: 'Blog',
		items: [
			{ name: 'Posts', href: '/blog-posts' },
			{ name: 'Metadata', href: '/blog-metadata' },
			{ name: 'Comments', href: '/blog-comments' },
		],
	},
	{
		name: 'Content',
		items: [
			{ name: 'Web Stories', href: '/web-stories' },
			{ name: 'Social Posts', href: '/social-posts' },
			{ name: 'Guest Posts', href: '/guest-posts' },
		],
	},
	{ name: 'Media', href: '/media' },
	{ name: 'Rank Manager', href: '/rank-manager' },
	{ name: 'Brand Manager', href: '/brand-manager' },
	{ name: 'User Analytics', href: '/user-analytics' },
	{ name: 'Web Performance', href: '/web-performance' }, // Core Web Vitals & Unlighthouse Score
	// ---
	// { name: 'Settings', href: '/settings' }, // TODO: Hide this because it is not often used
	// { name: 'Site Settings', href: '/site-settings' }, // TODO: Hide this because it is not often used
	// { name: 'Account Settings', href: '/account' }, // TODO: Hide this because it is not often used
]

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const brand = {
		name: 'VeryFirstTale',
		logo: '/logo.svg',
	}
	return (
		<div className='grid h-screen grid-cols-[200px_auto] font-sans'>
			<nav className='relative border-r border-neutral-800 px-4 font-medium'>
				<div className='mb-8 mt-6 text-center font-bold text-neutral-600'>
					{brand.name}
				</div>

				{NavigationItems.map((item) =>
					item.href ? (
						<Link
							key={item.name}
							href={item.href}
							className='block rounded-md px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-300'
						>
							{item.name}
						</Link>
					) : (
						<details key={item.name} open>
							<summary className='rounded-md px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-300'>
								{item.name}
							</summary>

							<div className='mb-4'>
								{item.items?.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className='block rounded-md px-4 py-1.5 pl-8 text-sm text-neutral-500 hover:bg-neutral-900 hover:text-neutral-300'
									>
										{item.name}
									</Link>
								))}
							</div>
						</details>
					),
				)}

				<div className='absolute bottom-0 left-0 my-4 w-full'>
					<div className='mx-auto w-fit rounded border border-neutral-800 px-2 py-1 font-mono text-xs font-medium text-neutral-500'>
						OFFLINE
					</div>
				</div>
			</nav>

			<div className='overflow-y-auto'>{children}</div>
		</div>
	)
}
