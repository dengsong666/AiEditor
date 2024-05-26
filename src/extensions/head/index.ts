import Heading from '@tiptap/extension-heading'
import { Extension } from '@tiptap/vue-3'
import './style.scss'
/**
 * markdown # ## ### #### ##### ######
 * 默认快捷键 Control Alt 1/2/3/4/5/6
 */
const HeadingExt = Heading.extend({})

export const Head = Extension.create({
  name: 'head',
  addExtensions: () => [HeadingExt]
})