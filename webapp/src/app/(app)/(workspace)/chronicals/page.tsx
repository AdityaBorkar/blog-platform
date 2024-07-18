'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BiGridAlt, BiListUl, BiPlus } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

import NavButton from '@/components/NavButton'
import SearchInput from '@/components/SearchInput'
import Select from '@/components/Select'
import TableCell from '@/components/Table/TableCell'
import TableHeader from '@/components/Table/TableHeader'
import ToggleSelector from '@/components/ToggleSelector'

enum ViewLayout {
	Grid = 0,
	List = 1,
}
type ViewType = {
	layout: ViewLayout
	filterView: number
	sortOption: number
}

export default function ChronicalsPage() {
	const chronical = {
		id: '1',
		name: 'Gajab Tichi Adaa (Marathi Natak)',
		image: '/user-generated/gta.png',
		content: {
			total: 10,
			blog: 10,
			guestBlog: 10,
			webStories: 10,
			social: {
				total: 10,
				facebook: 10,
				twitter: 10,
				instagram: 10,
				youtube: 10,
				pinterest: 10,
				linkedin: 10,
			},
		},
		media: {
			total: 10,
		},
		stats: {
			reach: 10,
			engagement: 10,
		},
	}
	const chronicals = [
		chronical,
		chronical,
		chronical,
		chronical,
		chronical,
		chronical,
		chronical,
		chronical,
	] satisfies Chronical[]

	const filterViews = [{ value: 0, label: 'All Chronicals' }]
	const sortOptions = [{ value: 0, label: 'Sort by Last Edited' }]
	const [view, setView] = useState<ViewType>({
		filterView: 0,
		sortOption: 0,
		layout: ViewLayout.Grid,
	})

	return (
		<div className='font-sans *:px-32'>
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

			{view.layout === ViewLayout.Grid ? (
				<div className='grid grid-cols-4 gap-6 py-16'>
					{chronicals.map((chronical) => (
						<Link
							key={chronical.id}
							href={`/chronicals/${chronical.id}`}
							className='relative z-0 h-48 rounded-xl border border-neutral-300 bg-neutral-50 hover:opacity-90 hover:shadow-lg'
						>
							<img
								src='/user-generated/gta.png'
								alt=''
								className='absolute left-0 top-0 -z-10 h-full w-full rounded-xl object-cover'
							/>

							{/* <div>
				<div className='mt-2 px-4 text-white'>{chronical.content.total} Posts</div>
				<div className='mt-2 px-4 text-white'>
					<BiShowAlt className='-mt-0.5 mr-1 inline-block size-5 text-white' />
					{chronical.stats.reach}
				</div>
				<div className='mt-2 px-4 text-white'>
					<BiSolidHandUp className='-mt-0.5 mr-1 inline-block size-5 text-white' />
					{chronical.stats.engagement}
				</div>
			</div> */}

							<div className='absolute bottom-0 mt-2 w-full rounded-b-xl bg-gradient-to-t from-black/100 via-black/60 to-black/0 px-4 pb-2 pt-8 text-base font-semibold text-white'>
								{chronical.name}
							</div>
						</Link>
					))}
				</div>
			) : (
				<div className='py-16 text-center'>
					<TableHeader className='grid-cols-10 *:py-1'>
						<div className='col-span-3'>Chronical Name</div>
						<div>Media</div>
						<div>Blog</div>
						<div>Guest Blog</div>
						<div>Web Stories</div>
						<div>Social</div>
						<div>Reach</div>
						<div>Engagement</div>
					</TableHeader>
					{chronicals.map((chronical) => (
						<TableCell
							key={chronical.id}
							className='grid-cols-10 *:px-2 *:py-1'
						>
							<div className='col-span-3 text-left font-bold'>
								{chronical.name}
							</div>
							{/* <div>{chronical.count.media}</div>
			<div>{chronical.count.blog}</div>
			<div>{chronical.count.guestBlog}</div>
			<div>{chronical.count.webStories}</div>
			<div>{chronical.count.social.total}</div>
			<div>{chronical.count.reach}</div>
			<div>{chronical.count.engagement}</div> */}
						</TableCell>
					))}
				</div>
			)}
		</div>
	)
}
