interface Option {
  value: string | number
  label?: string | number | VNode
  icon?: string | VNode
}

interface SelectOption extends Option {
  children?: Option[];
  [x: string]: any;
}
interface MenuItem extends Option {
  shortcut?: string
  markdown?: string
  active?: string[]
  handler?: () => any
}
type Pos = 'top' | 'bottom' | 'left' | 'right'