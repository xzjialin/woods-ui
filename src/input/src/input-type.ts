import { ExtractPropTypes, PropType } from 'vue'



export type inputSize = 'mini' | 'small' | 'medium' | 'large'

// space中的props定义
export const inputProps = {
    disabled: {  // 是否禁用
        type: Boolean as PropType<boolean>,
        default: false
      },
      size: { // 定义输入框大小
        type: String as PropType<inputSize>,
        default: 'small'
      },
      placeholder: {  //用户输入的提示内容
        type: String as PropType<string>,
        default: '请输入内容'
      },
   
} 

