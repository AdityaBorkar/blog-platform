export default function LoadingSpinner() {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<div className='size-6 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-700' />
		</div>
	)
}
