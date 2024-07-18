import { twMerge } from 'tailwind-merge'

export default function TableHeader(props: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={twMerge(
				'grid divide-x divide-neutral-300 border border-neutral-300 font-semibold',
				'dark:divide-neutral-800 dark:border-neutral-800',
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}
