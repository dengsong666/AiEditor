<script lang='ts' setup>
import { setFontFamily, setFontSize, setHead, setLineHeight, setTextAlign } from '@/core/command';
import { align, basics, code, file, fontfamily, fontsize, head, lineheight, list, more, table, text } from '@/core/menu';
const menus = [...list, ...code, ...text, ...table, ...file, ...more] as MenuItem[]
const selects = [
  { options: head, value: 0, handler: setHead },
  { options: align, value: 'left', handler: setTextAlign },
  { options: fontsize, icon: 'i-ant-design:font-size-outlined', value: '16px', handler: setFontSize },
  { options: fontfamily, icon: 'i-mdi:format-font', value: 'Microsoft YaHei', handler: setFontFamily },
  { options: lineheight, icon: 'i-mdi:format-line-height', value: '1.2em', handler: setLineHeight },
]
</script>

<template>
  <div flex rd-4px class="bg-#fff" border="1px solid #eee">
    <Popover :close="false" :model-value="true" p6px padding="0">
      <template #trigger>
        <i i-icon-park-outline:application-menu></i>
      </template>
      <div grid grid-cols-8 w-max>
        <MenuItem v-for="menu in menus" :menu="menu" />
      </div>
    </Popover>
    <MenuItem v-for="menu in basics" :menu="menu" />
    <Select v-for="({ options, icon, value, handler }) in selects" :options="options" @select="handler" :icon="icon"
      :default-value="value">
      <template #default="{ op }">
        <MenuItem :menu="op" show-label />
      </template>
    </Select>
  </div>
</template>

<style scoped lang='scss'></style>