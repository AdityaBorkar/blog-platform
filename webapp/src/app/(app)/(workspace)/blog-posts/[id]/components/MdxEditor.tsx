'use client'

import type { ButtonHTMLAttributes } from 'react'
import {
	LuAlignCenter,
	LuAlignLeft,
	LuAlignRight,
	LuBold,
	LuCode,
	LuHighlighter,
	LuItalic,
	LuLink,
	LuMessageSquare,
	LuStrikethrough,
	LuSubscript,
	LuSuperscript,
	LuUnderline,
} from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import BulletList from '@tiptap/extension-bullet-list'
// import Bold from '@tiptap/extension-bold'
// import BubbleMenu from '@tiptap/extension-bubble-menu'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import ListItem from '@tiptap/extension-list-item'
import ListKeymap from '@tiptap/extension-list-keymap'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Typography from '@tiptap/extension-typography'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Tiptap() {
	/* Editor - MDX + Hemingway */
	// const [content, setContent] = useAtom(Content)

	// const CustomBold = Bold.extend({
	// 	renderHTML({ HTMLAttributes }) {
	// 		// Original:
	// 		// return ['strong', HTMLAttributes, 0]
	// 		return ['b', HTMLAttributes, 0]
	// 	},
	// })

	const editor = useEditor({
		// editorProps: {
		// 	attributes: {
		// 		class:
		// 			'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
		// 	},
		// },
		extensions: [
			StarterKit,
			Typography.configure({
				oneHalf: false,
				oneQuarter: false,
				threeQuarters: false,
			}),

			Document,
			Paragraph,
			Text,
			BulletList,
			ListItem,
			ListKeymap,
			// CustomBold,
			Heading.configure({
				levels: [1, 2, 3],
			}),
			// UniqueID.configure({
			// 	types: ['heading', 'paragraph'],
			// }),
		],
		content: '<p>Hello World! 🌎️</p>',
		immediatelyRender: false,
	})

	// TODO: Extract Links

	// editor.storage.characterCount.characters()
	// editor.storage.characterCount.words()

	// TODO: Avoid Blink-Refresh for BubbbleMenu onChange.

	return (
		<div className='h-full w-full text-base'>
			<EditorContent editor={editor} />

			{editor && (
				<BubbleMenu editor={editor} tippyOptions={{ duration: 50 }}>
					<div className='flex w-fit cursor-default flex-row gap-1 rounded-lg border border-neutral-300 bg-neutral-200 p-0.5 text-sm'>
						<Button
							isActive={editor.isActive('bold')}
							onClick={() => editor.chain().focus().toggleBold().run()}
						>
							<LuBold />
						</Button>
						<Button
							isActive={editor.isActive('italic')}
							onClick={() => editor.chain().focus().toggleItalic().run()}
						>
							<LuItalic />
						</Button>
						<Button
							isActive={editor.isActive('underline')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuUnderline />
						</Button>
						<Button
							isActive={editor.isActive('strike')}
							onClick={() => editor.chain().focus().toggleStrike().run()}
						>
							<LuStrikethrough />
						</Button>
						<Button
							isActive={editor.isActive('code')}
							onClick={() => editor.chain().focus().toggleCode().run()}
						>
							<LuCode />
						</Button>
						<Button
							isActive={editor.isActive('sub')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuSubscript />
						</Button>
						<Button
							isActive={editor.isActive('sup')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuSuperscript />
						</Button>
						<Button
							isActive={editor.isActive('align-center')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuAlignLeft />
						</Button>
						<Button
							isActive={editor.isActive('align-center')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuAlignCenter />
						</Button>
						<Button
							isActive={editor.isActive('align-center')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuAlignRight />
						</Button>
						<Button
							isActive={editor.isActive('highlight')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuHighlighter />
						</Button>
						<Button
							isActive={editor.isActive('highlight')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuLink />
						</Button>
						<Button
							isActive={editor.isActive('highlight')}
							onClick={() =>
								editor.chain().focus().toggleMark('underline').run()
							}
						>
							<LuMessageSquare />
						</Button>
					</div>
				</BubbleMenu>
			)}
		</div>
	)
}

function Button({
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
