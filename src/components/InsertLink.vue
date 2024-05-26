<script lang='ts' setup>
defineProps<{ icon?: string }>()
const emit = defineEmits(['insert'])
const href = ref('')
</script>

<template>
  <Popover>
    <template #trigger>
      <i i-icon-park-outline:link-one></i>
    </template>
    <div flex justify-between items-center mt8px>
      <span mr8px text-nowrap>链接</span>
      <input type="url" v-model="href" />
      <button @click="emit('insert', href)" ml-8px type="button">确定</button>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>