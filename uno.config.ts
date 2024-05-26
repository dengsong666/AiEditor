// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetScrollbar(),
    presetIcons({
      extraProperties: {
        display: 'block',
      },
      collections: {
        park: () => import('@iconify-json/icon-park-outline/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        ant: () => import('@iconify-json/ant-design/icons.json').then(i => i.default),
      }
    })
  ],
  transformers: [transformerDirectives()],
})