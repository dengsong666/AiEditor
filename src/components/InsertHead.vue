<script lang='ts' setup>
const emit = defineEmits(['insert'])
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

const current = ref('i-icon-park-outline:title-level')
</script>

<template>
  <Popover :close="false" padding="8px">
    <template #trigger>
      <i :class="current"></i>
    </template>
    <div flex flex-col>
      <div v-for="(item, idx) in head" :key="idx" hover:bg-gray-100 p8px
        @click="current = item.icon, emit('insert', idx)">
        <Tooltip flex items-center :text="`${item.markdown} ${item.shortcut}`" place="right">
          <i :class="item.icon"></i>
          <span ml8px text-nowrap>{{ item.label }}</span>
        </Tooltip>
      </div>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>