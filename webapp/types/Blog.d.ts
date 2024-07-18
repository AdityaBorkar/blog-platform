type BlogAuthor = {
	id: string
	name: string
	image: string
	slug: string
	description: string
	// NoSQL:
	blogPosts: {
		count: number
	}
}

type BlogTag = {
	id: string
	name: string
	slug: string
	publicPage: boolean
	// NoSQL:
	blogPosts: {
		count: number
	}
}

type BlogCategory = {
	id: string
	name: string
	slug: string
	description: string
	color: string
	publicPage: boolean
	parent: {
		id: number
		name: string
		slug: string
	} | null
	// NoSQL:
	blogPosts: {
		count: number
	}
}

type BlogPost = {
	id: string
	date: string
	modified: string
	slug: string
	status: string
	link: string
	title: string
	description: string
	chronical: { id: string; name: string; slug: string }
	content: string
	author: string[]
	tags: string[]
	categories: string[]
}
