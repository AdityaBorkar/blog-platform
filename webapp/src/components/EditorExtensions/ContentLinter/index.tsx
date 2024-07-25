import { Extension } from '@tiptap/core'

const ContentLinter = Extension.create({
	name: 'contentLinter',
	// https://tiptap.dev/docs/examples/experiments/linting
})

// editor.storage.characterCount.characters()
// editor.storage.characterCount.words()

export default ContentLinter
