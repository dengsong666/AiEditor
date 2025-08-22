<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import { BubbleMenu, FloatingMenu } from '@tiptap/vue-3/menus'
import { useAiEditor, words } from "@/hooks/editor"
const editor = useAiEditor()
const tippyOptions = { appendTo: document.body, maxWidth: 'unset', duration: 200 }
</script>
<template>
  <bubble-menu v-if="editor" :editor="editor" :tippy-options="tippyOptions">
    <Menu></Menu>
  </bubble-menu>
  <floating-menu v-if="editor" :editor="editor" :tippy-options="tippyOptions">
    <Menu></Menu>
  </floating-menu>
  <div style="min-height: 30vh;padding: 20px;border: 1px solid #eee;margin: 20px;"><editor-content :editor="editor" />
  </div>
  <span float-right>{{ words }}</span>
</template>
<style lang="scss">
.tiptap {
  padding: 8px;
  outline: none;

  >*+* {
    margin-top: 0.75em;
  }

  .mention {
    border: 1px solid #000;
    border-radius: 0.4rem;
    padding: 0.1rem 0.3rem;
    box-decoration-break: clone;
  }

}
</style>