import { getComponentCls } from '../../../_utils/global-config'
import { isNumber } from '../../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const MoreIcon = (props: IconProps) => {
  const {
    strokeWidth = 4,
    strokeLinecap = 'butt',
    strokeLinejoin = 'miter'
  } = props
  if (['butt', 'round', 'square'].indexOf(strokeLinecap) === -1) {
    console.warn(
      `Invalid prop: type check failed for prop strokeLinecap. 
      Expected strokeLinecap with value butt | round | square, got with value ${strokeLinecap}`
    )
  }
  if (
    ['arcs', 'bevel', 'miter', 'miter-clip', 'round'].indexOf(
      strokeLinejoin
    ) === -1
  ) {
    console.warn(
      `Invalid prop: type check failed for prop strokeLinejoin. 
      Expected strokeLinecap with value butt | round | square, got with value ${strokeLinejoin}`
    )
  }

  const prefixCls = getComponentCls('icon')
  const sizeStyle = props.size
    ? isNumber(props.size)
      ? `${props.size}px`
      : props.size
    : undefined
  let classes = `${prefixCls} ${prefixCls}-more`

  if (props.spin) classes += ` ${prefixCls}-spin`

  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class={classes} stroke-width={strokeWidth} style={sizeStyle} stroke-linecap={strokeLinecap} stroke-linejoin={strokeLinejoin}><path d="M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" fill="currentColor" stroke="none"/><path d="M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"/></svg>
  )
}