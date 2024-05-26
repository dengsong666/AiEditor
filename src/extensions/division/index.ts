import HardBreak from '@tiptap/extension-hard-break'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import { Extension } from '@tiptap/vue-3'
import './style.scss'
/**
 * 快捷键 Shift Enter Control Enter
 */
const HardBreakExt = HardBreak.extend({})
/**
 * markdown --- ___  
 */
const HorizontalRuleExt = HorizontalRule.extend({})

export const Division = Extension.create({
  name: 'division',
  addExtensions: () => [HardBreakExt, HorizontalRuleExt]
})