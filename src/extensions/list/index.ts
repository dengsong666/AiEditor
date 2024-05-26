import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
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
  addExtensions: () => [BulletListExt, OrderedListExt, ListItemExt, TaskListExt, TaskItemExt]
})
