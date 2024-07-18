import { LuDownload, LuMail, LuPencilRuler } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import SpoofAPI from './spoof-api'
import Button from '@/components/Button'

export default function ReportPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const reportId = id
	const report = SpoofAPI(reportId)

	return (
		<div className='py-8 *:px-32'>
			<div className='flex flex-row items-center justify-between'>
				<h2 className='grow select-text text-2xl font-bold'>{report.name}</h2>
				<div className='flex flex-row gap-4'>
					<Button size='sm'>
						<LuDownload className='-mt-0.5 mr-1.5 inline-block' />
						Download
					</Button>
					<Button size='sm'>
						<LuMail className='-mt-0.5 mr-1.5 inline-block' />
						Email
					</Button>
					<Button size='sm'>
						<LuPencilRuler className='-mt-0.5 mr-1.5 inline-block' />
						Studio
					</Button>
				</div>
			</div>
			<div
				className={twMerge(
					'mt-2 select-text border-b border-neutral-300 pb-8 text-lg font-medium text-neutral-400',
					'dark:border-neutral-800 dark:text-neutral-500',
				)}
			>
				{report.description}
			</div>

			<div
				className={twMerge(
					report.render === 'grid' ? 'grid grid-cols-4 gap-8' : '',
				)}
			>
				.
				{
					// TODO: Construct UI Skeleton and then wait for data to arrive
				}
			</div>
		</div>
	)
}
