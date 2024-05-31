<script setup lang="ts">
import { focus, editor } from "@/hooks/editor"
import ColorPicker from "./ColorPicker.vue";
import InsertTable from "./InsertTable.vue";
import InsertLink from "./InsertLink.vue";
import InsertEmoji from "./InsertEmoji.vue";
import Tooltip from "./Tooltip.vue";
import { isVNode } from "vue";
import SetTextAlign from "./SetTextAlign.vue";
import Select from "./Select.vue";
import Upload from "./Upload.vue";

type AddSuffix<T extends string, S extends string> = `${T}${S}`
interface ToolOption {
  icon: string | VNode
  label: string
  shortcut?: string
  markdown?: string
  active?: (string | object)[],
  action?: () => void
}
type Tool = keyof typeof actions;
type ToolFold = Exclude<AddSuffix<Tool, "-fold">, 'head-fold' | 'fontsize-fold' | 'emoji-fold' | 'img-fold' | 'video-fold' | 'attachment-fold' | 'link-fold' | 'highlight-fold' | 'fontcolor-fold' | 'table-fold'>
const props = defineProps<{ tools?: (Tool | ToolFold | '|')[] }>()
const head = [
  {
    icon: 'i-icon-park-outline:h',
    shortcut: 'Ctrl+Alt+0',
    markdown: '',
    label: '正文',
  },
  {
    icon: 'i-icon-park-outline:h1',
    shortcut: 'Ctrl+Alt+1',
    markdown: '# ',
    label: '标题1',
  },
  {
    icon: 'i-icon-park-outline:h2',
    shortcut: 'Ctrl+Alt+2',
    markdown: '## ',
    label: '标题2',
  },
  {
    icon: 'i-icon-park-outline:h3',
    shortcut: 'Ctrl+Alt+3',
    markdown: '### ',
    label: '标题3',
  },
  {
    icon: 'i-icon-park-outline:level-four-title',
    shortcut: 'Ctrl+Alt+4',
    markdown: '#### ',
    label: '标题4',
  },
  {
    icon: 'i-icon-park-outline:level-five-title',
    shortcut: 'Ctrl+Alt+5',
    markdown: '##### ',
    label: '标题5',
  },
  {
    icon: 'i-icon-park-outline:level-six-title',
    shortcut: 'Ctrl+Alt+6',
    markdown: '###### ',
    label: '标题6',
  },
]
const actions: { [key in string]: ToolOption } = {
  undo: {
    icon: 'i-icon-park-outline:back',
    label: '撤销',
    shortcut: 'Ctrl+Z',
    action: () => focus.value?.undo().run()
  },
  redo: {
    icon: 'i-icon-park-outline:next',
    label: '重做',
    shortcut: 'Ctrl+Y',
    action: () => focus.value?.redo().run()
  },
  head: {
    icon: h(Select, {
      onSelect: (level) => level ? focus.value?.toggleHeading({ level }).run() : focus.value?.setParagraph().run(), icon: 'i-icon-park-outline:title-level',
      options: head.map((item, value) => ({ value, label: item.label }))
    }, {
      default: ({ value: i }: any) => h(Tooltip, {
        class: 'flex items-center', text: `${head[i].markdown} ${head[i].shortcut}`, place: "right"
      }, {
        default: () => [
          h('i', { class: head[i].icon }),
          h('span', { class: 'ml8px text-nowrap' }, head[i].label)
        ]
      })
    }),
    active: ['heading', 'paragraph'],
    label: '标题',
  },
  fontsize: {
    icon: h(Select, {
      onSelect: (size: string) => focus.value?.setFontSize(size).run(), icon: 'i-ant-design:font-size-outlined',
      options: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 88].map(label => ({ label, value: `${label}px` }))
    }),
    active: ['paragraph'],
    label: '字体大小',
  },
  fontfamily: {
    icon: h(Select, {
      onSelect: (font) => focus.value?.setFontFamily(font).run(), icon: 'i-mdi:format-font',
      options: [['微软雅黑', 'Microsoft YaHei'], ['宋体', 'SimSun'], ['黑体', 'SimHei'], ['楷体', 'KaiTi'], ['隶书', 'LiSu'], ['幼圆', 'YouYuan'], ['Arial'], ['Verdana']].map(([label, value = label]) => ({ label, value }))
    }),
    active: ['paragraph'],
    label: '字体',
  },
  lineheight: {
    icon: h(Select, {
      onSelect: (lh) => focus.value?.setLineHeight(lh).run(), icon: 'i-mdi:format-line-height',
      options: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3].map(label => ({ label, value: `${label}em` }))
    }),
    label: '行高',
  },
  bold: {
    icon: 'i-icon-park-outline:text-bold',
    label: '加粗',
    shortcut: 'Ctrl+B',
    markdown: '**xx**',
    active: ['paragraph'],
    action: () => focus.value?.toggleBold().run()
  },
  italic: {
    icon: 'i-icon-park-outline:text-italic',
    label: '斜体',
    shortcut: 'Ctrl+I',
    active: ['paragraph'],
    action: () => focus.value?.toggleItalic().run()
  },
  underline: {
    icon: 'i-icon-park-outline:text-underline',
    label: '下划线',
    shortcut: 'Ctrl+U',
    active: ['paragraph'],
    action: () => focus.value?.toggleUnderline().run()
  },
  strike: {
    icon: 'i-icon-park-outline:strikethrough',
    label: '删除线',
    shortcut: 'Ctrl+Shift+S',
    active: ['paragraph'],
    action: () => focus.value?.toggleStrike().run()
  },
  code: {
    icon: 'i-icon-park-outline:code',
    label: '行内代码',
    shortcut: 'Ctrl+E',
    active: ['code'],
    action: () => focus.value?.toggleCode().run()
  },
  codeblock: {
    icon: 'i-icon-park-outline:code-brackets',
    label: '代码',
    shortcut: 'Ctrl+Alt+C',
    active: ['code'],
    action: () => focus.value?.toggleCodeBlock().run()
  },
  ol: {
    icon: 'i-icon-park-outline:ordered-list',
    label: '有序列表',
    shortcut: 'Ctrl+Shift+7',
    active: ['paragraph'],
    action: () => focus.value?.toggleOrderedList().run()
  },
  ul: {
    icon: 'i-icon-park-outline:list-two',
    label: '无序列表',
    shortcut: 'Ctrl+Shift+8',
    active: ['paragraph'],
    action: () => focus.value?.toggleBulletList().run()

  },
  task: {
    icon: 'i-icon-park-outline:list',
    label: '任务列表',
    shortcut: 'Ctrl+Shift+9',
    active: ['paragraph'],
    action: () => focus.value?.toggleTaskList().run()

  },
  blockquote: {
    icon: 'i-icon-park-outline:quote',
    label: '引用',
    shortcut: 'Ctrl+Shift+B',
    action: () => focus.value?.toggleBlockquote().run()
  },
  hardbreak: {
    icon: 'i-icon-park-outline:paragraph-break-two',
    label: '换行',
    shortcut: 'Shift+Enter',
    active: ['paragraph'],
    action: () => focus.value?.setHardBreak().run()
  },
  division: {
    icon: 'i-icon-park-outline:dividing-line',
    label: '分割线',
    shortcut: '',
    action: () => focus.value?.setHorizontalRule().run()
  },
  sup: {
    icon: 'i-mdi:format-superscript',
    label: '上标',
    shortcut: 'Crtl+.',
    action: () => focus.value?.toggleSuperscript().run()
  },
  sub: {
    icon: 'i-mdi:format-subscript',
    label: '下标',
    shortcut: 'Crtl+,',
    action: () => focus.value?.toggleSubscript().run()
  },
  img: {
    icon: h(Upload, { onFinish: ({ src, alt, title, caption }) => focus.value?.setFigure({ src, alt, title, caption }).run(), icon: 'i-icon-park-outline:picture-one' }),
    active: ['image'],
    label: '图像',
  },
  video: {
    icon: 'i-icon-park-outline:video-two',
    label: '视频',
  },
  attachment: {
    icon: 'i-icon-park-outline:paperclip',
    label: '附件',
  },
  emoji: {
    icon: h(InsertEmoji, { onInsert: (emoji) => focus.value?.insertContent(emoji).run() }),
    label: '表情',
  },
  link: {
    icon: h(InsertLink, { onInsert: (href) => focus.value?.toggleLink({ href }).run() }),
    label: '链接',
  },
  highlight: {
    icon: h(ColorPicker, { onPick: (color) => focus.value?.toggleHighlight({ color }).run() }),
    label: '高亮',
    shortcut: 'Ctrl+Shift+H',
  },
  fontcolor: {
    icon: h(ColorPicker, { onPick: (color) => focus.value?.setColor(color).run(), icon: 'i-ant-design:font-colors-outlined' }),
    label: '字体颜色',
  },
  textalign: {
    icon: h(SetTextAlign, { onSet: (align) => focus.value?.setTextAlign(align).run() }),
    label: '文字对齐',
  },
  table: {
    icon: h(InsertTable, { onInsert: ([rows, cols]) => focus.value?.insertTable({ rows, cols, withHeaderRow: true }).run() }),
    label: '表格',
  },
  help: {
    icon: 'i-icon-park-outline:helpcenter',
    label: '帮助中心',
    action: () => { }
  },
  about: {
    icon: 'i-icon-park-outline:layers',
    label: '关于',
    action: () => { }
  }
}
const unfoldTools = ref<(ToolOption | '|')[]>([])
const foldTools = ref<ToolOption[]>([])
watchEffect(() => {
  if (props.tools)
    props.tools.forEach(tool => tool.endsWith('-fold') ? foldTools.value.push(actions[tool.replace('-fold', '') as Tool]) : unfoldTools.value.push(tool === '|' ? tool : actions[tool as Tool]))
  else unfoldTools.value = Object.values(actions) as ToolOption[]
})
</script>

<template>
  <div flex bg-white>
    <template v-for="action in unfoldTools" :key="action.key">
      <div v-if="action === '|'" px8px lh-32px text-gray-300>|</div>
      <Tooltip v-else-if="action.active?.some(a => editor?.isActive(a))" class="tool"
        :text="`${action.label}${action.shortcut ? ' ' + action.shortcut : ''}`" place="top">
        <component v-if="isVNode(action.icon)" :is="action.icon" />
        <div v-else p8px><i :class="action.icon" @click="action.action && action.action()"></i></div>
      </Tooltip>
    </template>
    <Popover v-if="foldTools.length" :close="false" padding="8px">
      <template #trigger>
        <i i-icon-park-outline:more></i>
      </template>
      <div flex flex-col>
        <div v-for="action in foldTools" :key="action.label" hover:bg-gray-100
          @click="action.action && action.action()">
          <Tooltip :text="`${action.label}${action.shortcut ? ' ' + action.shortcut : ''}`" place="bottom">
            <div flex items-center p8px>
              <i :class="action.icon"></i>
              <span ml8px text-nowrap>{{ action.label }}</span>
            </div>
          </Tooltip>
        </div>
      </div>
    </Popover>
  </div>
</template>
<style scoped lang="scss">
.tool {

  &:hover {
    background-color: rgba(243, 244, 246, 0.95);
    position: relative;
    cursor: pointer;
  }
}
</style>
