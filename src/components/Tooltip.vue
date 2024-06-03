<script lang='ts' setup>
withDefaults(defineProps<{ text?: string, place?: Pos }>(), { place: 'top' })
const show = ref(false)
const bg = ref('#555')
const size = ref('4px')
const sizec = computed(() => `calc(100% + 4px + ${size.value})`)
</script>

<template>
  <div relative @mouseenter="show = true" @mouseleave="show = false">
    <slot></slot>
    <div v-show="show" :class="['content', place]">
      <span absolute border="solid transparent" :style="`border-width: ${size}; border-${place}-color: ${bg};`"></span>
      <slot name="content">{{ text }}</slot>
    </div>
  </div>
</template>

<style scoped lang='scss'>
$sizec: v-bind(sizec);
$bg: v-bind(bg);
$size: v-bind(size);


.content {
  @include place($size, $sizec, #fff, $bg, 50%)
}
</style>