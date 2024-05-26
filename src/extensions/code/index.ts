import CodeInline from '@tiptap/extension-code'
import CodeBlock from '@tiptap/extension-code-block'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

import { Extension } from '@tiptap/vue-3'
import { common, createLowlight } from 'lowlight'
import './style.scss'

const CodeInlineExt = CodeInline.extend({})
/**
 * markdown ```xxx``` ~~~xxx~~~
 * 默认快捷键 Control Alt C
 */
const CodeBlockExt = CodeBlock.extend({})
const CodeBlockLowlightExt = CodeBlockLowlight.extend({}).configure({
  lowlight: createLowlight(common),
})
/**
 * markdown `xxx`
 * 默认快捷键 Control E
 */
export const Code = Extension.create({
  name: 'code-',
  addExtensions: () => [CodeInlineExt, CodeBlockExt, CodeBlockLowlightExt]
})