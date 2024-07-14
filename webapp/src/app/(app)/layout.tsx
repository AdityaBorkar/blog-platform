import Link from 'next/link'
import { LuCog, LuGlobe, LuUser } from 'react-icons/lu'

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
	// { name: 'Newsletter', items: [] },
	{ name: 'Media', href: '/media' },
	// { name: 'Rank Manager', href: '/rank-manager' },
	{ name: 'Brand', href: '/brand' },
	// { name: 'User Analytics', href: '/user-analytics' },
	{ name: 'Site Experience', href: '/site-experience' },
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
					<div className='mx-auto mb-6 w-fit rounded border border-neutral-800 px-2 py-1 font-mono text-xs font-medium text-neutral-500'>
						OFFLINE
					</div>
					<div className='flex flex-row justify-between px-8'>
						<Link
							href='site-settings'
							className='text-neutral-600 hover:text-neutral-300'
						>
							<LuGlobe className='size-5' />
						</Link>
						<Link
							href='account'
							className='text-neutral-600 hover:text-neutral-300'
						>
							<LuUser className='size-5' />
						</Link>
						<Link
							href='settings'
							className='text-neutral-600 hover:text-neutral-300'
						>
							<LuCog className='size-5' />
						</Link>
					</div>
				</div>
			</nav>

			<div className='overflow-y-auto'>{children}</div>
		</div>
	)
}
