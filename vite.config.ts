import { defineConfig } from 'vite'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(), UnoCSS(),
    AutoImport({
      imports: ['vue', 'pinia', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts'
    }),
    Components({
      dts: 'types/components.d.ts'
    }),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
})