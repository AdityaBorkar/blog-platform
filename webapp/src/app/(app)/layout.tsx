'use client'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { BiChevronDown, BiEdit, BiSearch } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

import useAuth from '@/hooks/useUser'

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { user, brand, navigation } = useAuth()
	if (!user) redirect('/')

	// TODO: Initialize Replocal
	// TODO: Register Database
	// TODO: Register LocalStorage
	// const { isOffline } = ReplocalInstance({ db: null, storage: null })
	const isOffline = true

	return (
		<div className='grid h-screen grid-cols-[16rem_auto] font-sans text-sm'>
			<nav
				className={twMerge(
					'relative border-r-2 border-neutral-200 bg-neutral-200/50 px-4 font-medium text-neutral-600',
					'dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400',
				)}
			>
				<div className='mb-8 mt-6 flex flex-row items-center justify-between gap-2'>
					<details className='relative'>
						<summary
							className={twMerge(
								'rounded-md border border-transparent p-1 font-bold hover:border-neutral-300 hover:bg-neutral-100',
								'dark:hover:border-neutral-700 dark:hover:bg-neutral-900',
							)}
						>
							<div className='-mb-1 mr-1 inline-block size-5 rounded bg-orange-500' />
							{brand.name}
							<BiChevronDown className='-mt-1 inline-block size-5' />
						</summary>
						<div
							className={twMerge(
								'absolute left-0 top-8 flex w-max min-w-full flex-col rounded-md border border-neutral-300 bg-neutral-50 shadow-lg',
								'dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-black/50',
							)}
						>
							<Link
								href='/settings/site'
								className={twMerge(
									'rounded-t-md py-2 pl-4 pr-12 hover:bg-neutral-100',
									'dark:hover:bg-neutral-800',
								)}
							>
								Site Settings
							</Link>
							<Link
								href='/settings/account'
								className={twMerge(
									'py-2 pl-4 pr-12 hover:bg-neutral-100',
									'dark:hover:bg-neutral-800',
								)}
							>
								Account Settings
							</Link>
							<button
								type='button'
								className={twMerge(
									'rounded-b-md border-t border-neutral-200 py-2 pl-4 pr-12 text-left',
									'dark:border-neutral-700 dark:hover:bg-neutral-800',
								)}
							>
								Logout
							</button>
						</div>
					</details>
					{/* Expand: */}
					<div>
						<button
							type='button'
							className={twMerge(
								'mr-1 box-border rounded-md border border-transparent p-1.5 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md',
								'dark:hover:border-neutral-800 dark:hover:bg-neutral-900',
							)}
							onClick={() => {}}
						>
							<BiSearch className='size-4' />
						</button>
						<button
							type='button'
							className={twMerge(
								'rounded-md border border-neutral-300 bg-neutral-50 p-1.5 hover:shadow-md',
								'dark:border-neutral-800 dark:bg-neutral-900',
							)}
							onClick={() => {}}
						>
							<BiEdit className='size-4' />
						</button>
					</div>
				</div>

				{navigation.map(
					(item) => (
						<Link
							key={item.name}
							href={item.href}
							className={twMerge(
								'block rounded-md px-4 py-2 hover:bg-neutral-200 hover:text-neutral-900',
								'dark:hover:bg-neutral-900 dark:hover:text-neutral-200',
							)}
						>
							<item.icon
								className={twMerge(
									'-mt-0.5 mr-2 inline-block size-[1.125rem] text-neutral-600',
									'dark:text-neutral-500',
								)}
							/>
							{item.name}
						</Link>
					),
					// item.href ? (
					// 	<Link
					// 		key={item.name}
					// 		href={item.href}
					// 		className='block rounded-md px-4 py-2 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900'
					// 	>
					// 		<item.icon className='-mt-0.5 mr-2 inline-block size-[1.125rem] text-neutral-600' />
					// 		{item.name}
					// 	</Link>
					// ) : (
					// 	<details key={item.name} open>
					// 		<summary className='rounded-md px-4 py-2 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-300'>
					// 			{item.name}
					// 		</summary>
					// 		<div className='mb-4'>
					// 			{item.items?.map((item) => (
					// 				<Link
					// 					key={item.name}
					// 					href={item.href}
					// 					className='block rounded-md px-4 py-1.5 pl-8 text-neutral-500 hover:bg-neutral-900 hover:text-neutral-300'
					// 				>
					// 					{item.name}
					// 				</Link>
					// 			))}
					// 		</div>
					// 	</details>
					// ),
				)}

				<div className='absolute bottom-4 left-0 w-full'>
					{isOffline && (
						<div
							className={twMerge(
								'mx-auto w-fit rounded border border-neutral-300 px-2 py-1 font-mono text-xs font-medium [word-spacing:-0.2rem]',
								'dark:border-neutral-700',
							)}
						>
							⚡CHANGES SAVED OFFLINE
						</div>
					)}
				</div>
			</nav>

			<div className='overflow-y-auto'>{children}</div>
		</div>
	)
}
