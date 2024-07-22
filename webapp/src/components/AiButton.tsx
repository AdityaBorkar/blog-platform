export default function AiButton({
	children,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type='button'
			className='rounded-full bg-neutral-800 px-1.5 py-1 text-sm text-white'
			{...props}
		>
			{children}
		</button>
	)
}
