import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface ButtonProps extends VariantProps<typeof variants> {
	href?: string
	className?: string
	children?: React.ReactNode
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
		scheme: {
			primary: [
				'bg-primary text-primary-foreground hover:bg-primary/90',
				'dark:bg-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/90',
			],
			secondary: [
				'bg-secondary text-secondary-foreground hover:bg-secondary/90',
				'dark:bg-secondary-foreground dark:text-secondary-foreground dark:hover:bg-secondary-foreground/90',
			],
			destructive: [
				'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				'dark:bg-destructive-foreground dark:text-destructive-foreground dark:hover:bg-destructive-foreground/90',
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
		scheme: 'primary',
	},
})

export default function Button({
	size,
	type,
	href,
	children,
	className,
	...props
}: ButtonProps) {
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
