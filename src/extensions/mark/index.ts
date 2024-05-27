import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Underline from "@tiptap/extension-underline"
import Highlight from '@tiptap/extension-highlight'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import FontSizeExt from './fontSize'
import LineHeightExt from './lineHeight'
import { Color } from '@tiptap/extension-color'
import { Extension } from '@tiptap/vue-3'
import './style.scss'
const TextExt = Text.extend({})
const TextStyleExt = TextStyle.extend({ addExtensions: () => [FontSizeExt, LineHeightExt] })
const FontFamilyExt = FontFamily.extend({})
const TextAlignExt = TextAlign.configure({ types: ['paragraph', 'heading'] })

const ColorExt = Color.extend({})
/**
 * markdown **xx** __xx__
 * 默认快捷键 Control B
 */
const BoldExt = Bold.extend({})
/**
 * markdown *xx* _xx_
 * 默认快捷键 Control I
 */
const ItalicExt = Italic.extend({})
/**
 * markdown ~~xx~~
 * 默认快捷键 Control Shift S
 */
const StrikeExt = Strike.extend({})
/**
 * 默认快捷键 Control U
 */
const UnderlineExt = Underline.extend({})
/**
 * markdown ==xx==
 * 默认快捷键 Control Shift H
 */
const HighlightExt = Highlight.extend({}).configure({ multicolor: true })
/**
 * markdown ^xx^
 * 默认快捷键 Control .
 */
const SuperscriptExt = Superscript.extend({})
/**
 * markdown ,xx,
 * 默认快捷键 Control ,
 */
const SubscriptExt = Subscript.extend({})
const LinkExt = Link.configure({
  linkOnPaste: false
})


export const Mark = Extension.create({
  name: 'mark',
  addExtensions: () => [TextExt, TextAlignExt, TextStyleExt, FontFamilyExt, ColorExt, BoldExt, ItalicExt, StrikeExt, UnderlineExt, HighlightExt, SuperscriptExt, SubscriptExt, LinkExt]
})
