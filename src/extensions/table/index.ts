import _Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

const TableExt = _Table.extend({}).configure({
  resizable: true,
})
const TableCellExt = TableCell.extend({})
const TableHeaderExt = TableHeader.extend({})
const TableRowExt = TableRow.extend({})

export const Table = Extension.create({
  name: 'table-',
  addExtensions: () => [TableExt, TableCellExt, TableHeaderExt, TableRowExt]
})
