import { ExtractPropTypes, PropType } from 'vue'




// 规格大小设置
export type SpaceSize = 'mini' | 'small' | 'medium' | 'large'

// space中的props定义
export const showMoreProps = {
    len: {  // 定义显示文字个数
        type: Number,
        default: -1
      },
    color: {
        type: String,
        default: 'primary'
      },
      text: {  // 需要显示的内容
        type: String,
        default: ''
      },
      showText: {  // 定义折叠的文字
        type: String,
        default: '显示更多'
      },
      hiddenText: { // 定义收起的文字
        type: String,
        default: '收起'
      },
      allowFold: Boolean
} 

