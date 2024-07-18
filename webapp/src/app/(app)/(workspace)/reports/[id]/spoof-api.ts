import { notFound } from 'next/navigation'

export default function SpoofAPI(id: string) {
	const reports = [id1, id2]
	const report = reports.find((report) => report.id === id)
	if (!report) notFound()
	return report
}

// TODO: FIRST LIST ALL REPORTS and then make a CONSTRUCT TYPE

const id1: ReportType = {
	id: '1',
	name: 'User Devices',
	description: 'Details of the devices used by the users',
	// Device: Tablet Mobile Laptop Desktop R1: P1
	// Operating System: Android Apple ChromeOS R1: P2 P3 P4
	// Browser: Chrome / Chrome Mobile / Edge / Firefox Opera Safari r2: P5 P6 P7
	// Browser Versions the users are using
	// Dimensions and number of users reporting the dimension
	// Pixel Ratio / Resolution
	// Client Hints - Reduced Motion / Color Scheme / Device Memory
	render: 'grid',
	grid: [
		{
			id: '1',
			name: 'Width',
			description: 'The width of the device',
			value: '1920',
		},
		{
			id: '2',
			name: 'Height',
			description: 'The height of the device',
			value: '1080',
		},
		{
			id: '3',
			name: 'Pixel Ratio',
			description: 'The pixel ratio of the device',
			value: '2',
		},
	],
}

const id2: ReportType = {
	id: '2',
	name: 'Page Performance',
	description: 'Details of pages and their performance scores',
	render: 'table',
	table: [
		{
			id: '1', // Status
			name: 'Status',
			description: 'The status of the page',
			value: 'Good',
		},
		{
			id: '1',
			name: 'Slug',
			description: 'The slug of the page',
			value: 'https://www.example.com/page',
		},
		{
			id: '2',
			name: 'Page Size',
			description: 'The size of the page',
			value: '1.5 MB',
		},
		{
			id: '3',
			name: 'Curated Index',
			description: 'The curated index of the page',
			value: '0.9',
		},
		{
			id: '4',
			name: 'Performance Index (Mobile)',
			description: 'The performance index of the page on mobile',
			value: '0.9',
		},
		{
			id: '5',
			name: 'Performance Index (Desktop)',
			description: 'The performance index of the page on desktop',
			value: '0.9',
		},
	],
	// - Response Time
	// - File Size
	// - Speed Tests from different countries

	// Site
	// - Response Time from different countries
	// - Speed Tests from different countries

	// Core Web Vitals & Unlighthouse Score
	// - Performance Checklist: https://github.com/flowforfrank/performance-checklist

	// - External Page Speed Tests:
	// 	- https://tools.pingdom.com/
	// 	- https://gtmetrix.com/
	// ---
	// Expand Slug:
	// <div>Page Speed Insights /</div>
	// <div>Chrome User Experience Report /</div>
	// <div>W3C Validation</div>
	// <div>Accessiblity</div>
	// <div>Mobile Usability</div>
	// <div>Browser Console Errors</div>
}
