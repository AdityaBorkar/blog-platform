import { atom } from 'jotai'

import $atom from '@/utils/$atom'

export const BlogDataAtom = atom<BlogPost.Record>({
	id: '',
	updatedAt: new Date(),
	publishedAt: new Date(),
	lastEditedAt: new Date(),
	slug: '',
	title: '',
	status: 'DRAFT',
	canonical: '',
	description: '',
	chronical: {
		id: '',
		name: '',
		slug: '',
	},
	authors: [],
	category: '',
	tags: [],
	content: {
		mdx: '',
		links: {
			internal: [],
			external: [],
		},
	},
})

export const Title = $atom(BlogDataAtom, 'content')

export const Description = $atom(BlogDataAtom, 'description')

export const PublishedAt = $atom(BlogDataAtom, 'publishedAt')

export const LastEditedAt = $atom(BlogDataAtom, 'lastEditedAt')

export const UpdatedAt = $atom(BlogDataAtom, 'updatedAt')

export const Chronical = $atom(BlogDataAtom, 'chronical')

export const Authors = $atom(BlogDataAtom, 'authors')

export const Category = $atom(BlogDataAtom, 'category')

export const Tags = $atom(BlogDataAtom, 'tags')

export const Content = $atom(BlogDataAtom, 'content.mdx')

export const InternalLinks = $atom(BlogDataAtom, 'content.links.internal')

export const ExternalLinks = $atom(BlogDataAtom, 'content.links.external')
