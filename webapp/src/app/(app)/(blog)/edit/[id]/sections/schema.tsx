import { LuCalendar, LuFile, LuUser } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/Button'

export default function SchemaSection() {
	const schema = [
		{
			type: 'Article',
			icon: LuFile,
			properties: {
				id: '',
				name: 'Building an open-source blogging platform (for myself)!',
			},
		},
		{
			type: 'Person',
			icon: LuUser,
			properties: { id: '', name: 'Nishad Kinhikar' },
		},
		{
			type: 'Event',
			icon: LuCalendar,
			properties: { id: '', name: 'Launch Event' },
		},
	]

	const schemaRecommendations = [
		// {
		// 	type: 'Article',
		// 	icon: LuFile,
		// 	properties: {
		// 		id: '',
		// 		name: 'Building an open-source blogging platform (for myself)!',
		// 	},
		// },
		// {
		// 	type: 'Person',
		// 	icon: LuUser,
		// 	properties: { id: '', name: 'Nishad Kinhikar' },
		// },
		// {
		// 	type: 'Event',
		// 	icon: LuCalendar,
		// 	properties: { id: '', name: 'Launch Event' },
		// },
	]

	async function AutoDetectSchemaMarkup() {
		// TODO: Disable Button and display Loading State
		// TODO: Run in a Web Worker
		// TODO: Micro-GPT: Generate Web Wordings
		// TODO: Micro-GPT: Schema Markup Recommedations
		// TODO: Micro-GPT: Schema Markup Fill Data
		// TODO: Cache Results
		// TODO: Display Results
		// TODO: Enable Button
	}

	return (
		<div className='px-12 py-8 text-sm'>
			<Button onSubmit={AutoDetectSchemaMarkup}>
				✨ Auto Detect Schema Markup
			</Button>

			<div className='mb-2 mt-8 font-semibold text-neutral-400'>Current:</div>
			<div className='flex flex-col gap-2'>
				{schema.map((schema) => (
					<div
						key={schema.properties.id}
						className={twMerge(
							'line-clamp-1 w-full truncate rounded-md border border-neutral-800 px-4 py-2.5 font-medium text-neutral-300',
							'hover:bg-neutral-900',
						)}
					>
						<schema.icon className='-mt-1 mr-2 inline-block' />
						<span className='mr-1'>{schema.type}:</span>
						<span className='text-neutral-400'>{schema.properties.name}</span>
					</div>
				))}
			</div>

			<div className='mb-2 mt-8 font-semibold text-neutral-400'>
				Recommendations:
			</div>
			<div className='flex flex-col gap-2'>
				{schemaRecommendations.length ? (
					schema.map((schema) => (
						<div
							key={schema.properties.id}
							className={twMerge(
								'line-clamp-1 w-full truncate rounded-md border border-neutral-800 px-4 py-2.5 font-medium text-neutral-300',
								'hover:bg-neutral-900',
							)}
						>
							<schema.icon className='-mt-1 mr-2 inline-block' />
							<span className='mr-1'>{schema.type}:</span>
							<span className='text-neutral-400'>{schema.properties.name}</span>
						</div>
					))
				) : (
					<div className='mx-auto my-8 w-3/4 text-center font-medium text-neutral-500'>
						No recommendations, you already have the best schema markup! 🎉🎉
					</div>
				)}
			</div>
		</div>
	)
}
