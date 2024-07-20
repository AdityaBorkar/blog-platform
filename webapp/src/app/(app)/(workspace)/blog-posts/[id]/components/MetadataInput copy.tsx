import type { PrimitiveAtom } from 'jotai'
import { useAtom } from 'jotai'
import { useId } from 'react'
import { LuEyeOff } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import { BlogDataAtom } from '../atoms'

export default function MetadataInput({
	param,
	label,
	readOnly,
	internal,
	className,
}: Readonly<{
	param: string
	label?: string
	internal?: boolean
	className?: string
	readOnly?: boolean
}>) {
	const uuid = useId()
	const [value, setValue] = useAtom(BlogDataAtom)
	console.log('I am rendering MetadataInput: ', label)

	return (
		<label htmlFor={uuid} className={twMerge('px-8 py-2', className)}>
			<div
				className={twMerge(
					'mt-2 block text-sm font-medium text-neutral-600',
					'dark:text-neutral-400',
				)}
			>
				{internal && (
					<LuEyeOff
						className={twMerge(
							'mx-1 -mt-1 inline-block text-neutral-500',
							'dark:text-neutral-400',
						)}
					/>
				)}
				{label}
			</div>
			<input
				id={uuid}
				// TODO: H-AUTO EXPANDING
				name={label}
				readOnly={readOnly || false}
				defaultValue={value}
				className={twMerge(
					'h-au -ml-2 w-full cursor-text select-text rounded-md px-2 py-2 text-neutral-900 focus:outline-1 focus:outline-neutral-200',
					'dark:text-neutral-300',
				)}
			/>
		</label>
	)
}
