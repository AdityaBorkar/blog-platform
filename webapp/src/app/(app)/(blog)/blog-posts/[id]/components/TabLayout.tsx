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
			<header className='sticky top-0 grid grid-cols-5 border-b border-neutral-800 text-center'>
				{tabs.map((item, index) => (
					<button
						key={item.name}
						type='button'
						onClick={() => setTabIndex(index)}
						className={twMerge(
							'relative block cursor-default py-2.5 text-neutral-500',
							'after:absolute after:bottom-0 after:left-0 after:h-0 after:w-full',
							index === tabIndex
								? 'text-neutral-200 after:border-b'
								: 'hover:text-neutral-300 hover:after:block hover:after:border-b hover:after:border-neutral-500',
						)}
					>
						{item.name}
					</button>
				))}
			</header>

			<div className='overflow-auto'>
				<Component />
			</div>
		</aside>
	)
}
