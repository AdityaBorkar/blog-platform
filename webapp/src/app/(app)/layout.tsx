import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

import Providers from './Providers'
import useAuth from '@/hooks/useUser'

export default dynamic(() => Promise.resolve(AppLayout), { ssr: false })
function AppLayout({
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

	// TODO: Tab Memory Usage < 150 MB

	return <Providers>{children}</Providers>
}
