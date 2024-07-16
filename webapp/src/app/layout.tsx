import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
})
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
	const theme = 'dark' // localStorage.getItem('theme') || ''
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} ${theme}`}>
				{children}
			</body>
		</html>
	)
}
