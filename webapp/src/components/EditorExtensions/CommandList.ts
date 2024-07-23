import {
	LuCalendar,
	LuCheckSquare,
	LuCodesandbox,
	LuHeading1,
	LuHeading2,
	LuHeading3,
	LuHeading4,
	LuHeading5,
	LuHeading6,
	LuImagePlus,
	LuInstagram,
	LuLink2,
	LuList,
	LuListOrdered,
	LuQuote,
	LuSeparatorHorizontal,
	LuTable,
	LuText,
	LuTwitter,
	LuX,
	LuYoutube,
} from 'react-icons/lu'

import type { Editor, Range } from '@tiptap/core'
import { icons } from '@tiptap/pm/menu'

type CommandProps = {
	editor: Editor
	range: Range
	// state: EditorState
	// isActive?: boolean
}

export const CommandList = [
	{
		title: 'Heading 1',
		icon: LuHeading1,
		command({ editor, range }: CommandProps) {
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
		icon: LuHeading2,
		command({ editor, range }: CommandProps) {
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
		icon: LuHeading3,
		command({ editor, range }: CommandProps) {
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
		icon: LuHeading4,
		command({ editor, range }: CommandProps) {
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
		icon: LuHeading5,
		command({ editor, range }: CommandProps) {
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
		icon: LuHeading6,
		command({ editor, range }: CommandProps) {
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
		icon: LuText,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},

	{
		title: 'Task',
		icon: LuCheckSquare,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Table',
		icon: LuTable,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Numbered List',
		icon: LuListOrdered,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Bullet List',
		icon: LuList,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Blockquote',
		icon: LuQuote,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Divider',
		icon: LuSeparatorHorizontal,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Image',
		icon: LuImagePlus,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Web Bookmark',
		icon: LuLink2,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Date Time',
		icon: LuCalendar,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	// {
	// 	title: 'Abbreviation',
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'Audio',
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	{
		title: 'YouTube',
		icon: LuYoutube,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Tweet',
		icon: LuTwitter,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Instagram',
		icon: LuInstagram,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	{
		title: 'Codesandbox',
		icon: LuCodesandbox,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setNode('paragraph').run()
		},
	},
	// {
	// 	title: 'Video',
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'Bold',
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setMark('bold').run()
	// 	},
	// },
	// {
	// 	title: 'Italic',
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setMark('italic').run()
	// 	},
	// },
]
