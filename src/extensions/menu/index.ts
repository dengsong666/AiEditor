import BubbleMenu from '@tiptap/extension-bubble-menu'
import FloatingMenu from '@tiptap/extension-floating-menu'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

const BubbleMenuExt = BubbleMenu.extend({})
const FloatingMenuExt = FloatingMenu.extend({})

export const Menu = Extension.create({
  name: 'menu',
  addExtensions: () => [BubbleMenuExt, FloatingMenuExt]
})
