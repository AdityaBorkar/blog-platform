import { BiChevronDown } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

export default function Select<ValueType>({
	value,
	setValue,
	options,
}: Readonly<{
	value: ValueType
	setValue: (value: ValueType) => void
	options: Readonly<{ value: ValueType; label: string }[]>
}>) {
	// TODO: Get from shadcn/ui
	const option = options.find((option) => option.value === value)
	return (
		<div
			className={twMerge(
				'relative min-w-48 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-2 font-medium text-neutral-700',
				'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400',
			)}
		>
			{option?.label ?? 'Select an option'}
			<BiChevronDown className='absolute right-2 top-1.5 size-6 text-neutral-500' />
		</div>
	)
}
