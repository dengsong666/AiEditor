<script lang='ts' setup>
withDefaults(defineProps<{ trigger?: 'click' | 'hover', place?: Pos, confirm?: string | boolean, onConfirm?: Function, close?: boolean, padding?: string }>(), { trigger: 'hover', place: 'bottom', confirm: true, close: true })
const emit = defineEmits(['confirm'])
const show = defineModel({ default: false })
const target = ref(null)
const hover = useElementHover(target)
onClickOutside(target, () => show.value = false)
watch(hover, val => show.value = val)
</script>

<template>
  <div ref="target" relative>
    <div @click="show = !show">
      <slot name="trigger"></slot>
    </div>
    <div v-show="show" :class="['panel', place]" shadow rounded-lg w-fit :style="`padding: ${padding || '16px'};`">
      <span v-if="close" @click="show = false" float-right class="-mr12px -mt12px" i-mdi:close></span>
      <slot></slot>
      <button v-if="onConfirm" @click="show = false, emit('confirm')" float-right mt8px>{{ confirm || '确认' }}</button>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.panel {
  @include place;
}
</style>