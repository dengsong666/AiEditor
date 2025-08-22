

import Mention from '@tiptap/extension-mention'
import { Block, Code, Cursor, Division, File, Head, List, Mark, Menu, Table } from "@/extensions"
import { Editor, useEditor } from "@tiptap/vue-3"
export let editor = shallowRef<Editor | undefined>(undefined)
export const focus = computed(() => editor.value?.chain().focus())
export const words = computed(() => editor.value?.storage.characterCount.characters())
export function useAiEditor(editable = true) {
  editor = useEditor({
    editable,
    content: localStorage.getItem('editor-content'),
    extensions: [
      Block, Code, Cursor, Division, File, Head, List, Mark, Menu, Table,
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion: {

        }
      }),
    ],
    onUpdate({ editor }) {
      const content = editor.getText()
      console.log(content);
      localStorage.setItem('editor-content', content)
    },
  })
  onBeforeUnmount(() => editor.value?.destroy())
  return editor
}