'use client'

import { useEffect } from 'react'

export default function Monitoring() {
	useEffect(() => {
		ReportToServer({
			hardwareConcurrency: navigator.hardwareConcurrency,
			maxTouchPoints: navigator.maxTouchPoints,
			// @ts-expect-error
			internetSpeed: navigator?.connection,
			// @ts-expect-error
			deviceMemory: navigator?.deviceMemory,
			// @ts-expect-error
			gpu: navigator?.gpu,
		})

		const randomDelay = -Math.log(Math.random()) * 2 * 60 * 1000
		const timeout = setInterval(measureMemory, randomDelay)
		return () => clearTimeout(timeout)
	}, [])

	return null
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function ReportToServer(data: any) {
	const anonymizedUser = null
	const id = Math.random()
	console.info({ anonymizedUser, id, data })
	// TODO: Reporting to server
}

async function measureMemory() {
	// @ts-expect-error
	const snapshot = await performance.measureUserAgentSpecificMemory()
	// @ts-expect-error
	const memory = window.performance.memory

	ReportToServer({
		snapshot,
		memory: {
			limit: bytesToMegabytes(memory.jsHeapSizeLimit),
			total: bytesToMegabytes(memory.totalJSHeapSize),
			used: bytesToMegabytes(memory.usedJSHeapSize),
		},
	})
	// TODO: Tab Memory Usage < 150 MB
}

function bytesToMegabytes(bytes: number) {
	return bytes / 1000000
}
