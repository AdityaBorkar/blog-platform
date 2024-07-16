import {
	BiBadge,
	BiBarChartAlt,
	BiBuildingHouse,
	BiCabinet,
	BiCarousel,
	BiCollection,
	BiDetail,
	BiFace,
	BiFileBlank,
	BiHome,
	BiIdCard,
	BiImage,
	BiImages,
	BiLayer,
	BiPaint,
	BiPhotoAlbum,
	BiPlanet,
	BiReceipt,
	BiSpa,
	BiSpreadsheet,
	BiStore,
	BiVideo,
} from 'react-icons/bi'
import { LuAccessibility, LuHome } from 'react-icons/lu'

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
		{ name: 'Canvas', href: '/canvas', icon: BiPaint },
		{ name: 'Drawers', href: '/drawers', icon: BiCabinet },
		{ name: 'Blog Metadata', href: '/blog-metadata', icon: BiLayer },
		{ name: 'Blog Posts', href: '/blog-posts', icon: BiDetail },
		{ name: 'Guest Posts', href: '/guest-posts', icon: BiSpreadsheet },
		{ name: 'Web Stories', href: '/web-stories', icon: BiCarousel },
		{ name: 'Social Content', href: '/social-content', icon: BiSpa },
		// {
		// 	name: 'Blog',
		// 	icon: LuAccessibility,
		// 	items: [
		// 		{ name: 'Posts', href: '/blog-posts' },
		// 		{ name: 'Metadata', href: '/blog-metadata' },
		// 	],
		// },
		// {
		// 	name: 'Others',
		// 	icon: LuAccessibility,
		// 	items: [
		// 		{ name: 'Web Stories', href: '/web-stories' },
		// 		{ name: 'Social Posts', href: '/social-posts' },
		// 		{ name: 'Guest Posts', href: '/guest-posts' },
		// 	],
		// },
		{ name: 'Media', href: '/media', icon: BiImages }, //   BiLandscape
		{ name: 'Brand', href: '/brand', icon: BiPlanet }, //  BiStore
		// { name: 'Rank Manager', href: '/rank-manager' },
		{ name: 'User Analytics', href: '/user-analytics', icon: BiBarChartAlt },
		{ name: 'Site Experience', href: '/site-experience', icon: BiFace },
		{ name: 'Reports', href: '/reports', icon: BiFileBlank },
	]

	return { user, brand, navigation }
}

// * Optional Features:
// { name: 'Comments', href: '/blog-comments' },
// { name: 'Newsletter', items: [] },
