import { defineComponent, toRefs, computed } from "vue";
import { IconProps, iconProps } from './icon-type'
import '../style/icon.scss';
import { isUndefined, addUnit } from '../../_utils/is'

export default  defineComponent({
    name:'SIcon',
    props:iconProps,
    setup(props:IconProps,{ slots }) {
        const style = computed(() => ({
            // addUnit方法判断 用户填入的值是否是 数字类型 和字符串类型 并拼接 px 放回
            fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
            '--color': props.color,
          }))
        return ()=>{
            const defaultSlot = slots.default ? slots.default() : '' // 获取插槽的值 并判断用户是否传入插槽的内容 如果没有则默认为按钮
            return <button 
            class={`s-icon`} style={style.value}>{defaultSlot}</button>
        }
    }
})