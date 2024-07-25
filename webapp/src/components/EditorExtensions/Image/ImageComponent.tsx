import React, { useState } from 'react'
import { LuAlignCenter, LuCrop, LuReplace } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import { NodeViewWrapper } from '@tiptap/react'

type EditorExtension_ImageComponentProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	node: any
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	updateAttributes: (attributes: any) => void
}

export default function EditorExtension_ImageComponent({
	node,
	updateAttributes,
}: EditorExtension_ImageComponentProps) {
	const [isUploading, setIsUploading] = useState(node.attrs['data-uploading'])

	// updateAttributes({ [dimension]: value })
	// setIsUploading(false)
	// updateAttributes({ 'data-uploading': false })

	// TODO: Replace image with new image
	// TODO: Align image to center
	// TODO: Crop image
	// TODO: Upload image to S3 (and media) and update src
	// TODO: Adjust Height and Width using drag handlers

	return (
		<NodeViewWrapper className='group cursor-default py-12'>
			{isUploading ? (
				<div className='image-placeholder'>
					<div className='blur-overlay' />
					<span>[Spinner] Uploading</span>
				</div>
			) : (
				<figure>
					<div className='relative mx-auto w-3/5'>
						<img src={node.attrs.src} alt={node.attrs.alt} />
						<div
							className={twMerge(
								'absolute left-4 top-4 flex-row gap-0.5 rounded-lg border border-neutral-300 bg-neutral-200 p-1 shadow-md group-hover:flex',
								isUploading ? 'flex' : 'hidden',
							)}
						>
							{isUploading ? (
								<>Uploading...</>
							) : (
								<>
									<LuCrop className='box-content rounded-md p-1 hover:bg-white' />
									<LuAlignCenter className='box-content rounded-md p-1 hover:bg-white' />
									<LuReplace className='box-content rounded-md p-1 hover:bg-white' />
								</>
							)}
						</div>
					</div>

					<div className='mx-auto w-4/5'>
						<div className='flex flex-row pt-2'>
							<span className='relative top-1 mr-2 h-fit rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 text-xs font-semibold text-neutral-500'>
								ALT TEXT
							</span>
							<input
								type='text'
								placeholder='Describe the contents of the image with keywords'
								className='flex-grow pt-1'
								value={node.attrs.alt || ''}
								onChange={(event) =>
									updateAttributes({ alt: event.target.value })
								}
							/>
						</div>
						<div className='flex flex-row pt-2'>
							<span className='relative top-1 mr-2 h-fit rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 text-xs font-semibold text-neutral-500'>
								CAPTION
							</span>
							<input
								type='text'
								placeholder='Optional Caption'
								className='flex-grow pt-1'
								value={node.attrs.caption || ''}
								onChange={(event) =>
									updateAttributes({ caption: event.target.value })
								}
							/>
						</div>
					</div>
				</figure>
			)}
		</NodeViewWrapper>
	)
}
