import Blockquote from '@tiptap/extension-blockquote'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import { CharacterCount } from '@tiptap/extensions'
import { Extension } from '@tiptap/vue-3'
import './style.scss'
/**
 * markdown >
 * 默认快捷键 Control Shift B
 */
const BlockquoteExt = Blockquote.extend({})
const DocumentExt = Document.extend({})
/**
 * 默认快捷键 Control Alt 0
 */
const ParagraphExt = Paragraph.extend({})
const CharacterCountExt = CharacterCount.extend({})

export const Block = Extension.create({
  name: 'block',
  addExtensions: () => [BlockquoteExt, DocumentExt, ParagraphExt, CharacterCountExt]
})