import { OrderedList, BulletList, ListItem, TaskList, TaskItem } from '@tiptap/extension-list'
import { Extension } from '@tiptap/vue-3'
import './style.scss'

/**
 * markdown 1. 2. 3.
 * 默认快捷键 Control Shift 7
 */
const OrderedListExt = OrderedList.extend({})
/**
 * markdown * - +
 * 默认快捷键 Control Shift 8
 */
const BulletListExt = BulletList.extend({})
const ListItemExt = ListItem.extend({})
/**
 * 默认快捷键 Control Shift 9
 */
const TaskListExt = TaskList.extend({})
const TaskItemExt = TaskItem.extend({})

export const List = Extension.create({
  name: 'list',
  addExtensions: () => [OrderedListExt, BulletListExt, ListItemExt, TaskListExt, TaskItemExt]
})
