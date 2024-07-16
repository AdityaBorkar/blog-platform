type BlogAuthor = {
	id: number
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
	id: number
	name: string
	slug: string
	publicPage: boolean
	// NoSQL:
	blogPosts: {
		count: number
	}
}

type BlogCategory = {
	id: number
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
	id: number
	date: string
	modified: string
	slug: string
	status: string
	link: string
	title: {
		rendered: string
	}
}
