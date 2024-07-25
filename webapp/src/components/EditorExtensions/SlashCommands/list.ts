import {
	LuArrowUpToLine,
	LuCalendar,
	LuCheckSquare,
	LuCode2,
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
	LuYoutube,
} from 'react-icons/lu'

import type { Editor, Range } from '@tiptap/core'

type CommandProps = { editor: Editor; range: Range }

export const SlashCommandsList = [
	{
		title: 'Heading 1',
		icon: LuHeading1,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHeading({ level: 1 }).run()
		},
	},
	{
		title: 'Heading 2',
		icon: LuHeading2,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHeading({ level: 2 }).run()
		},
	},
	{
		title: 'Heading 3',
		icon: LuHeading3,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHeading({ level: 3 }).run()
		},
	},
	{
		title: 'Heading 4',
		icon: LuHeading4,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHeading({ level: 4 }).run()
		},
	},
	{
		title: 'Heading 5',
		icon: LuHeading5,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHeading({ level: 5 }).run()
		},
	},
	{
		title: 'Heading 6',
		icon: LuHeading6,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHeading({ level: 6 }).run()
		},
	},
	{
		title: 'Paragraph',
		icon: LuText,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setParagraph().run()
		},
	},
	{
		title: 'Numbered List',
		icon: LuListOrdered,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).toggleOrderedList().run()
		},
	},
	{
		title: 'Bullet List',
		icon: LuList,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).toggleBulletList().run()
		},
	},
	// {
	// 	title: 'Task',
	// 	icon: LuCheckSquare,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('task').run()
	// 	},
	// },
	{
		title: 'Blockquote',
		icon: LuQuote,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setBlockquote().run()
		},
	},
	{
		title: 'Code Block',
		icon: LuCode2,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setCodeBlock().run()
		},
	},
	{
		title: 'Divider',
		icon: LuSeparatorHorizontal,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setHorizontalRule().run()
		},
	},
	// {
	// 	title: 'Spacer',
	// 	icon: LuArrowUpToLine,
	// 	command({ editor, range }: CommandProps) {
	// 		// TODO: Make this a spacer component that can be extended
	// 		// TODO; Make sure this component is rarely used
	// 		editor.chain().focus().deleteRange(range).setHardBreak().run()
	// 	},
	// },
	// {
	// 	title: 'Table',
	// 	icon: LuTable,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('table').run()
	// 	},
	// },
	{
		title: 'Image',
		icon: LuImagePlus,
		command({ editor, range }: CommandProps) {
			editor.chain().focus().deleteRange(range).setImage().run()
		},
	},
	// {
	// 	title: 'Video',
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
	// {
	// 	title: 'Abbreviation',
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'Date Time',
	// 	icon: LuCalendar,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'Web Bookmark',
	// 	icon: LuLink2,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).set('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'YouTube',
	// 	icon: LuYoutube,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'Twitter',
	// 	icon: LuTwitter,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'Instagram',
	// 	icon: LuInstagram,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
	// {
	// 	title: 'CodeSandbox',
	// 	icon: LuCodesandbox,
	// 	command({ editor, range }: CommandProps) {
	// 		editor.chain().focus().deleteRange(range).setNode('paragraph').run()
	// 	},
	// },
]
