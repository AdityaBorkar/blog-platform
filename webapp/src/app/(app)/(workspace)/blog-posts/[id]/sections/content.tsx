import { LuCheckCheck, LuChevronDown, LuChevronUp, LuEye } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

export default function ContentSection() {
	return (
		<div className='py-4'>
			<div className='flex flex-col gap-4 border-b border-neutral-200 px-6 py-4'>
				<div className='flex flex-row justify-between text-center text-sm text-neutral-700'>
					<div className='rounded-md px-4 py-2 hover:bg-neutral-200'>
						<div className='mb-1 text-base font-semibold'>Grade 8</div>
						<div>Readability</div>
					</div>
					<div className='rounded-md px-4 py-2 hover:bg-neutral-200'>
						<div className='mb-1 text-base font-semibold'>Positive</div>
						<div>Writing Tone</div>
					</div>
					<div className='rounded-md px-4 py-2 hover:bg-neutral-200'>
						<div className='mb-1 text-base font-semibold'>5 mins.</div>
						<div>Read Time</div>
					</div>
				</div>
				<div className='my-4 flex flex-row flex-wrap justify-around gap-y-2 px-4 text-neutral-600'>
					<div>2785 Chars.</div>
					<div>1500 Letters</div>
					<div>215 Words</div>
					<div>45 Sentences</div>
					<div>8 Paragraphs</div>
					<div>3 Sections</div>
				</div>
			</div>

			<div className='border-b border-neutral-200 py-8'>
				<div className='flex flex-col gap-2 px-8'>
					{/* <Card>10 Sentences are very hard to read</Card> */}
					<Card bgColor='bg-red-700' hoverColor='hover:bg-red-500'>
						10 Sentences are hard to read
					</Card>
					<Card bgColor='bg-orange-700' hoverColor='hover:bg-orange-500'>
						12 Grammatical / Spelling issues
					</Card>
					<Card bgColor='bg-fuchsia-700' hoverColor='hover:bg-fuchsia-500'>
						10 Weakener Words
					</Card>
					<Card bgColor='bg-indigo-700' hoverColor='hover:bg-indigo-500'>
						10 Simpler Word Alternatives
					</Card>
				</div>

				<div
					className={twMerge(
						'mx-auto mt-6 w-fit rounded-md bg-green-100 px-4 py-1.5 text-xs font-medium text-green-900 hover:bg-green-200 hover:shadow',
						'dark:border-green-500 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800',
					)}
				>
					<LuCheckCheck className='-mt-0.5 inline' /> Passed 64 checks
				</div>
			</div>
		</div>
	)
}

function Card(props: {
	children: React.ReactNode
	bgColor: string
	hoverColor: string
}) {
	const iconClass = twMerge(
		'inline-block box-content rounded -mt-1 p-1',
		props.hoverColor,
	)
	return (
		<div
			className={twMerge(
				'flex flex-row justify-between rounded-md border-b border-neutral-200 px-2 py-2 text-white',
				props.bgColor,
			)}
		>
			<div>
				<LuEye className={twMerge('mr-1', iconClass)} />
				<span>{props.children}</span>
			</div>
			<div>
				<LuChevronUp className={twMerge(iconClass)} />
				<LuChevronDown className={twMerge(iconClass)} />
			</div>
		</div>
	)
}
