// @unocss-include
import { h } from "vue"
import Upload from "@/components/Upload.vue"
import InsertLink from "@/components/InsertLink.vue"
import InsertTable from "@/components/InsertTable.vue"
import InsertEmoji from "@/components/InsertEmoji.vue"
import ColorPicker from "@/components/ColorPicker.vue"
import * as command from "./command"
export const basics = [
  // {
  //   icon: 'i-icon-park-outline:back',
  //   label: '撤销',
  //   value: 'undo',
  //   shortcut: 'Ctrl+Z',
  //   markdown: '',
  //   handler: command.undo,
  // },
  // {
  //   icon: 'i-icon-park-outline:next',
  //   label: '重做',
  //   value: 'redo',
  //   shortcut: 'Ctrl+Y',
  //   markdown: '',
  //   handler: command.redo,
  // },
  {
    icon: 'i-icon-park-outline:text-bold',
    label: '加粗',
    value: 'bold',
    shortcut: 'Ctrl+B',
    markdown: '**xx**',
    active: ['paragraph'],
    handler: command.toggleBold,
  },
  {
    icon: 'i-icon-park-outline:text-italic',
    label: '斜体',
    value: 'italic',
    shortcut: 'Ctrl+I',
    active: ['paragraph'],
    handler: command.toggleItalic,
  },
  {
    icon: 'i-icon-park-outline:text-underline',
    label: '下划线',
    value: 'underline',
    shortcut: 'Ctrl+U',
    markdown: '',
    active: ['paragraph'],
    handler: command.toggleUnderline,
  },
  {
    icon: 'i-icon-park-outline:strikethrough',
    label: '删除线',
    value: 'strike',
    shortcut: 'Ctrl+Shift+S',
    markdown: '',
    active: ['paragraph'],
    handler: command.toggleStrike,
  },
]
export const text = [
  {
    icon: 'i-icon-park-outline:quote',
    label: '引用',
    value: 'blockquote',
    shortcut: 'Ctrl+Shift+B',
    active: ['paragraph'],
    handler: command.toggleBlockquote,
  },
  {
    icon: 'i-icon-park-outline:paragraph-break-two',
    label: '换行',
    value: 'hardbreak',
    shortcut: 'Shift+Enter',
    active: ['paragraph'],
    handler: command.setHardBreak,
  },
  {
    icon: 'i-icon-park-outline:dividing-line',
    label: '分割线',
    value: 'division',
    shortcut: '',
    active: ['paragraph'],
    handler: command.setHorizontalRule,
  },
  {
    icon: 'i-mdi:format-superscript',
    label: '上标',
    value: 'sup',
    shortcut: 'Crtl+.',
    active: ['text'],
    handler: command.toggleSuperscript,
  },
  {
    icon: 'i-mdi:format-subscript',
    label: '下标',
    value: 'sub',
    shortcut: 'Crtl+,',
    active: ['text'],
    handler: command.toggleSubscript,
  },
  {
    icon: h(InsertLink, { onInsert: command.toggleLink }),
    label: '链接',
    value: 'link',
  },
  {
    icon: h(ColorPicker, { onPick: command.toggleHighlight }),
    label: '高亮',
    value: 'highlight',
    shortcut: 'Ctrl+Shift+H',
  },
  {
    icon: h(ColorPicker, { onPick: command.setColor, icon: 'i-ant-design:font-colors-outlined' }),
    label: '字体颜色',
    value: 'fontcolor',
  }
]

export const table = [
  {
    icon: h(InsertTable, { onInsert: command.insertTable }),
    label: '表格',
    value: 'table',
  },
]
export const file = [
  {
    icon: h(Upload, { onFinish: command.setFigure, icon: 'i-icon-park-outline:picture-one' }),
    active: ['image'],
    label: '图像',
    value: 'image',
  },
  {
    icon: 'i-icon-park-outline:video-two',
    label: '视频',
    active: ['video'],
    value: 'video',
  },
  {
    icon: 'i-icon-park-outline:paperclip',
    label: '附件',
    active: ['attachment'],
    value: 'attachment',
  },
  {
    icon: h(InsertEmoji, { onInsert: command.insertContent }),
    label: '表情',
    active: ['text'],
    value: 'emoji',
  },
]
export const code = [
  {
    icon: 'i-icon-park-outline:code',
    label: '行内代码',
    value: 'code-inline',
    shortcut: 'Ctrl+E',
    active: ['code'],
    handler: command.toggleCode,
  },
  {
    icon: 'i-icon-park-outline:code-brackets',
    label: '代码',
    value: 'code-block',
    shortcut: 'Ctrl+Alt+C',
    active: ['code'],
    handler: command.toggleCodeBlock,
  },
]
export const list = [
  {
    icon: 'i-icon-park-outline:ordered-list',
    label: '有序列表',
    value: 'ol',
    shortcut: 'Ctrl+Shift+7',
    active: ['paragraph'],
    handler: command.toggleOrderedList,
  },
  {
    icon: 'i-icon-park-outline:list-two',
    label: '无序列表',
    value: 'ul',
    shortcut: 'Ctrl+Shift+8',
    active: ['paragraph'],
    handler: command.toggleBulletList,
  },
  {
    icon: 'i-icon-park-outline:list',
    label: '任务列表',
    value: 'task',
    shortcut: 'Ctrl+Shift+9',
    active: ['paragraph'],
    handler: command.toggleTaskList,
  },
]
export const head = [
  {
    icon: 'i-icon-park-outline:h',
    label: '正文',
    value: undefined,
    markdown: '',
    shortcut: 'Ctrl+Alt+0',
  },
  {
    icon: 'i-icon-park-outline:h1',
    label: '标题1',
    value: 1,
    shortcut: 'Ctrl+Alt+1',
    markdown: '# ',
  },
  {
    icon: 'i-icon-park-outline:h2',
    label: '标题2',
    value: 2,
    shortcut: 'Ctrl+Alt+2',
    markdown: '## ',
  },
  {
    icon: 'i-icon-park-outline:h3',
    label: '标题3',
    value: 3,
    markdown: '### ',
    shortcut: 'Ctrl+Alt+3',
  },
  {
    icon: 'i-icon-park-outline:level-four-title',
    label: '标题4',
    value: 4,
    shortcut: 'Ctrl+Alt+4',
    markdown: '#### ',
  },
  {
    icon: 'i-icon-park-outline:level-five-title',
    label: '标题5',
    value: 5,
    shortcut: 'Ctrl+Alt+5',
    markdown: '##### ',
  },
  {
    icon: 'i-icon-park-outline:level-six-title',
    label: '标题6',
    value: 6,
    shortcut: 'Ctrl+Alt+6',
    markdown: '###### ',
  },
]
export const align = [
  {
    icon: 'i-icon-park-outline:align-text-left',
    label: '左对齐',
    value: 'left',
    shortcut: 'Ctrl+Shift+L',
    markdown: '',
  },
  {
    icon: 'i-icon-park-outline:align-text-center',
    label: '居中',
    value: 'center',
    shortcut: 'Ctrl+Shift+E',
    markdown: '',
  },
  {
    icon: 'i-icon-park-outline:align-text-right',
    label: '右对齐',
    value: 'right',
    shortcut: 'Ctrl+Shift+R',
    markdown: '',
  },
  {
    icon: 'i-icon-park-outline:align-text-both',
    label: '两端对齐',
    value: 'justify',
    shortcut: 'Ctrl+Shift+J',
    markdown: '',
  }
]
export const fontsize = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 88].map(label => ({ label, value: `${label}px` }))
export const fontfamily = [['微软雅黑', 'Microsoft YaHei'], ['宋体', 'SimSun'], ['黑体', 'SimHei'], ['楷体', 'KaiTi'], ['隶书', 'LiSu'], ['幼圆', 'YouYuan'], ['Arial'], ['Verdana']].map(([label, value = label]) => ({ label, value }))
export const lineheight = [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3].map(label => ({ label, value: `${label}em` }))

export const more = [
  {
    icon: 'i-icon-park-outline:helpcenter',
    label: '帮助中心',
    value: 'help',
  },
  {
    icon: 'i-icon-park-outline:layers',
    label: '关于',
    value: 'about',
  }
] 