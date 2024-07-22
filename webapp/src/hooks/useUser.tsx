import {
	BiBarChartAlt,
	BiCabinet,
	BiChalkboard,
	BiDetail,
	BiFace,
	BiFoodMenu,
	BiHome,
	BiImages,
	BiLayer,
	BiMapAlt,
	BiPaint,
	BiPen,
	BiPlanet,
	BiSpa,
	BiTrophy,
} from 'react-icons/bi'

export default function useAuth() {
	const user = {
		id: '1',
		name: 'John Doe',
		email: 'john@doe.com',
		role: 'admin',
	}
	const brand = {
		name: 'VeryFirstTale',
		logo: '/logo.svg',
	}
	const navigation = [
		{ name: 'Dashboard', href: '/dashboard', icon: BiHome },
		{ name: 'Canvas', href: '/canvas', icon: BiChalkboard },
		{ name: 'Chronicles', href: '/chronicles', icon: BiMapAlt },
		{ name: 'Blog Posts', href: '/blog-posts', icon: BiPen },
		{
			name: 'Blog Metadata',
			icon: BiLayer,
			open: false,
			items: [
				{ name: 'Categories', href: '/blog-metadata/categories' },
				{ name: 'Authors', href: '/blog-metadata/authors' },
				{ name: 'Tags', href: '/blog-metadata/tags' },
			],
		},
		{
			name: 'Content Manager',
			icon: BiSpa,
			open: true,
			items: [
				{ name: 'Guest Posts', href: '/guest-posts' }, // BiSpreadsheet
				{ name: 'Social Posts', href: '/social-posts' },
				{ name: 'Web Stories', href: '/web-stories' }, // BiCarousel
			],
		},
		{ name: 'Media', href: '/media', icon: BiImages }, //   BiLandscape
		{ name: 'Brand', href: '/brand', icon: BiPlanet }, //  BiStore
		{ name: 'Rank Manager', href: '/rank-manager', icon: BiTrophy },
		{ name: 'User Analytics', href: '/user-analytics', icon: BiBarChartAlt },
		{ name: 'Site Experience', href: '/site-experience', icon: BiFace },
		{ name: 'Reports', href: '/reports', icon: BiFoodMenu },
	]

	return { user, brand, navigation }
}

// * Optional Features:
// { name: 'Comments', href: '/blog-metadata/comments' },
// { name: 'Newsletter', items: [] },
