export default function SiteExperienceLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='font-sans'>
			<div className='mb-8 mt-6 text-center font-bold text-neutral-600'>
				Site Experience
			</div>

			{children}
		</div>
	)
}
