import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

import Monitoring from './Monitoring'
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
	// TODO: Provider to give access to children
	// const replocal = ReplocalInstance({ db: null, storage: null })

	return (
		<Providers>
			<Monitoring />

			{children}
		</Providers>
	)
}
