// addProseMirrorPlugins() {
// 	return [
// 		{
// 			// Handle image uploads
// 			props: {
// 				handleDOMEvents: {
// 					drop: (view, event) => {
// 						// Check if an image is being dropped
// 						if (event.dataTransfer && event.dataTransfer.files.length > 0) {
// 							// Get the first file
// 							const file = event.dataTransfer.files[0]
// 							// Upload the file to S3
// 							// s3Client
// 							// 	.upload({
// 							// 		Bucket: 'your-bucket-name',
// 							// 		Key: file.name,
// 							// 		Body: file,
// 							// 	})
// 							// 	.then((data) => {
// 							// 		// Update the image src with the uploaded image URL
// 							// 		view.dispatch(
// 							// 			view.state.tr.setNodeAttribute(
// 							// 				view.state.selection.from,
// 							// 				'src',
// 							// 				data.Location,
// 							// 			),
// 							// 		)
// 							// 	})
// 							// 	.catch((err) => {
// 							// 		console.error(err)
// 							// 	})
// 						}
// 					},
// 				},
// 			},
// 		},
// 	]
// ---
import React, { useEffect, useState } from 'react'

import { Extension } from '@tiptap/core'
import type { CommandProps, RawCommands } from '@tiptap/core'
import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		// figure: {
		// 	/**
		// 	 * Add a figure element
		// 	 */
		// 	setFigure: (options: {
		// 		src: string
		// 		alt?: string
		// 		title?: string
		// 		caption?: string
		// 	}) => ReturnType

		// 	/**
		// 	 * Converts an image to a figure
		// 	 */
		// 	imageToFigure: () => ReturnType

		// 	/**
		// 	 * Converts a figure to an image
		// 	 */
		// 	figureToImage: () => ReturnType
		// }
		setImage: (options: {
			src: string
			alt?: string
			title?: string
			caption?: string
		}) => ReturnType
	}
}

const Image = Node.create({
	name: 'image',

	addOptions() {
		return {
			HTMLAttributes: {},
		}
	},
	addAttributes() {
		return {
			src: { default: './editor-assets/image-placeholder.png' },
			alt: { default: null },
			title: { default: null },
			// width: { default: null },
			// height: { default: null },
			caption: { default: 'This image shall not be shown in preview.' },
		}
	},

	addNodeView() {
		console.log('adding node view')
		return ReactNodeViewRenderer(ImageComponent)
	},
	parseHTML() {
		return [{ tag: 'img' }]
	},
	renderHTML({ HTMLAttributes }) {
		console.log('rendering html')
		return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
	},

	addCommands() {
		return {
			setImage:
				(options) =>
				({ commands }: CommandProps): boolean => {
					console.log('setting image: ', { ctx: this, options })
					const fn = commands.insertContent({
						type: this.name,
						attrs: options,
					})
					console.log('fn: ', fn)
					return fn
				},
		}
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

export const ImageComponent = ({ node, updateAttributes }) => {
	console.log('rendering image component: ', node)

	const [isUploading, setIsUploading] = useState(node.attrs['data-uploading'])
	const [showOptions, setShowOptions] = useState(false)

	useEffect(() => {
		if (isUploading) {
			// Simulating upload completion
			setTimeout(() => {
				setIsUploading(false)
				updateAttributes({ 'data-uploading': false })
			}, 2000)
		}
	}, [isUploading])

	const handleImageClick = () => {
		setShowOptions(!showOptions)
	}

	const handleDimensionChange = (dimension, value) => {
		updateAttributes({ [dimension]: value })
	}

	const handleAltTextChange = (event) => {
		updateAttributes({ alt: event.target.value })
	}

	const handleCaptionChange = (event) => {
		updateAttributes({ caption: event.target.value })
	}

	return (
		<NodeViewWrapper className='image-component border-2 border-dashed border-black !p-12'>
			{isUploading ? (
				<div className='image-placeholder'>
					<div className='blur-overlay'></div>
					<span>Uploading...</span>
				</div>
			) : (
				<>
					<img
						className='image-component'
						src={node.attrs.src}
						alt={node.attrs.alt}
						// width={node.attrs.width}
						// height={node.attrs.height}
						onClick={handleImageClick}
					/>
					{node.attrs.caption && <figcaption>{node.attrs.caption}</figcaption>}
				</>
			)}
			{showOptions && (
				<div className='image-options'>
					<input
						type='number'
						placeholder='Width'
						value={node.attrs.width || ''}
						onChange={(e) => handleDimensionChange('width', e.target.value)}
					/>
					<input
						type='number'
						placeholder='Height'
						value={node.attrs.height || ''}
						onChange={(e) => handleDimensionChange('height', e.target.value)}
					/>
					<input
						type='text'
						placeholder='Alt text'
						value={node.attrs.alt || ''}
						onChange={handleAltTextChange}
					/>
					<input
						type='text'
						placeholder='Caption'
						value={node.attrs.caption || ''}
						onChange={handleCaptionChange}
					/>
					<button
						onClick={() => {
							/* Implement crop functionality */
						}}
					>
						Crop
					</button>
				</div>
			)}
		</NodeViewWrapper>
	)
}
