<script lang='ts' setup>
withDefaults(defineProps<{ text?: string, place?: 'top' | 'bottom' | 'left' | 'right' }>(), { place: 'top' })
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
  color: #fff;
  padding: $size;
  position: absolute;
  z-index: 20;
  white-space: nowrap;
  border-radius: $size;
  background-color: $bg;

  &.top,
  &.bottom {
    left: 50%;
    transform: translateX(-50%);

    &>span {
      left: 50%;
    }
  }

  &.top {
    bottom: $sizec;

    &>span {
      bottom: 0;
      transform: translate(-50%, 100%);
    }
  }

  &.bottom {
    top: $sizec;

    &>span {
      top: 0;
      transform: translate(-50%, -100%);
    }
  }

  &.left,
  &.right {
    top: 50%;
    transform: translateY(-50%);

    &>span {
      top: 50%;
    }
  }

  &.left {
    right: $sizec;

    &>span {
      right: 0;
      transform: translate(100%, -50%);
    }
  }

  &.right {
    left: $sizec;

    &>span {
      left: 0;
      transform: translate(-100%, -50%);
    }
  }
}
</style>