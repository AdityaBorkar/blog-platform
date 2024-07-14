import { LuEyeOff } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

export default function MetadataInput({
	label,
	internal,
	className,
	children,
}: Readonly<{
	label?: string
	internal?: boolean
	className?: string
	children: React.ReactNode
}>) {
	return (
		<div className={twMerge('px-8 py-4', className)}>
			<div className='mb-1 block text-sm font-medium text-neutral-400'>
				{internal && (
					<LuEyeOff className='mx-1 -mt-1 inline-block text-neutral-400' />
				)}
				{label}
			</div>
			<div className='text-neutral-300'>{children}</div>
		</div>
	)
}
