import Image from '@tiptap/extension-image'
import { Extension } from '@tiptap/vue-3'
import Figure from './figure'
import './style.scss'

const ImageExt = Image.extend({ addExtensions: () => [Figure] })

export const File = Extension.create({
  name: 'file',
  addExtensions: () => [ImageExt]
})
