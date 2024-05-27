<script lang='ts' setup>
type Option = { label: any, value: string }
defineProps<{ options: Option[], icon?: string }>()
const emit = defineEmits(['select'])
</script>

<template>
  <Popover padding="8px" :close="false">
    <template #trigger>
      <i :class="icon"></i>
    </template>
    <div flex flex-col max-h200px overflow-y-auto scrollbar-none>
      <span v-for="op in options" :key="op.value" @click="emit('select', op.value)" text-nowrap text-center px20px py6px
        hover:bg-gray-100>
        {{ op.label }}
      </span>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>