'use client'

import { NetworkStatus, useLocalNetworkStatus } from '@/local'

export default function OfflineIndicator() {
	const status = useLocalNetworkStatus()

	if (status === NetworkStatus.Online) return null
	return (
		<div className='mx-auto w-fit rounded border border-border px-2 py-1 font-mono text-xs [word-spacing:-0.2rem]'>
			<span className='font-sans'>⚡</span>
			CHANGES SAVED OFFLINE
		</div>
	)
}
