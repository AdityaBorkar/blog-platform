import Link from 'next/link'
import { LuFileText } from 'react-icons/lu'

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
			<div className='overflow-auto border-r border-neutral-800 px-4 pt-20'>
				{reports.map((report) => (
					<Link
						key={report.name}
						href={`/reports/${report.id}`}
						className='block rounded-md px-4 py-2 font-medium text-neutral-400 hover:bg-neutral-900'
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
