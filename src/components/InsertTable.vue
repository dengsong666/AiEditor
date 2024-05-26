<script lang='ts' setup>
defineProps<{ icon?: string }>()
const emit = defineEmits(['insert'])
const insert = reactive({
  row: 1,
  col: 1,
})
</script>

<template>
  <Popover>
    <template #trigger>
      <i i-icon-park-outline:insert-table></i>
    </template>
    <div flex justify-between items-center mb8px>
      <h6 my0>插入表格</h6>
      <span>{{ insert.row }}行{{ insert.col }}列</span>
    </div>
    <div grid grid-cols-10 gap-4px w-max>
      <template v-for="i in 10" :key="i">
        <div v-for="j in 10" :key="j" w24px h24px cursor-pointer border="1px solid #ccc" @click="emit('insert', [i, j])"
          :class="{ 'bg-gray-200': i <= insert.row && j <= insert.col }" @mouseover="insert.row = i, insert.col = j">
        </div>
      </template>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>