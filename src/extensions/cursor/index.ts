import Gapcursor from '@tiptap/extension-gapcursor'
import Dropcursor from '@tiptap/extension-dropcursor'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

const GapcursorExt = Gapcursor.extend({})
const DropcursorExt = Dropcursor.extend({}).configure({
  color: 'rgba(200, 200, 200, 0.5)', // 设置下拉光标的颜色
  width: 2, // 设置下拉光标的宽度
})

export const Cursor = Extension.create({
  name: 'cursor',
  addExtensions: () => [GapcursorExt, DropcursorExt]
})