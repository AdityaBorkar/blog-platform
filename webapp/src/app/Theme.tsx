'use client'

import { useEffect, useState } from 'react'

export default function Theme() {
	// TODO: Early Hint Detection to avoid re-renders
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		// TODO: Subscribe to local Storage
		const localStorageTheme = localStorage.getItem('theme')
		const { theme, unsubscribe } = localStorageTheme
			? { theme: localStorageTheme, unsubscribe: null }
			: subscribeSystemTheme()

		if (theme === 'light') document.body.classList.remove('dark')
		else document.body.classList.add('dark')

		return () => {
			unsubscribe?.()
		}
	}, [])

	return null
}

function subscribeSystemTheme() {
	const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'

	const changeTheme = (e: MediaQueryListEvent) => {
		if (e.matches) document.body.classList.remove('dark')
		else document.body.classList.add('dark')
	}

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', changeTheme)

	const unsubscribe = () => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.removeEventListener('change', changeTheme)
	}

	return { theme, unsubscribe }
}
