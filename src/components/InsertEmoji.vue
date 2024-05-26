<script lang='ts' setup>
import emoji from "@/assets/emoji.json"
defineProps<{ icon?: string }>()
const emit = defineEmits(['insert'])
// const emoji = 
</script>

<template>
  <Popover>
    <template #trigger>
      <i i-icon-park-outline:smiling-face></i>
    </template>
    <Tabs :tabs="Object.keys(emoji)" width="242px">
      <template v-for="(tab, key) in emoji" v-slot:[key] :key="key">
        <span v-for="(v, k) in tab" :key="k" :title="v" inline-block w20px @click="emit('insert', k)">{{ k }}</span>
      </template>
    </Tabs>
  </Popover>
</template>

<style scoped lang='scss'></style>