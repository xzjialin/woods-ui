import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from './button-type'
import '../style/button.scss';

export default  defineComponent({
    name:'SButton',
    props:buttonProps,
    setup(props:ButtonProps,{ slots }) {
        const { type, size, disabled, block, round ,pain } = toRefs(props)
        return ()=>{
            const defaultSlot = slots.default ? slots.default() : '按钮' // 获取插槽的值 并判断用户是否传入插槽的内容 如果没有则默认为按钮
            const blockClass = block.value ? 's-btn--block' : ''
            const roundClass = round.value ? 's-btn--round' : ''
            const painClass = pain.value ?  `s-btn--${type.value}-pain` : ''
            const disabledClass = disabled.value ? `s-btn--${type.value}-disabled`:''
            return <button disabled={disabled.value} 
            class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass} ${roundClass} ${painClass} ${disabledClass}`  }>{defaultSlot}</button>
        }
    }
})