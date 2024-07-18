import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

import { tags } from '@/migration/tags'

export default function BlogMetadataTagPage(props: { params: { id: string } }) {
	const tagId = props.params.id
	const tag = tags.find((tag) => tag.id === tagId)

	if (!tag) notFound()
	return (
		<div className='px-44 text-neutral-800'>
			<div className='my-4 flex flex-row items-center justify-between'>
				<Link
					href='/blog-metadata/tags'
					className='-ml-12 rounded-md px-4 py-2 font-medium text-neutral-500 hover:bg-neutral-200 hover:text-black'
				>
					<BiArrowBack className='-mt-0.5 mr-3 inline-block size-5' />
					Back to "List of Tags"
				</Link>
			</div>

			<h2 className='mt-16 text-3xl font-semibold'>{tag.name}</h2>

			<div>Tag Name</div>
			<div>Tag Slug</div>
			<div>Public Page</div>
			<div>Parent</div>
			<div>Description</div>
			<div>Canonical URL</div>
			<div>Schema Markup</div>

			<div>Total Content</div>
		</div>
	)
}
