const checks = [
	{
		field: 'slug',
		test: [
			'Use hyphens to separate words',
			"Keep URLs short and relevant; remove empty words ('and', 'or', etc.)",
			'Use lowercase letters.',
		],
	},
	{
		field: 'title',
		test: [
			'< 60 chars',
			'relevant keywords at the beginning',
			'Avoid keyword stuffing',
			'descriptive and concise',
		],
	},
	{
		field: 'description',
		test: ['< 160 chars', 'relevant keywords', 'summarize page content', 'CTA'],
	},
	{
		field: 'schemaMarkup',
		test: ['validate from schema.org', 'validate from google rich results'],
	},
	{
		field: 'content.images',
		test: [
			'Describe the image accurately and succinctly',
			'relevant keywords if they are natural to the description',
			'Avoid keyword stuffing',
		],
	},
]

// 1 H1 per page
//  headings are descriptive and relevant to the content that follows

// og:title
// og:description
// og:image
// og:url

// links: nofollow noreferrer

// data-[attributes] to store additional data
