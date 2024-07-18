import { atom } from 'jotai'

export const BlogDataAtom = atom<BlogPost>({
	id: '',
	date: '',
	modified: '',
	slug: '',
	status: '',
	link: '',
	title: '',
	description: '',
	chronical: { id: '', name: '', slug: '' },
	content: '',
	author: [],
	tags: [],
	categories: [],
})

// const progressAtom = atom((get) => {
// 	const anime = get(animeAtom)
// 	return anime.filter((item) => item.watched).length / anime.length
// })
