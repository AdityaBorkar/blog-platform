'use client'

import dynamic from 'next/dynamic'

// import '@excalidraw/excalidraw/index.css'

// !BUG: https://github.com/excalidraw/excalidraw/issues/7513
const Excalidraw = dynamic(
	async () => (await import('@excalidraw/excalidraw')).Excalidraw,
	{ ssr: false },
)

export default function CanvasPage() {
	// Dotted Grid Interface using Excalidraw

	// Text, Media
	// Rectangle, Circle
	// Section, Table
	// Sticky Note, Highlighter

	return <div className='h-screen w-full'>{/* <Excalidraw /> */}</div>
}
