import type { PrimitiveAtom } from 'jotai'
import { atom } from 'jotai'

type Path<T> = T extends object
	? {
			[K in keyof T]: K extends string
				? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
					T[K] extends any[]
					? `${K}`
					: T[K] extends Date
						? `${K}`
						: `${K}` | `${K}.${Path<T[K]>}`
				: never
		}[keyof T]
	: never

export default function $atom<T, P extends Path<T>>(
	dataAtom: PrimitiveAtom<T>,
	path: P,
) {
	// TODO: Replace `eval` for performance reasons.
	return atom(
		(get) => {
			const atom = get(dataAtom)
			// biome-ignore lint/security/noGlobalEval: <explanation>
			return eval(`atom.${path}`)
		},
		(get, set, newValue: Blog.Link[]) =>
			set(dataAtom, (data) => {
				// biome-ignore lint/security/noGlobalEval: <explanation>
				eval(`data.${path} = newValue`)
				return { ...data }
			}),
	)
}
