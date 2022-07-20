import { getComponentCls } from '../../../_utils/global-config'
import { isNumber } from '../../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const FaceFrownFillIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-face-frown-fill`

  if (props.spin) classes += ` ${prefixCls}-spin`

  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class={classes} stroke-width={strokeWidth} style={sizeStyle} stroke-linecap={strokeLinecap} stroke-linejoin={strokeLinejoin}><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.322-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM31.68 32.88a1.91 1.91 0 0 1-2.694-.176 6.66 6.66 0 0 0-5.026-2.28c-1.918 0-3.701.81-4.962 2.207a1.91 1.91 0 0 1-2.834-2.559 10.476 10.476 0 0 1 7.796-3.465c3.063 0 5.916 1.321 7.896 3.58a1.909 1.909 0 0 1-.176 2.693Z" fill="currentColor" stroke="none"/></svg>
  )
}