import type { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

export default function ToggleSelector<VT>(props: {
	value: VT
	setValue: (value: VT) => void
	options: {
		icon: IconType
		value: VT
	}[]
}) {
	// TODO: Add tooltips
	return (
		<div
			className={cn(
				'flex flex-row items-center gap-1 rounded-lg border border-neutral-300 bg-neutral-200 p-0.5 font-medium',
				'dark:border-neutral-800 dark:bg-neutral-950',
			)}
		>
			{props.options.map((option, index) => (
				<option.icon
					key={`${index}:${option.value}`}
					onClick={() => props.setValue(option.value)}
					className={cn(
						'box-content block size-5 rounded-md px-2 py-1.5',
						props.value === option.value
							? 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
							: 'text-neutral-500 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800/50',
					)}
				/>
			))}
		</div>
	)
}
