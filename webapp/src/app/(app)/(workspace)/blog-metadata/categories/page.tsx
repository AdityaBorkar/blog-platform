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
import { categories as CATEGORIES } from '@/migration/categories'

enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	layout: ViewLayout
	filterView: number
	sortOption: number
}

export default function BlogMetadataCategoriesPage() {
	const categories = CATEGORIES

	const filterViews = [{ value: 0, label: 'All Categories' }]
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
				<div className='my-8 grid grid-cols-4 gap-6 px-16'>
					{categories.map((category) => (
						<Link
							key={category.id}
							href={`/blog-metadata/categories/${category.id}`}
							className={cn(
								'rounded-md border border-neutral-300 px-4 py-2 hover:bg-neutral-200 hover:text-neutral-900',
								'dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
							)}
						>
							<div
								className={cn(
									category.color,
									'-mb-1 mr-2 inline-block size-5 rounded-full bg-red-400',
								)}
							/>
							{category.name}
						</Link>
					))}
				</div>
			)}

			{view.layout === ViewLayout.List && (
				<div className='my-8 px-16 text-center'>
					<TableHeader className='grid-cols-[8rem_1fr_12rem_8rem_8rem] *:py-1'>
						<div>Color Code</div>
						<div>Category Name</div>
						<div>Category Slug</div>
						<div>Public Page</div>
						<div>Blog Posts</div>
					</TableHeader>
					{categories.map((category) => (
						<TableCell
							key={category.id}
							className='grid-cols-[8rem_1fr_1fr_8rem_8rem] *:px-1 *:py-1'
						>
							<div
								className={cn(category.color, 'size-8 rounded-full bg-red-100')}
							/>
							<div className='text-left'>{category.name}</div>
							<div className='text-left'>/{category.slug}</div>
							<div>{category.publicPage ? 'Yes' : 'No'}</div>
							<div>{category.blogPosts.count}</div>
						</TableCell>
					))}
				</div>
			)}
		</div>
	)
}
