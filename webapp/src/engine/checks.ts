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
			'< 10 words',
			// Most readers only look at the first and last 3 words of a headline before deciding whether to click.
			// common words, uncommon words
			// power words, emotional words
			// sentiment
			'relevant keywords at the beginning',
			'Avoid keyword stuffing',
			'descriptive and concise',
		],
	},
	{
		field: 'tags',
		test: ['relevant keywords at the beginning', 'Avoid keyword stuffing'],
	},
	{
		field: 'description',
		test: [
			'> 120 chars',
			'< 150 chars',
			'relevant keywords',
			'summarize page content',
			'CTA',
		],
	},
	{
		field: 'schemaMarkup',
		test: ['validate from schema.org', 'validate from google rich results'],
	},
	{
		field: 'content.text',
		test: [
			'passive voice',
			'shorter sentences',
			'readability < grade 9',
			'> 1000 words',
			'para length < 200 words',
			'plagiarism',
		],
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

// (Focus Keyphrases / Keywords) in first-para / title / meta description / url / content / subheadings
// Focus keyphrase Density is high at 2.71%, the Keyphrase appears 90 times. For better results, try to aim for lower than 2.5%.
// Focus keyphrase found in image alt attribute(s).
// subheadings after a max. of 300 words
// flesch reading scorre

// ---

// 1 H1 per page
//  headings are descriptive and relevant to the content that follows

// og:title
// og:description
// og:image
// og:url
// og:type

// links: nofollow noreferrer

// data-[attributes] to store additional data

// ---

// The focus keyphrase – or keyword – is the search term that you want your page to rank for most. For blog posts, you should usually aim for long-tail keywords (keywords containing multiple words) as competition is lower for these. To help you decide on keywords, you can use tools such as Google Trends, Google Keyword Planner, Answer The Public or simply search for your proposed term on Google and let autosuggest show you what other people are searching for.

// Make sure that your keyphrase:

// Appear in the title tag
// Appears in subheadings
// Appears in first paragraph
// is unique, not used it before throughout your site
// is used in the slug (your SEO friendly URL)
// is used in meta description
// is used in image [alt] attributes
// is not too long
// Density is between 1-3% (number of times your keyphrase appears in a copy, eg.: your text is 100 words and 5 of those are your keywords than you have a keyword density of 5%)

// https://ogp.me/
// https://yoast.com/how-to-use-headings-on-your-site/
// https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it/

// https://developers.pinterest.com/docs/web-features/article-rich-pins/
// https://cards-dev.twitter.com/validator
