import { ExtractPropTypes, PropType } from 'vue'
 //  纵向 横向 排列方式
export type SpaceDirection ='vertical' | 'horizontal';

// 横向元素位置设置
export type SpaceAlign ='start' | 'end' | 'center' | 'baseline';

export type SpaceJustify ='start' | 'end' | 'center' | 'baseline' | 'space-around' | 'space-between';


// 规格大小设置
export type SpaceSize = 'mini' | 'small' | 'medium' | 'large'

// space中的props定义
export const spaceProps = {
   
    direction: {
        type: String as PropType<SpaceDirection>,
        default: 'horizontal'
      },
      justify: {
        type: String as PropType<SpaceJustify>
      },
      align: {
        type: String as PropType<SpaceAlign>
      },
      size: {
        type: [Number, String] as PropType<number | SpaceSize | string>,
        default: 'small'
      },
      wrap: {
        type: Boolean
      },
      fill: {
        type: Boolean
      }
} 

