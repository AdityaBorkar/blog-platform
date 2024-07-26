'use client'

import Link from 'next/link'
import {
	BiChevronDown,
	BiCog,
	BiEdit,
	BiLogOut,
	BiSearch,
	BiUser,
} from 'react-icons/bi'

import OfflineIndicator from './OfflineIndicator'
import Dropdown from '@/components/Dropdown'
import useAuth from '@/hooks/useUser'
import { cn } from '@/lib/utils'

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { user, brand, navigation } = useAuth()

	// TODO: New
	// TODO: Search

	return (
		<div className='grid h-screen grid-cols-[16rem_auto] font-sans text-sm'>
			<nav
				className={cn(
					'relative border-r-2 border-neutral-200 bg-neutral-200/50 px-4 font-medium text-neutral-600',
					'dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400',
				)}
			>
				<div className='mb-8 mt-5 flex flex-row items-center justify-between gap-2'>
					<Dropdown
						summary={
							<>
								<div className='-mb-1 mr-1 inline-block size-5 rounded bg-orange-500' />
								{brand.name}
								<BiChevronDown className='-mt-1 inline-block size-5' />
							</>
						}
					>
						<Link
							href='/settings/site'
							className={cn(
								'rounded-t-md py-2 pl-4 pr-12 hover:bg-neutral-100',
								'dark:hover:bg-neutral-800',
							)}
						>
							<BiCog className='-mt-1 mr-2 inline-block size-4' />
							Site Settings
						</Link>
						<Link
							href='/settings/account'
							className={cn(
								'py-2 pl-4 pr-12 hover:bg-neutral-100',
								'dark:hover:bg-neutral-800',
							)}
						>
							<BiUser className='-mt-1 mr-2 inline-block size-4' />
							Account Settings
						</Link>
						<button
							type='button'
							className={cn(
								'rounded-b-md border-t border-neutral-200 py-2 pl-4 pr-12 text-left hover:bg-neutral-100',
								'dark:border-neutral-700 dark:hover:bg-neutral-800',
							)}
						>
							<BiLogOut className='-mt-1 mr-2 inline-block size-4' />
							Logout
						</button>
					</Dropdown>
					<div>
						<button
							type='button'
							className={cn(
								'mr-1 box-border rounded-md border border-transparent p-1.5 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md',
								'dark:hover:border-neutral-800 dark:hover:bg-neutral-900',
							)}
							onClick={() => {}}
						>
							<BiSearch className='size-4' />
						</button>
						<button
							type='button'
							className={cn(
								'rounded-md border border-neutral-300 bg-neutral-50 p-1.5 hover:shadow-md',
								'dark:border-neutral-800 dark:bg-neutral-900',
							)}
							onClick={() => {}}
						>
							<BiEdit className='size-4' />
						</button>
					</div>
				</div>

				{navigation.map((item) =>
					!item.items ? (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								'block rounded-md border border-transparent px-4 py-2 hover:border-neutral-300/50 hover:bg-neutral-200 hover:text-neutral-900',
								'dark:hover:bg-neutral-900 dark:hover:text-neutral-200',
							)}
						>
							<item.icon
								className={cn(
									'-mt-0.5 mr-2 inline-block size-[1.125rem] text-neutral-600',
									'dark:text-neutral-500',
								)}
							/>
							{item.name}
						</Link>
					) : (
						<details key={item.name} open={item.open}>
							<summary
								className={cn(
									'block rounded-md border border-transparent px-4 py-2 hover:border-neutral-300/50 hover:bg-neutral-200 hover:text-neutral-900',
									'dark:hover:bg-neutral-900 dark:hover:text-neutral-200',
								)}
							>
								<item.icon
									className={cn(
										'-mt-0.5 mr-2 inline-block size-[1.125rem] text-neutral-600',
										'dark:text-neutral-500',
									)}
								/>
								{item.name}
							</summary>
							<div
								className={cn(
									'relative ml-8 before:absolute before:-left-2 before:top-0 before:h-full before:border-r before:border-neutral-400',
									'dark:before:border-neutral-800',
								)}
							>
								{item.items?.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={cn(
											'block rounded-md border border-transparent px-2 py-1.5 hover:border-neutral-300/50 hover:bg-neutral-200 hover:text-neutral-900',
											'dark:hover:bg-neutral-900 dark:hover:text-neutral-200',
										)}
									>
										{item.name}
									</Link>
								))}
							</div>
						</details>
					),
				)}

				<div className='absolute bottom-4 left-0 w-full'>
					<OfflineIndicator />
				</div>
			</nav>

			<div className='balance-overflow overflow-auto'>{children}</div>
		</div>
	)
}

function HeaderButton({
	icon: Icon,
	href,
	onClick,
	children,
	className,
}: {
	href?: string
	onClick?: () => void
	icon: IconType
	children: React.ReactNode
	className?: string
}) {
	const classList = cn(
		'px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900',
		'dark:text-neutral-400 dark:hover:text-neutral-200',
		className,
	)

	return href ? (
		<Link href={href} className={classList}>
			<Icon className='-mt-1 mr-2 inline-block' />
			{children}
		</Link>
	) : (
		<button type='button' className={classList} onClick={onClick}>
			<Icon className='-mt-1 mr-2 inline-block' />
			{children}
		</button>
	)
}

function HeaderLink({
	href,
	children,
	className,
}: {
	href: string
	children: React.ReactNode
	className?: string
}) {
	const classList = cn(
		'px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900',
		'dark:text-neutral-400 dark:hover:text-neutral-200',
		className,
	)

	return (
		<Link href={href} className={classList}>
			{children}
		</Link>
	)
}
