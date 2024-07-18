import { twMerge } from 'tailwind-merge'

export default function TableCell(props: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={twMerge(
				'grid border border-neutral-300 bg-neutral-50',
				'dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}
