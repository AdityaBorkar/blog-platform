import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

import { authors } from '@/migration/authors'

export default function BlogMetadataAuthorPage(props: {
	params: { id: string }
}) {
	const authorId = props.params.id
	const author = authors.find((author) => author.id === authorId)

	if (!author) notFound()
	return (
		<div className='px-44 text-neutral-800'>
			<div className='my-4 flex flex-row items-center justify-between'>
				<Link
					href='/blog-metadata/authors'
					className='-ml-12 rounded-md px-4 py-2 font-medium text-neutral-500 hover:bg-neutral-200 hover:text-black'
				>
					<BiArrowBack className='-mt-0.5 mr-3 inline-block size-5' />
					Back to "List of Authors"
				</Link>
			</div>

			<h2 className='mt-16 text-3xl font-semibold'>{author.name}</h2>

			<div>Author Name</div>
			<div>Author Slug</div>
			<div>Parent</div>
			<div>Description</div>
			<div>Personal Socials</div>
			<div>VeryFirstTale Socials</div>
			<div>Schema Markup</div>

			<div>Total Content</div>
		</div>
	)
}
