'use client'

import { useAtom } from 'jotai'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import { LuArrowLeft, LuEye, LuPenSquare } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import TabLayout from './components/TabLayout'
import ContentEditor from './content/ContentEditor'
import ContentPreview from './content/ContentPreview'
import ContentSection from './sections/content'
import KeywordsSection from './sections/keywords'
import LinksSection from './sections/links'
import MediaSection from './sections/media'
import WebpageSection from './sections/webpage'
import { BlogDataAtom } from './state'
import LoadingSpinner from '@/components/LoadingSpinner'

enum View {
	Preview = 0,
	Editor = 1,
}

export default function EditBlogPostPage({
	params,
}: Readonly<{
	params: { id: string }
}>) {
	const [BlogData, setBlogData] = useAtom(BlogDataAtom)

	useEffect(() => {
		const blogId = params.id
		// TODO: const blog = READ FROM LocalStorage
		const blog = {
			id: blogId,
			title: 'Building an open-source blog platform!',
			description:
				"My story about the journey to build a blog platform that I'm proud of.",
			author: ['Blog Author'],
			categories: ['Blog Category'],
			tags: ['Blog Tag 1', 'Blog Tag 2'],
			content: 'Blog Content',
			chronical: { id: '1', name: '2023', slug: '2023' },
			date: '2023-01-01',
			modified: '2023-01-01',
			slug: 'building-an-open-source-blog-platform-for-myself',
			status: 'publish',
			link: 'https://example.com',
		} satisfies BlogPost

		setBlogData(blog)
	}, [params.id, setBlogData])

	// TODO: Always open Preview by default
	const [view, setView] = useState<View>(View.Editor)

	if (!BlogData.id)
		return (
			<div className='flex h-screen items-center justify-center'>
				<LoadingSpinner />
			</div>
		)
	return (
		<div className='grid h-screen grid-cols-[auto_24rem]'>
			<div className='balance-overflow hide-scrollbar relative overflow-auto'>
				<header
					className={twMerge(
						'sticky left-0 top-0 flex flex-row items-center justify-between border-b border-neutral-400 backdrop-blur-lg',
						'dark:border-neutral-800',
					)}
				>
					<HeaderButton icon={LuArrowLeft} href='/blog-posts'>
						Back to "All Blog Posts"
					</HeaderButton>
					<div className='grow cursor-text select-text px-8 py-2.5 text-center'>
						{BlogData?.title}
					</div>
					{view === View.Editor ? (
						<HeaderButton
							className='w-40 text-right'
							icon={LuEye}
							onClick={() => setView(View.Preview)}
						>
							Open Preview
						</HeaderButton>
					) : (
						<HeaderButton
							className='w-40 text-right'
							icon={LuPenSquare}
							onClick={() => setView(View.Editor)}
						>
							Open Editor
						</HeaderButton>
					)}
				</header>

				{view === View.Editor ? <ContentEditor /> : <ContentPreview />}
			</div>

			<TabLayout
				className={twMerge(
					'border-l border-neutral-400',
					'dark:border-neutral-800',
				)}
				tabs={[
					{ name: 'Webpage', component: WebpageSection },
					{ name: 'Content', component: ContentSection },
					{ name: 'Links', component: LinksSection },
					{ name: 'Media', component: MediaSection },
					{ name: 'Keywords', component: KeywordsSection },
				]}
			/>
		</div>
	)
}

function HeaderButton({
	icon: Icon,
	href,
	onClick,
	children,
	className,
}: {
	href?: string
	onClick?: () => void
	icon: IconType
	children: React.ReactNode
	className?: string
}) {
	const classList = twMerge(
		'px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900',
		'dark:text-neutral-400 dark:hover:text-neutral-200',
		className,
	)

	return href ? (
		<Link href={href} className={classList}>
			<Icon className='-mt-1 mr-2 inline-block' />
			{children}
		</Link>
	) : (
		<button type='button' className={classList} onClick={onClick}>
			<Icon className='-mt-1 mr-2 inline-block' />
			{children}
		</button>
	)
}
