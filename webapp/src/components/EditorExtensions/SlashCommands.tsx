import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import tippy from 'tippy.js'

import { SlashCommandsList } from './SlashCommandsList'
import type { CommandProps } from '@tiptap/core'
import { Extension } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import type { SuggestionProps } from '@tiptap/suggestion'
import Suggestion from '@tiptap/suggestion'

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

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => setSelectedIndex(0), [props.items])

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
		<div className='flex max-h-56 w-fit flex-col overflow-auto rounded-lg border border-neutral-300 bg-neutral-100 p-0.5 text-left font-sans text-sm'>
			{props.items.length ? (
				props.items.map((item, index) => (
					<button
						key={item.title}
						type='button'
						onClick={() => selectItem(index)}
						className={twMerge(
							'w-44 rounded-md px-2.5 py-1 text-left font-medium hover:bg-neutral-200',
							selectedIndex === index ? 'bg-neutral-200/50' : '',
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

export default Extension.create({
	name: 'slashCommands',
	addProseMirrorPlugins() {
		return [
			Suggestion({
				char: '/',
				startOfLine: true,
				editor: this.editor,
				items({ query }) {
					return SlashCommandsList.filter((item) =>
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
							// @ts-expect-error
							return react?.ref?.onKeyDown(props.event.key) || false
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
