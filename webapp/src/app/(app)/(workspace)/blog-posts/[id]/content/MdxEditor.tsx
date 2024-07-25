'use client'

import { type ButtonHTMLAttributes, useRef } from 'react'
import {
	LuAlignCenter,
	LuAlignJustify,
	LuAlignLeft,
	LuAlignRight,
	LuBold,
	LuCode,
	LuHighlighter,
	LuItalic,
	LuLink,
	LuRedo2,
	LuStrikethrough,
	LuSubscript,
	LuSuperscript,
	LuUnderline,
	LuUndo2,
} from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import CodeSandbox from '@/components/EditorExtensions/CodeSandbox'
import ContentLinter from '@/components/EditorExtensions/ContentLinter'
import Image from '@/components/EditorExtensions/Image'
import InlineLink from '@/components/EditorExtensions/InlineLink'
import Instagram from '@/components/EditorExtensions/Instagram'
import SlashCommands from '@/components/EditorExtensions/SlashCommands'
import Table from '@/components/EditorExtensions/Table'
import Task from '@/components/EditorExtensions/Task'
import { TrailingNode } from '@/components/EditorExtensions/TrailingNode'
import Twitter from '@/components/EditorExtensions/Twitter'
import WebBookmark from '@/components/EditorExtensions/WebBookmark'
import Youtube from '@/components/EditorExtensions/Youtube'
import Highlight from '@tiptap/extension-highlight'
import ListKeymap from '@tiptap/extension-list-keymap'
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Tiptap() {
	const WrapperDivRef = useRef<HTMLDivElement>(null)

	// const [content, setContent] = useAtom(Content)
	const editor = useEditor({
		// editorProps: {
		// 	attributes: {
		// 		class:
		// 			'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
		// 	},
		// },
		extensions: [
			StarterKit,
			// https://tiptap.dev/docs/editor/extensions/functionality/starterkit contains:
			// Blockquote
			// BulletList
			// CodeBlock
			// Document
			// HardBreak
			// Heading
			// HorizontalRule
			// ListItem
			// OrderedList
			// Paragraph
			// Text
			// Bold
			// Code
			// Italic
			// Strike
			// Dropcursor
			// Gapcursor
			// History
			// ---
			Placeholder.configure({
				placeholder: "Press '/' for commands OR continue writing...",
			}),
			Typography,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
			Subscript,
			Superscript,
			Highlight,
			Underline,
			ListKeymap,
			TrailingNode,
			SlashCommands,
			InlineLink,
			Task,
			Table,
			// Spacer,
			Image,
			WebBookmark,
			Youtube,
			Twitter,
			Instagram,
			CodeSandbox,
			ContentLinter,
			// CustomBold,
			// UniqueID.configure({
			// 	types: ['heading', 'paragraph'],
			// }),
			// Abbreviation,
			// DateTime,
		],
		content: `
			<p>Hello World! 🌎️</p>
			<img src="./editor-assets/1600x900.png" /> 
			<p>Hello World! 🌎️</p>
			<img src="./user-generated/gta.png" /> 
		`,
		// immediatelyRender: false,
		// shouldRerenderOnTransaction: false,
	})

	// Copy Duplicate Paste Rearrange Delete Add Block
	// AI Tools: Change Tone Simplify Text Rephrase Fix Grammar

	// TODO: Undo, Redo, Version History
	// 	<button
	// 	type='button'
	// 	onClick={() => editor.chain().focus().undo().run()}
	// 	disabled={!editor.can().undo()}
	// 	className='rounded-md border border-neutral-200 px-2 py-1 text-sm disabled:opacity-50'
	// >
	// 	<LuUndo2 className='-mt-1 mr-1 inline-block size-4' />
	// 	Undo
	// </button>
	// <button
	// 	type='button'
	// 	onClick={() => editor.chain().focus().redo().run()}
	// 	disabled={!editor.can().redo()}
	// 	className='rounded-md border border-neutral-200 px-2 py-1 text-sm disabled:opacity-50'
	// >
	// 	<LuRedo2 className='-mt-1 mr-1 inline-block size-4' />
	// 	Redo
	// </button>

	// TODO: Focus mode
	// TODO: Keyboard shortcuts
	// https://tiptap.dev/docs/editor/core-concepts/keyboard-shortcuts
	// TODO: Integrated sound and haptic

	return (
		<div
			ref={WrapperDivRef}
			className='h-full w-full px-8 pb-[50vh]'
			onMouseDown={(e) => {
				if (e.target !== WrapperDivRef.current) return
				editor
					?.chain()
					.setTextSelection(editor.state.doc.content.size)
					.focus()
					.run()
			}}
		>
			<EditorContent
				editor={editor}
				className='cursor-text select-text text-base'
			/>

			{editor && (
				<BubbleMenu editor={editor} tippyOptions={{ duration: 50 }}>
					<div className='flex w-fit cursor-default flex-row gap-1 rounded-lg border border-neutral-300 bg-neutral-200 p-0.5 text-sm shadow'>
						<BubbleMenuButton
							isActive={editor.isActive('bold')}
							onClick={() => editor.chain().focus().toggleBold().run()}
						>
							<LuBold />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('italic')}
							onClick={() => editor.chain().focus().toggleItalic().run()}
						>
							<LuItalic />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('underline')}
							onClick={() => editor.chain().focus().toggleUnderline().run()}
						>
							<LuUnderline />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('strike')}
							onClick={() => editor.chain().focus().toggleStrike().run()}
						>
							<LuStrikethrough />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('code')}
							onClick={() => editor.chain().focus().toggleCode().run()}
						>
							<LuCode />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('subscript')}
							onClick={() => editor.chain().focus().toggleSubscript().run()}
						>
							<LuSubscript />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('superscript')}
							onClick={() => editor.chain().focus().toggleSuperscript().run()}
						>
							<LuSuperscript />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive({ textAlign: 'left' })}
							onClick={() => editor.chain().focus().setTextAlign('left').run()}
						>
							<LuAlignLeft />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive({ textAlign: 'center' })}
							onClick={() =>
								editor.chain().focus().setTextAlign('center').run()
							}
						>
							<LuAlignCenter />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive({ textAlign: 'right' })}
							onClick={() => editor.chain().focus().setTextAlign('right').run()}
						>
							<LuAlignRight />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive({ textAlign: 'justify' })}
							onClick={() =>
								editor.chain().focus().setTextAlign('justify').run()
							}
						>
							<LuAlignJustify />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('highlight')}
							onClick={() => editor.chain().focus().toggleHighlight().run()}
						>
							<LuHighlighter />
						</BubbleMenuButton>
						<BubbleMenuButton
							isActive={editor.isActive('link')}
							onClick={() => editor.chain().focus().toggleLink().run()}
						>
							<LuLink />
						</BubbleMenuButton>
					</div>
				</BubbleMenu>
			)}
		</div>
	)
}

function BubbleMenuButton({
	property,
	isActive,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	isActive: boolean
}) {
	return (
		<button
			type='button'
			className={twMerge(
				'cursor-default rounded-md p-1.5',
				isActive ? 'bg-neutral-100' : 'hover:bg-neutral-100',
			)}
			{...props}
		>
			{children}
		</button>
	)
}
