import { twMerge } from 'tailwind-merge'

import {
	Authors,
	Category,
	Chronicle,
	Description,
	LastEditedAt,
	PublishedAt,
	Tags,
	Title,
	UpdatedAt,
} from '../atoms'
import MdxEditor from './MdxEditor'
import MetadataInput from '@/components/MetadataInput'

export default function ContentEditor() {
	return (
		<div className='mx-auto my-8 w-[56rem] py-8'>
			<div
				className={twMerge(
					'mb-16 grid grid-cols-3 divide-y divide-neutral-300 rounded-2xl border border-neutral-300',
					'dark:divide-neutral-800 dark:border-neutral-800',
				)}
			>
				<MetadataInput atom={Title} label='Title:' className='col-span-3' />
				<MetadataInput
					atom={Description}
					label='Meta Description:'
					className='col-span-3'
				/>
				<MetadataInput
					atom={Title}
					label='Featured Image:'
					className='col-span-3'
				/>
				<MetadataInput atom={Authors} label='Authors:' />
				<MetadataInput atom={Category} label='Category:' />
				<MetadataInput atom={Chronicle} label='Chronicle:' internal />
				<MetadataInput atom={Tags} label='Tags:' className='col-span-3' />
				<MetadataInput atom={PublishedAt} label='Published on:' readOnly />
				<MetadataInput atom={UpdatedAt} label='Updated on:' readOnly />
				<MetadataInput
					atom={LastEditedAt}
					label='Last Edited on:'
					internal
					readOnly
				/>
			</div>

			<div className='mb-96 px-8'>
				<MdxEditor />
			</div>
		</div>
	)
}
