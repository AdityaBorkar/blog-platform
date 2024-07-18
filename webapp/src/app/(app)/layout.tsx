import { redirect } from 'next/navigation'

import Providers from './Providers'
import useAuth from '@/hooks/useUser'

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// TODO: Perform Authentication
	const { user, brand, navigation } = useAuth()
	if (!user) redirect('/')

	// TODO: Initialize Replocal
	// TODO: Register Database
	// TODO: Register LocalStorage
	// const { isOffline } = ReplocalInstance({ db: null, storage: null })
	const isOffline = true

	// TODO: New
	// TODO: Search

	return <Providers>{children}</Providers>
}
