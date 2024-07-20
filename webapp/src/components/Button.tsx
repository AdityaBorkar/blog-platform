import { twMerge } from 'tailwind-merge'

export namespace Button {
	type Size = 'sm'
	export type Props = React.HTMLAttributes<HTMLButtonElement> & {
		size?: Size
	}
}

export default function Button({
	size,
	children,
	className,
	...props
}: Button.Props) {
	return (
		<button
			type='button'
			className={twMerge(
				'mx-auto block w-fit rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:scale-95',
				'dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800',
				size === 'sm' ? 'px-4 py-1' : 'px-4 py-2',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
