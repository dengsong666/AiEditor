import History from '@tiptap/extension-history'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

const HistoryExt = History.extend({})

export const Browser = Extension.create({
  name: 'browser',
  addExtensions: () => [HistoryExt]
})