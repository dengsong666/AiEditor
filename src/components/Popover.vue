<script lang='ts' setup>
withDefaults(defineProps<{ trigger?: 'click' | 'hover', confirm?: string | boolean, onConfirm?: Function, close?: boolean, padding?: string }>(), { trigger: 'hover', confirm: true, close: true })
const emit = defineEmits(['confirm'])
const show = ref(false)
const target = ref(null)
const hover = useElementHover(target)
onClickOutside(target, () => show.value = false)
defineExpose({ show })
watch(hover, val => show.value = val)
</script>

<template>
  <div ref="target" relative w-fit>
    <div p8px @click="show = !show">
      <slot name="trigger"></slot>
    </div>
    <div v-show="show" absolute z-100 bg-white shadow rounded-lg w-fit :style="`padding: ${padding || '16px'};`"
      class="top-100% left-50% -translate-x-50%">
      <span v-if="close" @click="show = false" float-right class="-mr12px -mt12px" i-mdi:close></span>
      <slot></slot>
      <button v-if="onConfirm" @click="show = false, emit('confirm')" float-right mt8px>{{ confirm || '确认' }}</button>
    </div>
  </div>
</template>

<style scoped lang='scss'></style>