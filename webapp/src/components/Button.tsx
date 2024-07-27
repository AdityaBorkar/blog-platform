import { type VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'

import { cn } from '@/lib/utils'

export namespace Button {
	export interface Props extends VariantProps<typeof variants> {
		href?: string
		className?: string
		children?: React.ReactNode
	}
}

const variants = cva([''], {
	variants: {
		type: {
			solid: [
				'mx-auto block w-fit rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:scale-95',
				'dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800',
			],
			ghost: [
				'rounded-md px-4 py-2 font-medium text-neutral-500 hover:bg-neutral-200 hover:text-black',
			],
		},
		size: {
			sm: ['px-4 py-1'],
			md: ['px-4 py-2'],
		},
	},
	defaultVariants: {
		type: 'solid',
		size: 'md',
	},
})

export default function Button({
	size,
	type,
	href,
	children,
	className,
	...props
}: Button.Props) {
	const Component = href ? Link : 'button'
	const properties = href ? { href, ...props } : { type: 'button', ...props }
	return (
		<Component
			className={cn(variants({ type, size }), className)}
			{...properties}
		>
			{children}
		</Component>
	)
}
