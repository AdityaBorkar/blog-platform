import { twMerge } from 'tailwind-merge'

export default function NavButton({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type='button'
			className={twMerge(
				'rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 font-semibold',
				'dark:border-neutral-700 dark:bg-neutral-900',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
