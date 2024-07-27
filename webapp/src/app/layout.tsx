import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
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
	// TODO: Prelight Hints and LocalStorage. Do it with Settings.
	const theme = 'light' // localStorage.getItem('theme') || ''
	return (
		<ViewTransitions>
			<html lang='en'>
				<head>
					<base href={process.env.DOMAIN} />
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
		</ViewTransitions>
	)
}
