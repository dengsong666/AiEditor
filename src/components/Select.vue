<script lang='ts' setup>
const props = defineProps<{ options: SelectOption[], icon?: string, defaultValue?: any }>()
const emit = defineEmits(['select'])
const current = defineModel<SelectOption>()
const showPopover = ref(false)
watchEffect(() => current.value = props.options.find(op => op.value == props.defaultValue))
</script>

<template>
  <Popover padding="8px" :close="false" v-model="showPopover">
    <template #trigger>
      <div flex p6px>
        <i :class="icon ?? current?.icon"></i>
        <i i-icon-park-outline:down transition-all :class="{ 'rotate-180': showPopover }"></i>
      </div>
    </template>
    <div flex flex-col scrollbar-none>
      <div v-for="op in options" :key="op.value" flex items-center justify-between py4px hover:bg-gray-100
        @click.stop="current = op, emit('select', op.value)">
        <div flex items-center>
          <slot :op="op">
            <i v-if="op.icon" :class="op.icon"></i>
            <span ml8px text-nowrap>{{ op.label }}</span>
          </slot>
        </div>
        <i ml24px i-icon-park-outline:check :style="`visibility: ${current?.value == op.value ? 'visible' : 'hidden'}`">
        </i>
      </div>
    </div>
  </Popover>
</template>

<style scoped lang='scss'></style>