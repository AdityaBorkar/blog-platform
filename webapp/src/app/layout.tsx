import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import { cn } from '@/lib/utils'

const fontSans = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

const fontMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-mono',
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
			<body
				className={cn(
					theme,
					fontSans.variable,
					fontMono.variable,
					'min-h-screen bg-background font-sans text-foreground antialiased',
				)}
			>
				{children}
			</body>
		</html>
	)
}
