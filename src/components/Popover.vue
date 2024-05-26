<script lang='ts' setup>
withDefaults(defineProps<{ confirm?: string | boolean, onConfirm?: Function, close?: boolean, padding?: string }>(), { close: true })
const emit = defineEmits(['confirm'])
const show = ref(false)
const target = ref(null)
onClickOutside(target, () => show.value = false)
</script>

<template>
  <div ref="target" relative w-fit>
    <div @click="show = !show">
      <slot name="trigger"></slot>
    </div>
    <div v-show="show" absolute z-100 bg-white shadow rounded-lg w-fit :style="`padding: ${padding || '16px'};`"
      class="top-120% left-50% -translate-x-50%">
      <span v-if="close" @click="show = false" float-right class="-mr12px -mt12px" i-mdi:close></span>
      <slot></slot>
      <button v-if="onConfirm" @click="show = false, emit('confirm')" float-right mt8px>{{ confirm || '确认' }}</button>
    </div>
  </div>
</template>

<style scoped lang='scss'></style>