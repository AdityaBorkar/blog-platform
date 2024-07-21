import { atom } from 'jotai'

import $atom from '@/utils/$atom'

export const BlogPost = atom<Blog.Post>({
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

export const Title = $atom(BlogPost, 'title')

export const Description = $atom(BlogPost, 'description')

export const PublishedAt = $atom(BlogPost, 'publishedAt')

export const LastEditedAt = $atom(BlogPost, 'lastEditedAt')

export const UpdatedAt = $atom(BlogPost, 'updatedAt')

export const Chronical = $atom(BlogPost, 'chronical')

export const Authors = $atom(BlogPost, 'authors')

export const Category = $atom(BlogPost, 'category')

export const Tags = $atom(BlogPost, 'tags')

export const Content = $atom(BlogPost, 'content.mdx')

export const InternalLinks = $atom(BlogPost, 'content.links.internal')

export const ExternalLinks = $atom(BlogPost, 'content.links.external')
