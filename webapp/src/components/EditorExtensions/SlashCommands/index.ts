import tippy from 'tippy.js'

import DropdownComponent from './DropdownComponent'
import { SlashCommandsList } from './list'
import { Extension } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion from '@tiptap/suggestion'

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
