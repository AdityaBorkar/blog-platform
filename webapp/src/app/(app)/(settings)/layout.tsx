'use client'

import { useAtom } from 'jotai'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { BiArrowBack, BiCog } from 'react-icons/bi'

import { darkModeAtom } from './preferences'
import useAuth from '@/hooks/useUser'
import { cn } from '@/lib/utils'

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { user, brand, navigation } = useAuth()

	const isOffline = true

	const [darkMode, setDarkMode] = useAtom(darkModeAtom)
	const toggleDarkMode = () => setDarkMode(!darkMode)

	return (
		<div className='grid h-screen grid-cols-[16rem_auto] font-sans text-sm'>
			<nav
				className={cn(
					'relative border-r-2 border-neutral-200 bg-neutral-200/50 px-4 font-medium text-neutral-600',
					'dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400',
				)}
			>
				<div className='mb-8 mt-6'>
					<BiArrowBack className='-mt-0.5 mr-2 inline-block size-5' />
					Back to Workspace
				</div>

				<NavLink href='/settings/site' icon={BiCog} name='Site Settings' />

				<div className='absolute bottom-4 left-0 w-full'>
					{isOffline && (
						<div
							className={cn(
								'mx-auto w-fit rounded border border-neutral-300 px-2 py-1 font-mono text-xs [word-spacing:-0.2rem]',
								'dark:border-neutral-700',
							)}
						>
							⚡CHANGES SAVED OFFLINE
						</div>
					)}
				</div>
			</nav>

			<div className='balance-overflow overflow-auto'>{children}</div>
		</div>
	)
}

function NavLink(props: { href: string; icon: IconType; name: string }) {
	return (
		<Link
			href={props.href}
			className={cn(
				'block rounded-md border border-transparent px-4 py-2 hover:border-neutral-300/50 hover:bg-neutral-200 hover:text-neutral-900',
				'dark:hover:bg-neutral-900 dark:hover:text-neutral-200',
			)}
		>
			<props.icon
				className={cn(
					'-mt-0.5 mr-2 inline-block size-[1.125rem] text-neutral-600',
					'dark:text-neutral-500',
				)}
			/>
			{props.name}
		</Link>
	)
}
