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

	// TODO: Construct UI Skeleton and then wait for data to arrive
	return (
		<div className='py-8 *:px-32'>
			<div className='flex flex-row items-center justify-between'>
				<h2 className='grow text-2xl font-bold'>{report.name}</h2>
				<div className='flex flex-row gap-4 text-neutral-400'>
					<Button size='sm'>
						<LuDownload className='-mt-1 mr-1 inline-block' />
						Download
					</Button>
					<Button size='sm'>
						<LuMail className='-mt-1 mr-1 inline-block' />
						Email
					</Button>
					<Button size='sm'>
						<LuPencilRuler className='-mt-1 mr-1 inline-block' />
						Studio
					</Button>
				</div>
			</div>
			<div className='mt-2 border-b border-neutral-800 pb-8 text-lg font-medium text-neutral-500'>
				{report.description}
			</div>

			<div
				className={twMerge(
					report.render === 'grid' ? 'grid grid-cols-4 gap-8' : '',
				)}
			>
				.
			</div>
		</div>
	)
}
