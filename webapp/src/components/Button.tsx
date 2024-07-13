import { twMerge } from 'tailwind-merge'

export default function Button({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type='button'
			className={twMerge(
				'mx-auto block w-fit rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-800 active:scale-95',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
