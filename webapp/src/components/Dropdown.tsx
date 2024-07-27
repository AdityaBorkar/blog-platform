import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export default function Dropdown({
	children,
	summary,
	...props
}: Readonly<{
	children: React.ReactNode
	summary: React.ReactNode
	className?: string
}>) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.details
			initial={false}
			transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
			// animate={{ height: isOpen ? 'auto' : '48px' }}
			// initial={{ opacity: 0, height: 0 }}
			// animate={{ opacity: 1, height: 'auto' }}
			// exit={{ opacity: 0, height: 0 }}
			// transition={{ duration: 0.5 }}
			className='relative'
			// open={isOpen}
			// onToggle={() => setIsOpen(!isOpen)}
		>
			{/* FRAMER ANIMATION */}
			{/* TODO: Disappear on click outside */}
			<motion.summary
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				transition={{ duration: 0.3 }}
			>
				{summary}
			</motion.summary>
			<AnimatePresence initial={false}>
				<motion.div
					initial='collapsed'
					animate='open'
					exit='collapsed'
					variants={{
						open: { opacity: 1, height: 'auto' },
						collapsed: { opacity: 0, height: 0 },
					}}
					transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
					// initial={{ opacity: 0, y: -10 }}
					// animate={{ opacity: 1, y: 0 }}
					// transition={{ duration: 0.3 }}
					// style={{ overflow: 'hidden' }}
					// initial={{ height: 0, opacity: 0 }}
					// animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
					// exit={{ height: 0, opacity: 0 }}
					// transition={{ height: { duration: 0.5 }, opacity: { duration: 0.3 } }}
					className={cn(
						'absolute left-0 top-8 flex w-max min-w-full flex-col rounded-md border border-neutral-300 bg-neutral-50 shadow-lg',
						'dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-black/50',
					)}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</motion.details>
	)
}
