<script lang='ts' setup>
type Option = { label: any, value: any }
defineProps<{ options: Option[], icon?: string }>()
const emit = defineEmits(['select'])
const refPopover = ref()
</script>

<template>
  <Popover ref="refPopover" padding="8px" :close="false">
    <template #trigger>
      <div flex>
        <i :class="icon"></i>
        <i i-icon-park-outline:down transition-all :class="{ 'rotate-180': refPopover?.show }"></i>
      </div>
    </template>
    <div flex flex-col scrollbar-none>
      <span v-for="op in options" :key="op.value" @click="emit('select', op.value)" text-nowrap text-center px20px py6px
        hover:bg-gray-100>
        <slot :value="op.value"> {{ op.label }}</slot>
      </span>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>