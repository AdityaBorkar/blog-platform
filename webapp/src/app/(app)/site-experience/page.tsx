// This tool can be separated as a module and used in other places

export default function WebPerformancePage() {
	const actionableInsights = [
		{
			slug: '/natak/kon-mhanta-takka-dila',
			issues: [],
		},
	]
	return (
		<div className='font-sans'>
			<div>Total Pages</div>
			<div>Analyzed Pages</div>
			<div>Pass Pages</div>
			<div>Partial Pass Pages</div>
			<div>Fail Pages</div>

			<div>
				<div>Slug</div>
				<div>Page Size</div>
				<div>Web Vital</div>
				<div>Web Vital</div>
				<div>Web Vital</div>
				<div>Web Vital</div>
				<div>Web Vital</div>
				<div>Web Vital</div>
				<div>Performance Index</div>
			</div>

			<div>Actionable Insights:</div>
			{actionableInsights.map((insight) => (
				<div key={insight.slug}>
					<div>{insight.slug}</div>
					<div>Issues</div>
				</div>
			))}

			{/* RED = REQUIRED ; YELLOW = RECOMMENDED */}

			<div>Page Speed Insights /</div>
			<div>Chrome User Experience Report /</div>

			<div>W3C Validation</div>
			<div>Accessiblity</div>
			<div>Mobile Usability</div>
			<div>Browser Console Errors</div>
		</div>
	)
}

// - Response Time
// - File Size
// - Speed Tests from different countries

// Site
// - Response Time from different countries
// - Speed Tests from different countries

// Speed
// Responsiveness
// Stickiness

// Core Web Vitals & Unlighthouse Score
// - Performance Checklist: https://github.com/flowforfrank/performance-checklist

// - External Page Speed Tests:
// 	- https://tools.pingdom.com/
// 	- https://gtmetrix.com/
