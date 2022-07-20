
import type {ExtractPropTypes, ComputedRef, PropType} from 'vue'
export type direction = 'horizontal' | 'vertical'
export const containerProps = {
  direction: {
    type: String as PropType<direction>
  }

}
// 设置 头部高度
export const headerProps = {
    height: {
      type: String
    }
  }

  export const footerProps = {
    height: {
      type: String
    }
  }
  export const asidedProps = {
    width: {
      type: String
    }
  }
export type ContainerProps = ExtractPropTypes<typeof containerProps>
