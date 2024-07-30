import Link from 'next/link'
import { BiArrowBack, BiChat, BiCog, BiShow, BiSpa } from 'react-icons/bi'

import Button from '@/ui/button'

export default function ChroniclePage(props: { params: { id: string } }) {
	const chronicleId = props.params.id
	const chronicle = {
		id: chronicleId,
		name: 'Gajab Tichi Adaa (Marathi Natak)',
		image: '/user-generated/gta.png',
		content: {
			total: 10,
			blog: 10,
			guestBlog: 10,
			webStories: 10,
			social: {
				total: 10,
				facebook: 10,
				twitter: 10,
				instagram: 10,
				youtube: 10,
				pinterest: 10,
				linkedin: 10,
			},
		},
		media: {
			total: 10,
		},
		stats: {
			impressions: 124582,
			engagements: 5623,
		},
	}

	return (
		<div className='px-44 text-neutral-800'>
			<div className='my-4 flex flex-row items-center justify-between'>
				<Button type='ghost' href='/chronicles' className='-ml-12'>
					<BiArrowBack className='-mt-0.5 mr-3 inline-block size-5' />
					Back to "List of Chronicles"
				</Button>
				<Button type='ghost'>
					<BiCog className='-mt-0.5 mr-1 inline-block size-5' />
					Chronicle Settings
				</Button>
			</div>

			<h2 className='mt-16 text-3xl font-semibold'>{chronicle.name}</h2>

			<div className='my-8 flex flex-row gap-2'>
				<img
					alt=''
					src={chronicle.image}
					className='w-[48rem] rounded-xl object-cover'
				/>
				<div className='grid w-[12rem] grid-rows-3 divide-y divide-neutral-400 rounded-xl border border-neutral-400 text-center text-base font-medium text-neutral-500'>
					<div className='flex flex-col justify-center'>
						<div className='mb-2 text-3xl font-semibold text-neutral-800'>
							{chronicle.stats.impressions.toLocaleString('hi')}+
						</div>
						<div>
							<BiShow className='-mt-0.5 mr-1 inline-block size-5' />
							Impressions
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<div className='mb-2 text-3xl font-semibold text-neutral-800'>
							{chronicle.stats.engagements.toLocaleString('hi')}+
						</div>
						<div>
							<BiChat className='mr-1 inline-block size-5' />
							Engagements
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<div className='mb-2 text-3xl font-semibold text-neutral-800'>
							{chronicle.content.total}
						</div>
						<div>
							<BiSpa className='-mt-1 mr-1 inline-block size-5' />
							Content
						</div>
					</div>
				</div>
			</div>

			<div>List the content</div>
		</div>
	)
}
