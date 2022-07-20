import { ExtractPropTypes, PropType } from 'vue'

// button中的props定义
export const iconProps = {

    color: {
        type: String,
        default: ''
      },
      size: {
        type: [Number, String],
        default: ''
      }
  
}

// 利用值反推出Button属性类型
export type IconProps = ExtractPropTypes<typeof iconProps>
