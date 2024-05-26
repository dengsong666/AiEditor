<script setup lang="ts">
import { focus, editor } from "@/hooks/editor"
import ColorPicker from "./ColorPicker.vue";
import InsertTable from "./InsertTable.vue";
import InsertLink from "./InsertLink.vue";
import InsertEmoji from "./InsertEmoji.vue";
import InsertHead from "./InsertHead.vue";
import { isVNode } from "vue";
import SetFontSize from "./SetFontSize.vue";
type AddSuffix<T extends string, S extends string> = `${T}${S}`
interface ToolOption {
  icon: string | VNode
  label: string
  shortcut?: string
  markdown?: string
  action?: () => void
}
type Tool = keyof typeof actions;
type ToolFold = Exclude<AddSuffix<Tool, "-fold">, 'head-fold' | 'fontsize-fold' | 'emoji-fold' | 'img-fold' | 'video-fold' | 'attachment-fold' | 'link-fold' | 'highlight-fold' | 'fontcolor-fold' | 'table-fold'>
const props = defineProps<{ tools?: (Tool | ToolFold)[] }>()
const actions = {
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
    icon: h(InsertHead, { onInsert: (level) => focus.value?.toggleHeading({ level }).run() }),
    label: '标题',
  },
  fontsize: {
    icon: h(SetFontSize, { onSet: (size) => focus.value?.setFontSize(size).run() }),
    label: '字体大小',
  },
  bold: {
    icon: 'i-icon-park-outline:text-bold',
    label: '加粗',
    shortcut: 'Ctrl+B',
    markdown: '**xx**',
    action: () => focus.value?.toggleBold().run()
  },
  italic: {
    icon: 'i-icon-park-outline:text-italic',
    label: '斜体',
    shortcut: 'Ctrl+I',
    action: () => focus.value?.toggleItalic().run()
  },
  underline: {
    icon: 'i-icon-park-outline:text-underline',
    label: '下划线',
    shortcut: 'Ctrl+U',
    action: () => focus.value?.toggleUnderline().run()
  },
  strike: {
    icon: 'i-icon-park-outline:strikethrough',
    label: '删除线',
    shortcut: 'Ctrl+Shift+S',
    action: () => focus.value?.toggleStrike().run()
  },
  code: {
    icon: 'i-icon-park-outline:code',
    label: '行内代码',
    shortcut: 'Ctrl+E',
    action: () => focus.value?.toggleCode().run()
  },
  codeblock: {
    icon: 'i-icon-park-outline:code-brackets',
    label: '代码',
    shortcut: 'Ctrl+Alt+C',
    action: () => focus.value?.toggleCodeBlock().run()
  },
  ol: {
    icon: 'i-icon-park-outline:ordered-list',
    label: '有序列表',
    shortcut: 'Ctrl+Shift+7',
    action: () => focus.value?.toggleOrderedList().run()
  },
  ul: {
    icon: 'i-icon-park-outline:list-two',
    label: '无序列表',
    shortcut: 'Ctrl+Shift+8',
    action: () => focus.value?.toggleBulletList().run()

  },
  task: {
    icon: 'i-icon-park-outline:list',
    label: '任务列表',
    shortcut: 'Ctrl+Shift+9',
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
    icon: 'i-icon-park-outline:picture-one',
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
const unfoldTools = ref<ToolOption[]>([])
const foldTools = ref<ToolOption[]>([])
watchEffect(() => {
  if (props.tools)
    props.tools.forEach(tool => tool.endsWith('-fold') ? foldTools.value.push(actions[tool.replace('-fold', '') as Tool] as ToolOption) : unfoldTools.value.push(actions[tool as Tool] as ToolOption))
  else unfoldTools.value = Object.values(actions) as ToolOption[]
})
</script>

<template>
  <div flex bg-white>
    <template v-for="action in unfoldTools" :key="action.key">
      <div :class="['tool', { 'is-active': editor?.isActive('bold') }]">
        <Tooltip :text="`${action.label}${action.shortcut ? ' ' + action.shortcut : ''}`" place="bottom">
          <component v-if="isVNode(action.icon)" :is="action.icon" />
          <i v-else :class="action.icon" @click="action.action && action.action()"></i>
        </Tooltip>
      </div>
    </template>
    <Popover v-if="foldTools.length" :close="false" padding="8px" p8px>
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
  padding: 8px;

  &:hover {
    background-color: rgba(243, 244, 246, 0.95);
    position: relative;
    cursor: pointer;
  }
}
</style>
