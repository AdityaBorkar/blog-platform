import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react'
import type { IconType } from 'react-icons'

import { cn } from '@/lib/utils'
import type { CommandProps } from '@tiptap/core'
import type { SuggestionProps } from '@tiptap/suggestion'

const DropdownComponent = forwardRef(function DropdownComponent(
	props: SuggestionProps<
		{
			title: string
			icon: IconType
			command(props: CommandProps): void
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		any
	>,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	ref: any,
) {
	const [selectedIndex, setSelectedIndex] = useState(0)

	const WrapperRef = useRef<HTMLDivElement>(null)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setSelectedIndex(0)
		WrapperRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		})
	}, [props.items])

	function selectItem(index: number) {
		const item = props.items[index]
		item?.command(props)
	}

	useImperativeHandle(ref, () => ({
		onKeyDown: (key: string) => {
			if (key === 'ArrowUp') {
				const index =
					(selectedIndex + props.items.length - 1) % props.items.length
				setSelectedIndex(index)
				return true
			}
			if (key === 'ArrowDown') {
				const index = (selectedIndex + 1) % props.items.length
				setSelectedIndex(index)
				return true
			}
			if (key === 'Enter' || key === 'Tab') {
				selectItem(selectedIndex)
				return true
			}
			return false
		},
	}))

	return (
		<div
			ref={WrapperRef}
			className='flex max-h-56 w-fit flex-col overflow-auto rounded-lg border border-neutral-300 bg-neutral-100 p-0.5 text-left font-sans text-sm'
		>
			{props.items.length ? (
				props.items.map((item, index) => (
					<button
						key={item.title}
						type='button'
						onClick={() => selectItem(index)}
						className={cn(
							'w-44 rounded-md px-2.5 py-1 text-left font-medium hover:bg-neutral-200 focus:bg-yellow-200',
							selectedIndex === index ? 'bg-yellow-200' : '',
						)}
					>
						{item.icon && (
							<item.icon className='-mt-0.5 mr-1.5 inline-block size-4 text-neutral-500' />
						)}
						{item.title}
					</button>
				))
			) : (
				<div className='px-4 py-2 text-center text-neutral-500'>
					No result found.
				</div>
			)}
		</div>
	)
})

export default DropdownComponent
