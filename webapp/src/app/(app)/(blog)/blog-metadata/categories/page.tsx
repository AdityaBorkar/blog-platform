'use client'

import { useState } from 'react'
import { BsGrid, BsList } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

import ToggleSelector from '@/components/ToggleSelector'
import { categories as CATEGORIES } from '@/migration/categories'

enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	layout: ViewLayout
	sortBy: number
}

export default function BlogMetadataCategoriesPage() {
	const categories = CATEGORIES
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
					{categories.map((category) => (
						<CategoryGridItem key={category.id} category={category} />
					))}
				</div>
			)}

			{view.layout === ViewLayout.List && (
				<div className='my-8 px-16 text-center'>
					<div
						className={twMerge(
							'divide-x divide-neutral-800 border border-neutral-800 font-semibold *:py-1',
							'grid grid-cols-[8rem_1fr_1fr_8rem_8rem] gap-x-2 gap-y-2',
						)}
					>
						<div>Color Code</div>
						<div>Category Name</div>
						<div>Category Slug</div>
						<div>Public Page</div>
						<div>Blog Posts</div>
					</div>
					{categories.map((category) => (
						<CategoryListItem key={category.id} category={category} />
					))}
				</div>
			)}
		</div>
	)
}

function CategoryListItem({ category }: { category: BlogCategory }) {
	return (
		<div
			className={twMerge(
				'text-neutral-300 *:px-1 *:py-1 hover:bg-neutral-800 hover:text-neutral-100',
				'grid grid-cols-[8rem_1fr_1fr_8rem_8rem] gap-x-2 gap-y-2',
			)}
		>
			<div>{category.color}</div>
			<div className='text-left'>{category.name}</div>
			<div className='text-left'>/{category.slug}</div>
			<div>{category.publicPage ? 'Yes' : 'No'}</div>
			<div>{category.blogPosts.count}</div>
		</div>
	)
}

function CategoryGridItem({ category }: { category: BlogCategory }) {
	return (
		<div className='rounded-md p-2 text-neutral-300 *:px-1 *:py-1 hover:bg-neutral-800 hover:text-neutral-100'>
			<div>COLLECTION OF IMAGES</div>
			<div className='text-left'>{category.name}</div>
		</div>
	)
}
