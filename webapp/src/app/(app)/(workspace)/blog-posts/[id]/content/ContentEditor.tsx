import { useAtom } from 'jotai'
import { twMerge } from 'tailwind-merge'

import MetadataInput from '../components/MetadataInput'
import { BlogDataAtom } from '../state'

export default function ContentEditor() {
	// TODO: Get from State
	const [BlogData, setBlogData] = useAtom(BlogDataAtom)

	// TODO_ Create separate atoms for each of the inputs below: (to isolate state)

	return (
		<div className='mx-auto my-8 w-[56rem] py-8'>
			{/* <div className='mb-6 text-3xl font-bold'>{blog.title}</div> */}

			<div
				className={twMerge(
					'mb-16 grid grid-cols-3 divide-y divide-neutral-300 rounded-2xl border border-neutral-300',
					'dark:divide-neutral-800 dark:border-neutral-800',
				)}
			>
				<MetadataInput label='Title:' className='col-span-3'>
					{BlogData.title}
				</MetadataInput>
				<MetadataInput label='Featured Image:' className='col-span-3'>
					<div
						className={twMerge(
							'mt-2 h-[18rem] w-[32rem] rounded-xl bg-neutral-200',
							'dark:bg-neutral-900',
						)}
					/>
				</MetadataInput>
				<MetadataInput label='Meta Description:' className='col-span-3'>
					{BlogData.description}
				</MetadataInput>
				<MetadataInput label='Authors:'>a</MetadataInput>
				<MetadataInput label='Categories:'>{BlogData.category}</MetadataInput>
				<div />
				<MetadataInput label='Tags:' className='col-span-3'>
					{BlogData.tags.join(', ')}
				</MetadataInput>
				<MetadataInput label='Published on:'>
					{BlogData.tags.join(', ')}
				</MetadataInput>
				<MetadataInput label='Updated on:'>
					{BlogData.tags.join(', ')}
				</MetadataInput>
				<MetadataInput label='Last Edited on:' internal>
					{BlogData.tags.join(', ')}
				</MetadataInput>
			</div>

			<div className='mb-96 cursor-text select-text px-8'>
				{BlogData.content}
				{/* Editor - MDX + Hemingway */}
			</div>
		</div>
	)
}
