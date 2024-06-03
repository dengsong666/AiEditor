import { focus } from "@/hooks/editor"

// 图片对象接口
interface Figure {
  src: string; // 图片地址
  alt: string; // 图片替代文本
  title: string; // 图片标题
  caption: string // 图片说明
}

/**
 * 插入表情内容
 * @param emoji 要插入的表情内容
 */
export const insertContent = (emoji: any) => focus.value?.insertContent(emoji).run()

/**
 * 插入表格
 * @param [rows, cols] 表格的行和列数
 */
export const insertTable = ([rows, cols]: [number, number]) => focus.value?.insertTable({ rows, cols, withHeaderRow: true }).run()

/**
 * 执行撤销操作
 */
export const undo = () => focus.value?.undo().run()

/**
 * 执行重做操作
 */
export const redo = () => focus.value?.redo().run()

/**
 * 设置标题层级
 * @param level 标题的层级，如果level为null或undefined，则转换为段落
 */
export const setHead = (level: any) => level ? focus.value?.toggleHeading({ level }).run() : focus.value?.setParagraph().run()

/**
 * 设置字体大小
 * @param size 字体大小
 */
export const setFontSize = (size: string) => focus.value?.setFontSize(size).run()

/**
 * 设置字体样式
 * @param font 字体样式
 */
export const setFontFamily = (font: string) => focus.value?.setFontFamily(font).run()

/**
 * 设置行高
 * @param lh 行高值
 */
export const setLineHeight = (lh: string) => focus.value?.setLineHeight(lh).run()

/**
 * 插入硬换行
 */
export const setHardBreak = () => focus.value?.setHardBreak().run()

/**
 * 插入水平线
 */
export const setHorizontalRule = () => focus.value?.setHorizontalRule().run()

/**
 * 插入图片
 * @param figure 图片对象
 */
export const setFigure = ({ src, alt, title, caption }: Figure) => focus.value?.setFigure({ src, alt, title, caption }).run()

/**
 * 设置文字颜色
 * @param color 文字颜色
 */
export const setColor = (color: string) => focus.value?.setColor(color).run()

/**
 * 设置文本对齐方式
 * @param align 对齐方式
 */
export const setTextAlign = (align: string) => focus.value?.setTextAlign(align).run()

/**
 * 切换加粗状态
 */
export const toggleBold = () => focus.value?.toggleBold().run()

/**
 * 切换斜体状态
 */
export const toggleItalic = () => focus.value?.toggleItalic().run()

/**
 * 切换下划线状态
 */
export const toggleUnderline = () => focus.value?.toggleUnderline().run()

/**
 * 切换删除线状态
 */
export const toggleStrike = () => focus.value?.toggleStrike().run()

/**
 * 切换代码样式
 */
export const toggleCode = () => focus.value?.toggleCode().run()

/**
 * 切换代码块
 */
export const toggleCodeBlock = () => focus.value?.toggleCodeBlock().run()

/**
 * 切换无序列表状态
 */
export const toggleBulletList = () => focus.value?.toggleBulletList().run()

/**
 * 切换有序列表状态
 */
export const toggleOrderedList = () => focus.value?.toggleOrderedList().run()

/**
 * 切换任务列表状态
 */
export const toggleTaskList = () => focus.value?.toggleTaskList().run()

/**
 * 切换引用区块状态
 */
export const toggleBlockquote = () => focus.value?.toggleBlockquote().run()

/**
 * 切换上标状态
 */
export const toggleSuperscript = () => focus.value?.toggleSuperscript().run()

/**
 * 切换下标状态
 */
export const toggleSubscript = () => focus.value?.toggleSubscript().run()

/**
 * 切换链接
 * @param href 链接地址
 */
export const toggleLink = (href: string) => focus.value?.toggleLink({ href }).run()

/**
 * 切换高亮
 * @param color 高亮颜色
 */
export const toggleHighlight = (color: string) => focus.value?.toggleHighlight({ color }).run()