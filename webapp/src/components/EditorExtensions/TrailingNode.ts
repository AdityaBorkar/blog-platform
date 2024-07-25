import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

// ? EXPERIMENTAL: https://tiptap.dev/docs/examples/experiments/trailing-node

/**
 * Extension based on:
 * - https://github.com/ueberdosis/tiptap/blob/v1/packages/tiptap-extensions/src/extensions/TrailingNode.js
 * - https://github.com/remirror/remirror/blob/e0f1bec4a1e8073ce8f5500d62193e52321155b9/packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
 */

export const TrailingNode = Extension.create({
	name: 'trailingNode',
	addProseMirrorPlugins() {
		const plugin = new PluginKey(this.name)
		return [
			new Plugin({
				key: plugin,
				appendTransaction: (_, __, state) => {
					const { doc, tr, schema } = state
					const shouldInsertNodeAtEnd = plugin.getState(state)
					console.log({ shouldInsertNodeAtEnd })
					const endPosition = doc.content.size
					const type = schema.nodes.paragraph // Type of node to insert

					if (!shouldInsertNodeAtEnd) return
					return tr.insert(endPosition, type.create())
				},
				state: {
					init: (_, state) => {
						const lastNode = state.tr.doc.lastChild
						if (['heading', 'paragraph'].includes(lastNode?.type.name || ''))
							return !!lastNode?.content.size
						return true
					},
					apply: (tr, value) => {
						if (!tr.docChanged) return value
						const lastNode = tr.doc.lastChild
						if (['heading', 'paragraph'].includes(lastNode?.type.name || ''))
							return !!lastNode?.content.size
						return true
					},
				},
			}),
		]
	},
})
