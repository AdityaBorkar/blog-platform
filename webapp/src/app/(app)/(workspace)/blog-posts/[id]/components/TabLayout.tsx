import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function TabLayout({
	className,
	tabs,
}: Readonly<{
	className?: string
	tabs: {
		name: string
		component: () => React.JSX.Element
	}[]
}>) {
	const [tabIndex, setTabIndex] = useState(2)
	const Component = tabs[tabIndex].component
	return (
		<aside className={twMerge('relative', className)}>
			<header
				className={twMerge(
					'sticky top-0 grid grid-cols-5 border-b border-neutral-400 text-center',
					'dark:border-neutral-800',
				)}
			>
				{tabs.map((item, index) => (
					<button
						key={item.name}
						type='button'
						onClick={() => setTabIndex(index)}
						className={twMerge(
							'relative block cursor-default py-2.5 font-medium',
							'text-neutral-500 dark:text-neutral-500',
							'after:absolute after:bottom-0 after:left-0 after:h-0 after:w-full',
							index === tabIndex
								? 'text-neutral-950 after:border-b after:border-neutral-800' +
										' dark:text-neutral-200'
								: 'hover:text-neutral-700 hover:after:block hover:after:border-b hover:after:border-neutral-500' +
										' dark:hover:text-neutral-300 dark:hover:after:border-neutral-500',
						)}
					>
						{item.name}
					</button>
				))}
			</header>

			<div
				className={twMerge(
					'overflow-auto text-neutral-700',
					'dark:text-neutral-300',
				)}
			>
				<Component />
			</div>
		</aside>
	)
}
