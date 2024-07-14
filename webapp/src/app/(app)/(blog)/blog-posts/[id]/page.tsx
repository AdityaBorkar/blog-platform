'use client'

import { useState } from 'react'
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

enum View {
	Preview = 0,
	Editor = 1,
}

export default function EditBlogPostPage({
	params,
}: Readonly<{
	params: { id: string }
}>) {
	const blogId = params.id
	// const blog = READ FROM LocalStorage
	const blog = {
		id: blogId,
		title: 'Building an open-source blog platform (for myself)!',
		description:
			"My story about the journey to build a blog platform that I'm proud of.",
		author: 'Blog Author',
		category: 'Blog Category',
		tags: ['Blog Tag 1', 'Blog Tag 2'],
		content: 'Blog Content',
	}

	// TODO: Always open Preview by default
	const [currentView, setCurrentView] = useState<View>(View.Editor)

	return (
		<div className='grid h-screen grid-cols-[auto_24rem]'>
			<div className='balance-overflow hide-scrollbar relative overflow-auto'>
				<header className='sticky left-0 top-0 flex flex-row items-center justify-between border-b border-neutral-800 backdrop-blur-lg'>
					<HeaderButton icon={LuArrowLeft}>Back</HeaderButton>
					<div className='grow px-8 py-2 text-center'>{blog.title}</div>
					{currentView === View.Editor ? (
						<HeaderButton
							className='w-32 text-right'
							icon={LuEye}
							onClick={() => setCurrentView(View.Preview)}
						>
							Preview
						</HeaderButton>
					) : (
						<HeaderButton
							className='w-32 text-right'
							icon={LuPenSquare}
							onClick={() => setCurrentView(View.Editor)}
						>
							Editor
						</HeaderButton>
					)}
				</header>

				{currentView === View.Editor ? <ContentEditor /> : <ContentPreview />}
			</div>

			<TabLayout
				className='border-l border-neutral-800'
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
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLButtonElement> & { icon: IconType }) {
	return (
		<button
			type='button'
			className={twMerge(
				'px-4 py-2 text-sm text-neutral-400 hover:text-neutral-200',
				className,
			)}
			{...props}
		>
			<Icon className='-mt-1 mr-2 inline-block' />
			{children}
		</button>
	)
}
