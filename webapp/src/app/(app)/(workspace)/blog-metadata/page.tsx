import Link from 'next/link'
import { BiGridHorizontal, BiTagAlt, BiUser } from 'react-icons/bi'

export default function BlogMetadataDefaultPage() {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<div className='flex flex-row gap-8 text-lg'>
				<Link
					href='/blog-metadata/authors'
					className='rounded-md border border-neutral-300 px-8 py-2'
				>
					<BiUser className='mr-1.5 inline-block' />
					Authors
				</Link>
				<Link
					href='/blog-metadata/categories'
					className='rounded-md border border-neutral-300 px-8 py-2'
				>
					<BiGridHorizontal className='mr-1.5 inline-block' />
					Categories
				</Link>
				<Link
					href='/blog-metadata/tags'
					className='rounded-md border border-neutral-300 px-8 py-2'
				>
					<BiTagAlt className='mr-1.5 inline-block' />
					Tags
				</Link>
			</div>
		</div>
	)
}
