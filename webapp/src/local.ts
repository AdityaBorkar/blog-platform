import { useEffect, useState } from 'react'

export enum NetworkStatus {
	Online = 1,
	Offline = 0,
}

export const useLocalNetworkStatus = () => {
	const [networkState, setNetworkState] = useState<NetworkStatus>(
		navigator.onLine ? NetworkStatus.Online : NetworkStatus.Offline,
	)

	useEffect(() => {
		setNetworkState(
			navigator.onLine ? NetworkStatus.Online : NetworkStatus.Offline,
		)

		const handleOnline = () => {
			setNetworkState(NetworkStatus.Online)
		}
		const handleOffline = () => {
			setNetworkState(NetworkStatus.Offline)
		}
		window.addEventListener('online', handleOnline)
		window.addEventListener('offline', handleOffline)

		return () => {
			window.removeEventListener('online', handleOnline)
			window.removeEventListener('offline', handleOffline)
		}
	}, [])

	return networkState
}
