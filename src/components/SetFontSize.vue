<script lang='ts' setup>
defineProps<{ icon?: string }>()
const emit = defineEmits(['set'])
const sizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 88]
</script>

<template>
  <Popover padding="8px" :close="false">
    <template #trigger>
      <i i-ant-design:font-size-outlined></i>
    </template>
    <div flex flex-col h200px overflow-y-auto scrollbar-none>
      <span v-for="s in sizes" :key="s" @click="emit('set', s + 'px')" text-center px20px py6px hover:bg-gray-100>
        {{ s }}
      </span>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>