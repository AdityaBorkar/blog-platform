import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import tippy from 'tippy.js'

import { CommandList } from './CommandList'
import { Extension } from '@tiptap/core'
import type { Editor, Range } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion from '@tiptap/suggestion'

export default Extension.create({
	name: 'slashCommands',
	// addOptions() {
	// 	type CommandProps = {
	// 		editor: Editor
	// 		range: Range
	// 		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	// 		props: any
	// 	}
	// 	return {
	// 		suggestion: {
	// 			command({ editor, range, props }: CommandProps) {
	// 				props.command({ editor, range })
	// 			},
	// 		},
	// 	}
	// },
	addProseMirrorPlugins() {
		return [
			Suggestion({
				char: '/',
				startOfLine: true,
				editor: this.editor,
				items({ query }) {
					return CommandList.filter((item) =>
						item.title.toLowerCase().startsWith(query.toLowerCase()),
					)
				},
				render() {
					let react: ReactRenderer
					let popup: any
					return {
						onStart(props) {
							const { editor } = props
							react = new ReactRenderer(DropdownComponent, { props, editor })
							popup = tippy('body', {
								getReferenceClientRect: props.clientRect,
								appendTo: () => document.body,
								content: react.element,
								showOnCreate: true,
								interactive: true,
								trigger: 'manual',
								placement: 'bottom-start',
							})
						},
						onUpdate(props) {
							react.updateProps(props)
							popup[0].setProps({
								getReferenceClientRect: props.clientRect,
							})
						},
						onKeyDown(props) {
							if (props.event.key === 'Escape') {
								popup[0].hide()
								return true
							}
							// TODO: Pass Event:
							return false
						},
						onExit() {
							popup[0].destroy()
							react?.destroy()
						},
					}
				},
			}),
		]
	},
})

function DropdownComponent(props: {
	editor: Editor
	range: Range
	items: {
		title: string
		icon: IconType
		command: () => void
	}[]
	selectedIndex: number
	command: ({ editor, range }: { editor: Editor; range: Range }) => void
}) {
	// TODO:
	// const [selectedIndex, setSelectedIndex] = useState(0)

	// const selectItem = (index: number) => {
	// 	const item = props.items[index]

	// 	if (item) {
	// 		props.command({ id: item })
	// 	}
	// }

	// const upHandler = () => {
	// 	setSelectedIndex(
	// 		(selectedIndex + props.items.length - 1) % props.items.length,
	// 	)
	// }

	// const downHandler = () => {
	// 	setSelectedIndex((selectedIndex + 1) % props.items.length)
	// }

	// const enterHandler = () => {
	// 	selectItem(selectedIndex)
	// }

	// useEffect(() => setSelectedIndex(0), [props.items])

	// useImperativeHandle(ref, () => ({
	// 	onKeyDown: ({ event }) => {
	// 		if (event.key === 'ArrowUp') {
	// 			upHandler()
	// 			return true
	// 		}

	// 		if (event.key === 'ArrowDown') {
	// 			downHandler()
	// 			return true
	// 		}

	// 		if (event.key === 'Enter') {
	// 			enterHandler()
	// 			return true
	// 		}

	// 		return false
	// 	},
	// }))

	return (
		<div className='flex max-h-56 w-fit flex-col overflow-auto rounded-lg border border-neutral-300 bg-neutral-100 p-0.5 text-left font-sans text-sm'>
			{props.items.length ? (
				props.items.map((item) => (
					<button
						key={item.title}
						type='button'
						onClick={() =>
							props.command({ editor: props.editor, range: props.range })
						}
						className={twMerge(
							'rounded-md px-2.5 py-1 text-left font-medium hover:bg-neutral-200',
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
}
