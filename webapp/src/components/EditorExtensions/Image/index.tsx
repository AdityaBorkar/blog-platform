import EditorExtension_ImageComponent from './ImageComponent'
import { nodeInputRule } from '@tiptap/core'
import type { CommandProps } from '@tiptap/core'
import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		setImage: (options: {
			src: string
			alt?: string
			title?: string
			caption?: string
		}) => ReturnType
	}
}

const inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/

const Image = Node.create({
	name: 'image',

	draggable: true,

	content: 'block*',

	group: () => 'block',

	addOptions: () => ({ HTMLAttributes: {} }),

	addAttributes: () => ({
		src: { default: './editor-assets/1600x900.png' },
		alt: { default: null },
		title: { default: null },
		width: { default: null },
		height: { default: null },
		caption: { default: null },
	}),

	addNodeView: () => ReactNodeViewRenderer(EditorExtension_ImageComponent),

	parseHTML: () => [{ tag: 'img[src]:not([src^="data:"])' }],

	renderHTML({ HTMLAttributes }) {
		return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
	},

	// @ts-expect-error
	addCommands() {
		return {
			setImage:
				// @ts-expect-error


					(options) =>
					({ commands }: CommandProps) =>
						commands.insertContent({
							type: this.name,
							attrs: options,
						}),
		}
	},

	addInputRules() {
		return [
			nodeInputRule({
				find: inputRegex,
				type: this.type,
				getAttributes: (match) => {
					const [, , alt, src, title] = match
					return { src, alt, title }
				},
			}),
		]
	},

	// addPasteRules() {
	// 	return [
	// 		{
	// 			type: 'file',
	// 			handler: ({ file, view, dispatch }) => {
	// 				if (file.type.startsWith('image/')) {
	// 					const reader = new FileReader()
	// 					reader.onload = async (readerEvent) => {
	// 						const imageDataUrl = readerEvent.target.result
	// 						const s3Url = ` await uploadToS3(file)`
	// 						dispatch(
	// 							view.state.tr.replaceSelectionWith(
	// 								this.type.create({ src: s3Url, 'data-uploading': true }),
	// 							),
	// 						)
	// 					}
	// 					reader.readAsDataURL(file)
	// 					return true
	// 				}
	// 				return false
	// 			},
	// 		},
	// 	]
	// },
})

export default Image
