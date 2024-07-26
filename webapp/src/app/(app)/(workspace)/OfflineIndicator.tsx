import { cn } from '@/lib/utils'

export default function OfflineIndicator() {
	// TODO: REPLOCAL
	const isOnline = true

	if (isOnline) return null
	return (
		<div
			className={cn(
				'mx-auto w-fit rounded border border-neutral-300 px-2 py-1 font-mono text-xs [word-spacing:-0.2rem]',
				'dark:border-neutral-700',
			)}
		>
			⚡CHANGES SAVED OFFLINE
		</div>
	)
}
