import BubbleMenu from '@tiptap/extension-bubble-menu'
import FloatingMenu from '@tiptap/extension-floating-menu'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

const BubbleMenuExt = BubbleMenu.configure({
  shouldShow: ({ editor, view, state, oldState, from, to }) => {
    // only show the bubble menu for images and links
    console.log(editor, view, state, oldState, from, to);

    return editor.isActive('image') || editor.isActive('link')
  },
})
const FloatingMenuExt = FloatingMenu.extend({})

export const Menu = Extension.create({
  name: 'menu',
  addExtensions: () => [BubbleMenuExt, FloatingMenuExt]
})
