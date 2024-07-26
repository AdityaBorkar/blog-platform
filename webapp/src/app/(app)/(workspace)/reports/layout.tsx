import Link from 'next/link'
import { LuFileText } from 'react-icons/lu'

import { cn } from '@/lib/utils'

export default function ReportsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const reports = [
		{ id: '1', name: 'User Devices' },
		{ id: '2', name: 'Page Performance' },
	]

	return (
		<div className='grid h-screen grid-cols-[16rem_auto]'>
			<div
				className={cn(
					'overflow-auto border-r border-neutral-300 px-4 pt-24',
					'dark:border-neutral-800',
				)}
			>
				{reports.map((report) => (
					<Link
						key={report.name}
						href={`/reports/${report.id}`}
						className={cn(
							'block rounded-md px-4 py-2 font-medium text-neutral-600 hover:bg-neutral-200/50',
							'dark:text-neutral-400 dark:hover:bg-neutral-900',
						)}
					>
						<LuFileText className='-mt-1 mr-2 inline-block opacity-75' />
						{report.name}
					</Link>
				))}
			</div>
			<div className='overflow-auto'>{children}</div>
		</div>
	)
}
