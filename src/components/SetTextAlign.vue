<script lang='ts' setup>
const emit = defineEmits(['set'])
const aligns = [
  { icon: 'i-icon-park-outline:align-text-left', label: '左对齐', value: 'left', shortcut: 'Ctrl+Shift+L' },
  { icon: 'i-icon-park-outline:align-text-center', label: '居中', value: 'center', shortcut: 'Ctrl+Shift+E' },
  { icon: 'i-icon-park-outline:align-text-right', label: '右对齐', value: 'right', shortcut: 'Ctrl+Shift+R' },
  { icon: 'i-icon-park-outline:align-text-both', label: '两端对齐', value: 'justify', shortcut: 'Ctrl+Shift+J' }
]
const current = ref(aligns[0].icon)
</script>

<template>
  <Popover padding="10px" :close="false">
    <template #trigger>
      <i :class="current"></i>
    </template>
    <div flex gap16px>
      <Tooltip v-for="item in aligns" :key="item.value" :text="`${item.label} ${item.shortcut}`">
        <i :class="item.icon" @click="current = item.icon, emit('set', item.value)">
        </i>
      </Tooltip>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>