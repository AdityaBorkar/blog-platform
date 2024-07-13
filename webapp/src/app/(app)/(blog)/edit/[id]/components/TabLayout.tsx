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
	const [tabIndex, setTabIndex] = useState(4)
	const Component = tabs[tabIndex].component
	return (
		<aside className={twMerge('relative', className)}>
			<header className='sticky top-0 grid grid-cols-5 border-b border-neutral-800 text-center text-sm'>
				{tabs.map((item, index) => (
					<button
						key={item.name}
						type='button'
						onClick={() => setTabIndex(index)}
						className={twMerge(
							'block cursor-default py-2.5 text-neutral-400',
							index === tabIndex
								? 'bg-neutral-800 text-neutral-200'
								: 'hover:bg-neutral-900 hover:text-neutral-300',
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
