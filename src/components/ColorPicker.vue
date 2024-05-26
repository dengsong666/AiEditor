<script lang='ts' setup>
defineProps<{ icon?: string }>()
const emit = defineEmits(['pick'])
const colors = [
  "#808080", "#E26A6A", "#FF884D", "#E2C30F", "#50C878", "#4A90E2", "#F897C5", "#A67BCE",
  "#999999", "#F27B7B", "#FF9966", "#F2D13A", "#65D18E", "#5F9DEA", "#FAABD6", "#B98EE2",
  "#B2B2B2", "#FF8C8C", "#FFAA80", "#FBE065", "#7AD8A4", "#73A9F2", "#FCC5E4", "#CC9FF8",
  "#CCCCCC", "#FF9D9D", "#FFBB99", "#FFEE9F", "#8FE0BA", "#87B3FA", "#FEDCF2", "#DEB0FF"
];
// const colors = [
//   "#0000", "#f002", "#FF884D", "#E2C30F", "#50C878", "#4A90E2", "#F897C5", "#A67BCE",
//   "#0003", "#f005", "#FF9966", "#F2D13A", "#65D18E", "#5F9DEA", "#FAABD6", "#B98EE2",
//   "#0007", "#f007", "#FFAA80", "#FBE065", "#7AD8A4", "#73A9F2", "#FCC5E4", "#CC9FF8",
//   "#000a", "#f00a", "#FFBB99", "#FFEE9F", "#8FE0BA", "#87B3FA", "#FEDCF2", "#DEB0FF",
//   "#000f", "#f00f", "#FFBB99", "#FFEE9F", "#8FE0BA", "#87B3FA", "#FEDCF2", "#DEB0FF",
// ];
const current = ref('')
const recently = ref<string[]>(JSON.parse(localStorage.getItem('recently-colors') || '[]'))
watch(current, (color) => {
  emit('pick', color)
  recently.value.unshift(color)
  recently.value = Array.from(new Set(recently.value))
  recently.value.length > 8 && recently.value.pop()
  localStorage.setItem('recently-colors', JSON.stringify(recently.value))
})
</script>

<template>
  <Popover>
    <template #trigger>
      <i :style="`color:${current};`" :class="[icon ?? 'i-icon-park-outline:background-color']"></i>
    </template>
    <template v-for="item in [{ title: '颜色', colors }, { title: '最近使用', colors: recently }]">
      <h6 mb8px mt0> {{ item.title }}
        <input v-if="item.title === '颜色'" w24px h18px border-none p0 type="color"
          @change="(e: any) => current = e.target.value" />
      </h6>
      <div grid grid-cols-8 gap-4px w-max mb8px>
        <div v-for="color in item.colors" :key="color" :style="`background-color:${color};`" w24px h24px cursor-pointer
          @click="current = color">
        </div>
      </div>
    </template>
  </Popover>
</template>

<style scoped lang='scss'></style>