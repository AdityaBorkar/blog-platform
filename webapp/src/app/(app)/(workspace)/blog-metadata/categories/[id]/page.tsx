import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

import { categories } from '@/migration/categories'

export default function BlogMetadataCategoryPage(props: {
	params: { id: string }
}) {
	const categoryId = props.params.id
	const category = categories.find((category) => category.id === categoryId)

	if (!category) notFound()
	return (
		<div className='px-44 text-neutral-800'>
			<div className='my-4 flex flex-row items-center justify-between'>
				<Link
					href='/blog-metadata/categories'
					className='-ml-12 rounded-md px-4 py-2 font-medium text-neutral-500 hover:bg-neutral-200 hover:text-black'
				>
					<BiArrowBack className='-mt-0.5 mr-3 inline-block size-5' />
					Back to "List of Categories"
				</Link>
			</div>

			<h2 className='mt-16 text-3xl font-semibold'>{category.name}</h2>

			<div>Category Name</div>
			<div>Category Slug</div>
			<div>Parent</div>
			<div>Description</div>
			<div>Canonical URL</div>
			<div>Schema Markup</div>

			<div>Total Content</div>
		</div>
	)
}
