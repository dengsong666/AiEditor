<script setup lang="ts">
import { EditorContent, BubbleMenu } from '@tiptap/vue-3'
import { useAiEditor } from "@/hooks/editor"
const editor = useAiEditor()
</script>
<template>
  <Toolbar :tools="['code', 'bold', 'head', 'help-fold', 'about-fold', 'bold-fold']" />
  <!-- <bubble-menu v-if="editor" :editor="editor" :tippy-options="{ duration: 200 }">
    <Toolbar />
  </bubble-menu> -->
  <editor-content :editor="editor" />
</template>
<style lang="scss">
.tiptap {
  padding: 8px;

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