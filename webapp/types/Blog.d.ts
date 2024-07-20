namespace BlogPost {
	type Link = {
		text: string
	}
	type Record = {
		id: string
		updatedAt: Date
		publishedAt: Date
		lastEditedAt: Date
		slug: string
		title: string
		status: 'DRAFT' | 'PUBLISHED'
		canonical: string
		description: string
		chronical: { id: string; name: string; slug: string }
		authors: string[]
		category: string
		tags: string[]
		content: {
			mdx: string
			links: {
				internal: Link[]
				external: Link[]
			}
		}
	}
}

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
