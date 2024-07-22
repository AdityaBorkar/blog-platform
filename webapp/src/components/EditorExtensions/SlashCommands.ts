import { Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'

const blocks = [
	{
		title: 'Heading 1',
		command({ editor, range }) {
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode('heading', { level: 1 })
				.run()
		},
	},
	{
		title: 'Heading 2',
		command({ editor, range }) {
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode('heading', { level: 2 })
				.run()
		},
	},
	{
		title: 'Heading 3',
		command({ editor, range }) {
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode('heading', { level: 3 })
				.run()
		},
	},
	{
		title: 'Heading 4',
		command({ editor, range }) {
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode('heading', { level: 4 })
				.run()
		},
	},
	{
		title: 'Heading 5',
		command({ editor, range }) {
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode('heading', { level: 5 })
				.run()
		},
	},
	{
		title: 'Heading 6',
		command({ editor, range }) {
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode('heading', { level: 6 })
				.run()
		},
	},
	{
		title: 'Paragraph',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Link',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Task / Checkbox',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Table',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Numbered List',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Bullet List',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Blockquote',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Divider',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Image',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Web Bookmark',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Date Time',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Abbreviation',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Audio',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'YouTube Embed',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Tweet Embed',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Instagram Embed',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Codebox Embed',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	// {
	// 	title: 'Video',
	// 	command({ editor, range }) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	{
		title: 'Bold',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setMark('bold').run()
		},
	},
	{
		title: 'Italic',
		command({ editor, range }) {
			editor.chain().focus().deleteRange(range).setMark('italic').run()
		},
	},
]

const SlashCommands = Extension.create({
	name: 'slashCommands',
	addOptions() {
		return {
			suggestion: {
				char: '/',
				command: ({ editor, range, props }) => {
					props.command({ editor, range })
				},
			},
		}
	},
	addProseMirrorPlugins() {
		return [
			Suggestion({
				editor: this.editor,
				items({ query }) {
					return blocks
						.filter((item) =>
							item.title.toLowerCase().startsWith(query.toLowerCase()),
						)
						.slice(0, 10)
				},
				// render: suggestions.render,
			}),
		]
	},
})

export default SlashCommands

// const suggestions = {
// 	render: () => {
// 		let component
// 		let popup

// 		return {
// 			onStart: (props) => {
// 				component = new VueRenderer(CommandsList, {
// 					// using vue 2:
// 					// parent: this,
// 					// propsData: props,
// 					props,
// 					editor: props.editor,
// 				})

// 				if (!props.clientRect) {
// 					return
// 				}

// 				popup = tippy('body', {
// 					getReferenceClientRect: props.clientRect,
// 					appendTo: () => document.body,
// 					content: component.element,
// 					showOnCreate: true,
// 					interactive: true,
// 					trigger: 'manual',
// 					placement: 'bottom-start',
// 				})
// 			},

// 			onUpdate(props) {
// 				component.updateProps(props)

// 				if (!props.clientRect) {
// 					return
// 				}

// 				popup[0].setProps({
// 					getReferenceClientRect: props.clientRect,
// 				})
// 			},

// 			onKeyDown(props) {
// 				if (props.event.key === 'Escape') {
// 					popup[0].hide()

// 					return true
// 				}

// 				return component.ref?.onKeyDown(props)
// 			},

// 			onExit() {
// 				popup[0].destroy()
// 				component.destroy()
// 			},
// 		}
// 	},
// }
