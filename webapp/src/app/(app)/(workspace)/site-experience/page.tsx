// This tool can be separated as a module and used in other places

export default function WebPerformancePage() {
	const actionableInsights = [
		{
			slug: '/natak/kon-mhanta-takka-dila',
			issues: [],
		},
	]

	// * Analytics
	// Stickiness
	// Interactions
	// Satisfaction
	// Task Completion

	return (
		<div className='px-32 py-16 font-sans'>
			<div className='grid grid-cols-5 gap-8'>
				<div>Total Pages</div>
				<div>Analyzed Pages</div>
				{/* --- */}
				<div>Pass Pages</div>
				<div>Partial Pass Pages</div>
				<div>Fail Pages</div>
			</div>

			<div className='mb-4 mt-16 text-base font-medium'>
				Actionable Insights:
			</div>
			{actionableInsights.map((insight) => (
				<div key={insight.slug}>
					<div>{insight.slug}</div>
					<div>Issues</div>
					{/* RED = REQUIRED ; YELLOW = RECOMMENDED */}
				</div>
			))}
		</div>
	)
}
