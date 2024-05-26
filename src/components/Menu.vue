<script lang='ts' setup>
import { BubbleMenu } from '@tiptap/vue-3';
import { useAiEditor } from "@/hooks/editor"
const editor = useAiEditor()
</script>

<template>
  <bubble-menu v-if="editor" :editor="editor" :tippy-options="{ duration: 0 }">
    <!-- <Toolbar :tools="['bold']" /> -->
    <!-- <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
      bold
    </button> -->
  </bubble-menu>
</template>

<style scoped lang='scss'></style>