'use client'

import type { ButtonHTMLAttributes } from 'react'
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
	LuMessageSquare,
	LuRedo,
	LuRedo2,
	LuStrikethrough,
	LuSubscript,
	LuSuperscript,
	LuUnderline,
	LuUndo,
	LuUndo2,
} from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import GrammarLinter from '@/components/EditorExtensions/GrammarLinter'
import SlashCommands from '@/components/EditorExtensions/SlashCommands'
import { TrailingNode } from '@/components/EditorExtensions/TrailingNode'
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
			// GrammarLinter,
			// TODO: Make an extension: Image / Youtube / Gist / Tweet / Embed / Link / TOC
			// CustomBold,
			// UniqueID.configure({
			// 	types: ['heading', 'paragraph'],
			// }),
		],
		content: '<p>Hello World! 🌎️</p>',
		// immediatelyRender: false,
		// shouldRerenderOnTransaction: false,
	})

	// TODO: Extract Links
	// editor.storage.characterCount.characters()
	// editor.storage.characterCount.words()

	return (
		<div className='h-full w-full'>
			{editor && (
				<div className='mb-8 flex flex-row gap-4'>
					<button
						type='button'
						onClick={() => editor.chain().focus().undo().run()}
						disabled={!editor.can().undo()}
						className='rounded-md border border-neutral-200 px-2 py-1 text-sm disabled:opacity-50'
					>
						<LuUndo2 className='-mt-1 mr-1 inline-block size-4' />
						Undo
					</button>
					<button
						type='button'
						onClick={() => editor.chain().focus().redo().run()}
						disabled={!editor.can().redo()}
						className='rounded-md border border-neutral-200 px-2 py-1 text-sm disabled:opacity-50'
					>
						<LuRedo2 className='-mt-1 mr-1 inline-block size-4' />
						Redo
					</button>
				</div>
			)}

			<EditorContent
				editor={editor}
				className='cursor-text select-text text-base'
			/>

			{editor && (
				<BubbleMenu editor={editor} tippyOptions={{ duration: 50 }}>
					<div className='flex w-fit cursor-default flex-row gap-1 rounded-lg border border-neutral-300 bg-neutral-200 p-0.5 text-sm'>
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
						{/* <Button
							isActive={editor.isActive('highlight')}
							onClick={() =>
								editor.chain().focus().toggl('underline').run()
							}
						>
							<LuLink />
						</Button> */}
						{/* <Button
							isActive={editor.isActive('highlight')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuMessageSquare />
						</Button> */}
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
