import { twMerge } from 'tailwind-merge'

export default function Button({
	size,
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLButtonElement> & {
	size?: 'sm'
}) {
	return (
		<button
			type='button'
			className={twMerge(
				'mx-auto block w-fit rounded-md border border-neutral-700 bg-neutral-900 text-neutral-400 hover:bg-neutral-800 active:scale-95',
				size === 'sm' ? 'px-2 py-1' : 'px-4 py-2',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
