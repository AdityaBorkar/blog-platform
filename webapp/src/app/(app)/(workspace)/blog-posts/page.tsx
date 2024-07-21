'use client'

import { useAtom } from 'jotai'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiGridAlt, BiListUl, BiPlus } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

import { BlogPost } from './[id]/atoms'
import NavButton from '@/components/NavButton'
import SearchInput from '@/components/SearchInput'
import Select from '@/components/Select'
import TableCell from '@/components/Table/TableCell'
import TableHeader from '@/components/Table/TableHeader'
import ToggleSelector from '@/components/ToggleSelector'
import { posts as POSTS } from '@/migration/posts'

enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	layout: ViewLayout
	filterView: number
	sortOption: number
}

// TODO: Version History?
// TODO: AI Image Processing

export default function BlogPosts() {
	const posts = POSTS

	// const filterViews = [
	// 	{
	// 		name: 'All Blogs',
	// 		properties: {
	// 			status: PostStatus.All,
	// 			sortOptions: [{ name: 'Last Edited', property: '' }],
	// 		},
	// 	},
	// ]

	const filterViews = [{ value: 0, label: 'All Blog Posts' }]
	const sortOptions = [{ value: 0, label: 'Sort by Last Edited' }]

	const [view, setView] = useState<ViewType>({
		filterView: 0,
		sortOption: 0,
		layout: ViewLayout.Grid,
		// status: PostStatus.All,
	})

	return (
		<div className='*:px-32'>
			<header
				className={twMerge(
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
					{posts.map((post) => (
						<PostGridItem key={post.id} post={post} />
					))}
				</div>
			)}

			{view.layout === ViewLayout.List && (
				<div className='my-8 px-16 text-center'>
					<TableHeader className='grid-cols-[8rem_1fr_12rem_8rem_8rem] *:py-1'>
						<div>Status</div>
						<div>Blog Name</div>
						<div>Category</div>
						<div>Published On</div>
						<div>Last Edited On</div>
					</TableHeader>
					{posts.map((post) => (
						<PostListItem key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	)
}

function PostListItem({ post }: { post: Blog.Post }) {
	return (
		<TableCell
			className={twMerge(
				'text-neutral-700 *:px-1 *:py-1.5 hover:bg-neutral-200 hover:text-neutral-900',
				'dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
				'grid grid-cols-[8rem_1fr_12rem_8rem_8rem] gap-x-2 gap-y-2',
			)}
		>
			<div>{post.status === 'publish' ? 'Published' : 'Draft'}</div>
			{/* <div>{post.featured_media}</div> */}
			<div
				className='text-left'
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: post.title.rendered }}
			/>
			<div>{post.categories}</div>
			<div>
				{new Date(post.updatedAt).toLocaleDateString('en', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})}
			</div>
			<div>
				{new Date(post.updatedAt).toLocaleDateString('en', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})}
			</div>
		</TableCell>
	)
}

function PostGridItem({ post }: { post: Blog.Post }) {
	return (
		<Link
			href={`/blog-posts/${post.id}`}
			className={twMerge(
				'relative rounded-xl border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 hover:shadow-lg',
				'dark:border-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
			)}
		>
			{/* {post.featured_media} */}
			<img
				src='/user-generated/gta.png'
				alt=''
				className='h-44 w-full rounded-t-xl object-cover'
			/>
			<div className='absolute left-4 top-4 rounded bg-purple-200 px-1 font-medium text-purple-900'>
				{post.categories}
			</div>
			{/* <div>{post.status === 'publish' ? 'Published' : 'Draft'}</div> */}
			<div
				className='px-4 py-2 text-left tracking-tight'
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: post.title.rendered }}
			/>
		</Link>
	)
}
