import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

// TODO: Change font=name
const geistSans = Inter({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})
// const geistSans = localFont({
// 	src: './fonts/GeistVF.woff',
// 	variable: '--font-geist-sans',
// })
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
})

export const metadata: Metadata = {
	title: 'Blog Platform',
	description: 'Developed with love by Aditya Borkar',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const theme = 'light' // localStorage.getItem('theme') || ''
	return (
		<html lang='en'>
			<head>
				<base href='http://localhost:3000/' />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${theme}`}>
				{children}
			</body>
		</html>
	)
}
