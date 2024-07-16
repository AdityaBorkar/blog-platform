'use client'

import { useState } from 'react'
import { BsGrid, BsList } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

import ToggleSelector from '@/components/ToggleSelector'
import { posts as POSTS } from '@/migration/posts'

enum PostStatus {
	Published = 0,
	Draft = 1,
	All = 2,
}
enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	status: PostStatus
	layout: ViewLayout
	filterView: number
	sortBy: number
}

// author
// tags
// categories
// media
// TODO: Version History?
// TODO: AI Image Processing

export default function BlogPosts() {
	const posts = POSTS

	const filterViews = [
		{
			name: 'All Blogs',
			properties: {
				status: PostStatus.All,
				sortOptions: [{ name: 'Last Edited', property: '' }],
			},
		},
	]

	const [view, setView] = useState<ViewType>({
		filterView: 0,
		sortBy: 0,
		status: PostStatus.All,
		layout: ViewLayout.Grid,
	})

	return (
		<div className='*:px-16'>
			<header className='sticky left-0 top-0 z-50 flex w-full flex-row items-center gap-4 border-b border-neutral-900 py-4 backdrop-blur-md'>
				<div className='min-w-40 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-neutral-400'>
					All Blogs
				</div>
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
					{posts.map((post) => (
						<PostGridItem key={post.id} post={post} />
					))}
				</div>
			)}

			{view.layout === ViewLayout.List && (
				<div className='my-8 px-16 text-center'>
					<div
						className={twMerge(
							'divide-x divide-neutral-800 border border-neutral-800 font-semibold *:py-1',
							'grid grid-cols-[8rem_1fr_12rem_8rem_8rem] gap-x-2 gap-y-2',
						)}
					>
						<div>Status</div>
						<div>Blog Name</div>
						<div>Category</div>
						<div>Published On</div>
						<div>Last Edited On</div>
					</div>
					{posts.map((post) => (
						<PostListItem key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	)
}

function PostListItem({ post }: { post: BlogPost }) {
	return (
		<div
			className={twMerge(
				'text-neutral-300 *:px-1 *:py-1 hover:bg-neutral-800 hover:text-neutral-100',
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
				{new Date(post.modified).toLocaleDateString('en', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})}
			</div>
			<div>
				{new Date(post.modified).toLocaleDateString('en', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})}
			</div>
		</div>
	)
}

function PostGridItem({ post }: { post: BlogPost }) {
	return (
		<div
			className={twMerge(
				'h-fit rounded-xl border border-neutral-900 p-2 text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100',
			)}
		>
			{/* {post.featured_media} */}
			<div className='relative h-56 w-full rounded-xl bg-neutral-800'>
				<div className='absolute left-2 top-2 rounded bg-purple-200 px-1 font-medium text-purple-900'>
					{post.categories}
				</div>
			</div>
			{/* <div>{post.status === 'publish' ? 'Published' : 'Draft'}</div> */}
			<div
				className='mt-2 px-2 text-left tracking-tighter'
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: post.title.rendered }}
			/>
		</div>
	)
}
