import MetadataInput from '../components/MetadataInput'

export default function ContentEditor() {
	// TODO: Get from State
	const blog = {
		id: '1',
		title: 'Building an open-source blog platform (for myself)!',
		description:
			"My story about the journey to build a blog platform that I'm proud of.",
		author: 'Blog Author',
		category: 'Blog Category',
		tags: ['Blog Tag 1', 'Blog Tag 2'],
		content: 'Blog Content',
	}

	/* cursor-text select-text */

	return (
		<div className='mx-auto my-8 w-[56rem] py-8'>
			{/* <div className='mb-6 text-3xl font-bold'>{blog.title}</div> */}

			<div className='mb-16 grid grid-cols-3 divide-y divide-neutral-800 rounded-xl border border-neutral-800'>
				<MetadataInput label='Featured Image:' className='col-span-3'>
					<div className='mt-4 h-[18rem] w-[32rem] rounded-3xl bg-neutral-900' />
				</MetadataInput>
				<MetadataInput label='Meta Description:' className='col-span-3'>
					{blog.description}
				</MetadataInput>
				<MetadataInput label='Authors:'>a</MetadataInput>
				<MetadataInput label='Categories:'>{blog.category}</MetadataInput>
				<div />
				<MetadataInput label='Tags:' className='col-span-3'>
					{blog.tags.join(', ')}
				</MetadataInput>
				<MetadataInput label='Published on:'>
					{blog.tags.join(', ')}
				</MetadataInput>
				<MetadataInput label='Updated on:'>
					{blog.tags.join(', ')}
				</MetadataInput>
				<MetadataInput label='Last Edited on:' internal>
					{blog.tags.join(', ')}
				</MetadataInput>
			</div>

			<div className='px-12'>
				{blog.content}
				{/* Editor - MDX + Hemingway */}
			</div>
		</div>
	)
}
