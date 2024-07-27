'use client'

import Link from 'next/link'
import {
	BiChevronDown,
	BiCog,
	BiLogOut,
	BiLogoGithub,
	BiLogoLinkedin,
	BiLogoTwitter,
	BiUser,
} from 'react-icons/bi'

import FeedbackDialog from './FeedbackDialog'
import NewDialog from './NewDialog'
import OfflineIndicator from './OfflineIndicator'
import SearchDialog from './SearchDialog'
import useAuth from '@/hooks/useUser'
import { cn } from '@/lib/utils'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

const LogoutButton = {
	button: (
		<button
			type='button'
			className={cn('hover:bg-neutral-100', 'dark:hover:bg-neutral-800')}
		>
			<BiLogOut className='-mt-1 mr-2 inline-block size-4' />
			Logout
		</button>
	),
	dialog: (
		// TODO: Work on Buttons
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Are you sure?</DialogTitle>
				<DialogDescription>
					You have to re-login to your account. Are you sure you want to logout
					of this account?
				</DialogDescription>
			</DialogHeader>
			<DialogFooter>
				<button type='submit'>Logout</button>
				<button type='reset'>Cancel</button>
			</DialogFooter>
		</DialogContent>
	),
}

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { brand, navigation } = useAuth()

	return (
		<div className='grid h-screen grid-cols-[16rem_auto] font-sans text-sm'>
			<nav
				className={cn(
					'relative border-r-2 border-neutral-200 bg-neutral-200/50 px-4 font-medium text-neutral-600',
					'dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400',
				)}
			>
				<div className='mb-8 mt-5 flex flex-row items-center justify-between gap-2'>
					<Dialog>
						<DropdownMenu>
							<DropdownMenuTrigger
								className={cn(
									'rounded-md border border-transparent p-1 font-bold hover:border-neutral-300 hover:bg-neutral-100',
									'dark:hover:border-neutral-700 dark:hover:bg-neutral-900',
								)}
							>
								<div className='-mb-1 mr-1 inline-block size-5 rounded bg-orange-500' />
								{brand.name}
								<BiChevronDown className='-mt-1 inline-block size-5' />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<Link href='/settings/site'>
										<BiCog className='-mt-1 mr-2 inline-block size-4' />
										Site Settings
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href='/settings/account'>
										<BiUser className='-mt-1 mr-2 inline-block size-4' />
										Account Settings
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DialogTrigger asChild>
									<DropdownMenuItem>{LogoutButton.button}</DropdownMenuItem>
								</DialogTrigger>
							</DropdownMenuContent>

							{LogoutButton.dialog}
						</DropdownMenu>
					</Dialog>
					<div>
						<SearchDialog />
						<NewDialog />
					</div>
				</div>

				{navigation.map((item) => {
					const icon = (
						<item.icon
							key={item.name}
							className={cn(
								'-mt-0.5 mr-2 inline-block size-[1.125rem] text-neutral-600',
								'dark:text-neutral-500',
							)}
						/>
					)
					const parentClass = cn(
						'block rounded-md border border-transparent px-4 py-2 hover:border-neutral-300/50 hover:bg-neutral-200 hover:text-neutral-900',
						'dark:hover:bg-neutral-900 dark:hover:text-neutral-200',
					)
					return !item.items ? (
						<Link key={item.name} href={item.href} className={parentClass}>
							{icon}
							{item.name}
						</Link>
					) : (
						<details key={item.name} open={item.open}>
							<summary className={parentClass}>
								{icon}
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
					)
				})}

				<div className='absolute bottom-4 left-0 w-full'>
					<OfflineIndicator />
					<FeedbackDialog />
					<div className='flex flex-row justify-evenly px-8'>
						<Link href='' className='cursor-pointer' target='_blank'>
							<BiLogoGithub className='size-5' />
						</Link>
						<Link href='' className='cursor-pointer' target='_blank'>
							<BiLogoTwitter className='size-5' />
						</Link>
						<Link href='' className='cursor-pointer' target='_blank'>
							<BiLogoLinkedin className='size-5' />
						</Link>
					</div>
				</div>
			</nav>

			<div className='balance-overflow overflow-auto'>{children}</div>
		</div>
	)
}
