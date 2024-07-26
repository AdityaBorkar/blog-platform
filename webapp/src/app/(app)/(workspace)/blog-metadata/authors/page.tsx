'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BiGridAlt, BiListUl, BiPlus } from 'react-icons/bi'

import NavButton from '@/components/NavButton'
import SearchInput from '@/components/SearchInput'
import Select from '@/components/Select'
import TableCell from '@/components/Table/TableCell'
import TableHeader from '@/components/Table/TableHeader'
import ToggleSelector from '@/components/ToggleSelector'
import { cn } from '@/lib/utils'
import { authors as AUTHORS } from '@/migration/authors'

enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	layout: ViewLayout
	filterView: number
	sortOption: number
}

export default function BlogMetadataAuthorsPage() {
	const authors = AUTHORS

	const filterViews = [{ value: 0, label: 'All Authors' }]
	const sortOptions = [{ value: 0, label: 'Sort by A-Z' }]

	const [view, setView] = useState<ViewType>({
		filterView: 0,
		sortOption: 0,
		layout: ViewLayout.Grid,
	})

	return (
		<div className='*:px-32'>
			<header
				className={cn(
					'sticky left-0 top-0 z-50 flex w-full flex-row items-center gap-4 border-b border-neutral-300 py-4 backdrop-blur-xl',
					'dark:border-neutral-900',
				)}
			>
				<Select
					options={filterViews}
					value={view.filterView}
					setValue={(filterView) =>
						setView((view) => ({ ...view, filterView }))
					}
				/>
				<SearchInput placeholder='Search' />
				<Select
					options={sortOptions}
					value={view.sortOption}
					setValue={(sortOption) =>
						setView((view) => ({ ...view, sortOption }))
					}
				/>
				<ToggleSelector
					value={view.layout}
					setValue={(layout) => setView((view) => ({ ...view, layout }))}
					options={[
						{ icon: BiGridAlt, value: ViewLayout.Grid },
						{ icon: BiListUl, value: ViewLayout.List },
					]}
				/>
				<NavButton>
					<BiPlus className='-mt-0.5 mr-1.5 inline-block size-4' />
					New
				</NavButton>
			</header>

			{view.layout === ViewLayout.Grid && (
				<div className='my-8 flex flex-row gap-6 px-16'>
					{authors.map((author) => (
						<Link
							key={author.id}
							href={`/blog-metadata/authors/${author.id}`}
							className={cn(
								'rounded-xl border border-neutral-300 p-2 hover:border-neutral-400 hover:shadow-md',
								'dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
							)}
						>
							<img
								src={author.image}
								alt=''
								className='mx-auto size-32 rounded-lg'
							/>
							<div className='mt-2 text-center'>{author.name}</div>
						</Link>
					))}
				</div>
			)}

			{view.layout === ViewLayout.List && (
				<div className='my-8 px-16 text-center'>
					<TableHeader className='grid-cols-[8rem_1fr_12rem_8rem_8rem] *:py-1'>
						<div>Image</div>
						<div>Author Name</div>
						<div>Blog Posts</div>
						<div>Author Slug</div>
					</TableHeader>
					{authors.map((author) => (
						<TableCell
							key={author.id}
							className='grid-cols-[4rem_1fr_16rem_8rem] *:px-1 *:py-1'
						>
							<div>
								{/* {author.image} */}
								IMAGE
							</div>
							<div className='text-left'>{author.name}</div>
							<div className='text-left'>{author.slug}</div>
							<div>{author.blogPosts.count}</div>
						</TableCell>
					))}
				</div>
			)}
		</div>
	)
}
