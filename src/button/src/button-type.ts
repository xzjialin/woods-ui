import { ExtractPropTypes, PropType } from 'vue'
// 按钮类型
export type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
// 按钮大小
export type IButtonSize = '' | 'default' | 'small' | 'large';
export type IButtonNativeType = 'button' | 'submit' | 'reset'

// button中的props定义
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'default'
  },
  disabled: {
    type:Boolean,
    default:false
  },
  block: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default:false
  },
  pain: {
    type: Boolean,
    default:false
  }
}

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
