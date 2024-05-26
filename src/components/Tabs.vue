<script lang='ts' setup>
const props = defineProps<{ tabs: any[], width?: string, height?: string }>()
const active = ref(props.tabs[0])
const refTabs = ref<HTMLElement | null>(null)
const { x, arrivedState } = useScroll(refTabs, { behavior: 'smooth' })
onMounted(() => arrivedState.right = false)
</script>

<template>
  <div ref="refTabs" flex flex-nowrap overflow-x-scroll scrollbar-none :style="`width:${width || '250px'}`">
    <i v-show="!arrivedState.left" class="translate-y-50%" absolute left-0 i-icon-park-outline:left
      @click="x -= 10"></i>
    <div v-for="tab in tabs" :key="tab" @click="active = tab"
      :class="[{ 'active': active === tab }, 'flex-1 w-min px8px py4px text-center cursor-pointer text-nowrap']">
      {{ tab }}
    </div>
    <i v-show="!arrivedState.right" class="translate-y-50%" absolute right-0 i-icon-park-outline:right
      @click="x += 10"></i>
  </div>
  <div mt16px overflow-y-auto scrollbar-none :style="`height:${height || '200px'}`">
    <slot :name="active">啥也没有</slot>
  </div>
</template>

<style scoped lang='scss'>
.active {
  border-bottom: 2px solid #333;
}
</style>