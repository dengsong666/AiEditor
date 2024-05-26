

import Mention from '@tiptap/extension-mention'
import { Block, Browser, Code, Cursor, Division, File, Head, List, Mark, Menu, Table } from "@/extensions"
import { Editor, useEditor } from "@tiptap/vue-3"
export let editor = shallowRef<Editor | undefined>(undefined)
export const focus = computed(() => editor.value?.chain().focus())
export function useAiEditor() {
  editor = useEditor({
    content: `苏利的快感胡一刀<br/> 山东化工 <br/>
    的发挥  的发挥
    都会发生的<br/>
    
    for (var i=1; i <= 20; i++)
      {
        if (i % 15 == 0)
          console.log("FizzBuzz");
        else if (i % 3 == 0)
          console.log("Fizz");
        else if (i % 5 == 0)
          console.log("Buzz");
        else
          console.log(i);
      }`,
    extensions: [
      Block, Browser, Code, Cursor, Division, File, Head, List, Mark, Menu, Table,
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion: {

        }
      }),
    ],
  })
  onBeforeUnmount(() => editor.value?.destroy())
  return editor
}