import { defineComponent, toRefs, CSSProperties, computed } from "vue";
import { tagProps } from './tag-type'
import '../style/tag.scss';
import '../style/transition.scss';
import { isNumber } from '../../_utils/is'
import { getAllElements } from '../../_utils/vue-utils'

export default defineComponent({
    name: 'STag',
    props: tagProps,
    setup(props, { slots }) {
        const prefixCls = 's-tag';

    
        return () => {
            const defaultSlot = slots.default ? slots.default() : '标签'
            return (
               <div  class={`${prefixCls} ${prefixCls}--${props.color}` }>
                   <span class={ `s-tag--desc`}>
                   {defaultSlot}
                   </span>

                   
    
    </div>
            )





        }
    }
})