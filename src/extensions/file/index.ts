import Image from '@tiptap/extension-image'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

const ImageExt = Image.extend({})

export const File = Extension.create({
  name: 'file',
  addExtensions: () => [ImageExt]
})
