<script lang='ts' setup>
import { head, align, fontsize, fontfamily, lineheight, basics } from '@/core/menu';
import { setHead, setTextAlign, setFontSize, setFontFamily, setLineHeight } from '@/core/command';
const selects = [
  { options: head, handler: setHead },
  { options: align, handler: setTextAlign },
]

const selects2 = [
  { label: '字体大小', value: 'fontsize', children: fontsize, icon: 'i-ant-design:font-size-outlined', handler: setFontSize },
  { label: '字体', value: 'fontfamily', children: fontfamily, icon: 'i-mdi:format-font', handler: setFontFamily },
  { label: '行高', value: 'lineheight', children: lineheight, icon: 'i-mdi:format-line-height', handler: setLineHeight },
]
</script>

<template>
  <div flex rd-4px class="bg-#fff" border="1px solid #eee">
    <Select :options="selects2" icon="i-icon-park-outline:application-menu"> </Select>
    <Select v-for="({ options, handler }) in selects" :options="options" @select="handler" :model-value="options[0]">
      <template #default="{ op }">
        <Tooltip flex items-center :text="`${op.markdown} ${op.shortcut}`" place="right">
          <i :class="op.icon"></i>
          <span ml8px text-nowrap>{{ op.label }}</span>
        </Tooltip>
      </template>
    </Select>
    <Tooltip v-for="b in basics" :text="`${b.label} ${b.markdown} ${b.shortcut}`" place="top">
      <div p6px><i :class="b.icon" @click="b.handler()"></i></div>
    </Tooltip>
  </div>
</template>

<style scoped lang='scss'></style>