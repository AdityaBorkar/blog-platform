type Chronicle = {
	id: string
	name: string
	image: string
	content: {
		total: number
		blog: number
		guestBlog: number
		webStories: number
		social: {
			total: number
			facebook: number
			twitter: number
			instagram: number
			youtube: number
			pinterest: number
			linkedin: number
		}
	}
	media: {
		total: number
	}
	stats: {
		reach: number
		engagement: number
	}
}
