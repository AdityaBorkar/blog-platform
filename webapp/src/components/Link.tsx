import { Link as LinkPT } from 'next-view-transitions'

import { cn } from '@/lib/utils'

export default function Link({
	href,
	children,
	className,
	...props
}: Readonly<{
	href: string
	className?: string
	children: React.ReactNode
}> &
	React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<LinkPT
			href={href}
			className={cn('hover:text-primary-hover text-primary', className)}
			{...props}
		>
			{children}
		</LinkPT>
	)
}

// ? Custom Implementation:
// https://www.youtube.com/watch?v=fx6KMItwJAw
