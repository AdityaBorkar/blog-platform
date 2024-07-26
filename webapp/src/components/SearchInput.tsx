import { BiSearch } from 'react-icons/bi'

import { cn } from '@/lib/utils'

export default function SearchInput({
	placeholder,
	// value,
	// setValue,
}: Readonly<{
	placeholder: string
	// value: string
	// setValue: (value: string) => void
}>) {
	return (
		<div className='relative grow'>
			<input
				type='text'
				placeholder={placeholder}
				// value={value}
				// onChange={(event) => setValue(event.target.value)}
				className={cn(
					'w-full rounded-md border border-neutral-200 py-1.5 pl-10 pr-4 text-base font-medium text-neutral-700',
					'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400',
				)}
			/>
			<BiSearch className='absolute left-4 top-2 size-5 text-neutral-400' />
		</div>
	)
}
