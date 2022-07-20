import type {ExtractPropTypes, InjectionKey, ComputedRef, PropType} from 'vue'
export const RowJustify = [
  'start',
  'center',
  'end',
  'space-around',
  'space-between',
  'space-evenly',
] as const
export type ColSizeObject = {
  span?: number
  offset?: number
  pull?: number
  push?: number
}
export const RowAlign = ['top', 'middle', 'bottom'] as const
export type ColSize = number | ColSizeObject
export const definePropType = <T>(val: any): PropType<T> => val
export const colProps = {
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  tag: {
    type: String,
    default: 'div',
  },
  xs: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({}),
  },
  sm: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({}),
  },
  md: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({}),
  },
  lg: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({}),
  },
  xl: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({}),
  },
}
export const rowProps = {
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: RowJustify,
    default: 'start'
  },
  align: {
    type: String,
    values: RowAlign,
    default: 'top',
  },
  tag: {
    type: String,
    default: 'div',
  }
}
interface RowContext {
  gutter: ComputedRef<number>
}
export const rowInjectionKey:InjectionKey<RowContext> =  Symbol('rowContextKey')

export type ColProps = ExtractPropTypes<typeof colProps>
export type RowProps = ExtractPropTypes<typeof rowProps>