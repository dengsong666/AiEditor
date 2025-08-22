<script lang='ts' setup>
import { isVNode } from "vue";

defineProps<{ menu: MenuItem, showLabel?: boolean }>()
const tips = ({ label = '', shortcut = '', markdown = '' }: any) => `${label} ${markdown} ${shortcut}`
</script>

<template>
  <Tooltip flex :text="tips(menu)">
    <div flex items-center p6px @click="menu?.handler && menu.handler()">
      <component v-if="isVNode(menu.icon)" :is="menu.icon" />
      <i v-else-if="menu.icon" :class="menu.icon"></i>
      <span v-if="showLabel" ml8px text-nowrap>{{ menu.label }}</span>
    </div>
  </Tooltip>
</template>

<style scoped lang='scss'></style>