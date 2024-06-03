<script lang='ts' setup>
withDefaults(defineProps<{ options: Option[], icon?: string, showArrow?: boolean }>(), { showArrow: true })
const emit = defineEmits(['select'])
const current = defineModel<Option>()
const refPopover = ref()
</script>

<template>
  <Popover ref="refPopover" padding="8px" :close="false">
    <template #trigger>
      <div flex>
        <i :class="icon ?? current?.icon"></i>
        <i v-if="showArrow" i-icon-park-outline:down transition-all :class="{ 'rotate-180': refPopover?.show }"></i>
      </div>
    </template>
    <div flex flex-col scrollbar-none>
      <div v-for="op in options" :key="op.value" @click.stop="current = op, emit('select', op.value)" flex
        justify-between px20px py6px hover:bg-gray-100>
        <div flex items-center>
          <slot :op="op">
            <i v-if="op.icon" :class="op.icon"></i>
            <span ml8px text-nowrap>{{ op.label }}</span>
          </slot>
        </div>
        <Select v-if="op?.children" :options="op.children" place="right" icon="i-icon-park-outline:right"
          :show-arrow="false" @select="op.handler">
        </Select>
        <i v-else ml24px i-icon-park-outline:check
          :style="`visibility: ${current?.value == op.value ? 'visible' : 'hidden'}`">
        </i>
      </div>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>