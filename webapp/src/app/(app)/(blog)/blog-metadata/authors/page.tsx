'use client'

import { useState } from 'react'
import { BsGrid, BsList } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

import ToggleSelector from '@/components/ToggleSelector'
import { authors as AUTHORS } from '@/migration/authors'

enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	layout: ViewLayout
	sortBy: number
}

export default function BlogMetadataAuthorsPage() {
	const authors = AUTHORS
	const [view, setView] = useState<ViewType>({
		sortBy: 0,
		layout: ViewLayout.Grid,
	})

	return (
		<div className='*:px-16'>
			<header className='sticky left-0 top-0 z-50 flex w-full flex-row items-center gap-4 border-b border-neutral-900 py-4 backdrop-blur-md'>
				<input
					type='text'
					placeholder='Search'
					className='grow rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2'
				/>
				<div className='min-w-48 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-neutral-400'>
					Sort by Last Edited
				</div>
				<ToggleSelector
					value={view.layout}
					setValue={(layout) => setView((view) => ({ ...view, layout }))}
					options={[
						{ icon: BsGrid, value: ViewLayout.Grid },
						{ icon: BsList, value: ViewLayout.List },
					]}
				/>
			</header>

			{view.layout === ViewLayout.Grid && (
				<div className='my-8 grid grid-cols-4 gap-6 px-16'>
					{authors.map((author) => (
						<AuthorGridItem key={author.id} author={author} />
					))}
				</div>
			)}

			{view.layout === ViewLayout.List && (
				<div className='my-8 px-16 text-center'>
					<div
						className={twMerge(
							'divide-x divide-neutral-800 border border-neutral-800 font-semibold *:py-1',
							'grid grid-cols-[4rem_1fr_16rem_8rem] gap-x-2 gap-y-2',
						)}
					>
						<div>Image</div>
						<div>Author Name</div>
						<div>Blog Posts</div>
						<div>Author Slug</div>
					</div>
					{authors.map((author) => (
						<AuthorListItem key={author.id} author={author} />
					))}
				</div>
			)}
		</div>
	)
}

function AuthorListItem({ author }: { author: BlogAuthor }) {
	return (
		<div
			className={twMerge(
				'text-neutral-300 *:px-1 *:py-1 hover:bg-neutral-800 hover:text-neutral-100',
				'grid grid-cols-[4rem_1fr_16rem_8rem] gap-x-2 gap-y-2',
			)}
		>
			<div>
				{/* {author.image} */}
				IMAGE
			</div>
			<div className='text-left'>{author.name}</div>
			<div className='text-left'>{author.slug}</div>
			<div>{author.blogPosts.count}</div>
		</div>
	)
}

function AuthorGridItem({ author }: { author: BlogAuthor }) {
	return (
		<div className='rounded-md p-2 text-neutral-300 *:px-1 *:py-1 hover:bg-neutral-800 hover:text-neutral-100'>
			<div>{author.image}</div>
			<div className='text-left'>{author.name}</div>
		</div>
	)
}
