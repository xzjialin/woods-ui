import { defineComponent, ref, CSSProperties, computed } from "vue";
import { inputProps } from './input-type'
import '../style/index.scss'

export default defineComponent({
    name: 'SInput',
    props: inputProps,
    setup(props, { slots }) {
        const prefixCls = 's-input';
        const focused = ref(false)
        const classes = computed(() => [
            prefixCls,
            `${prefixCls}-size-${props.size}`
        ])
        const disabledCls = props.disabled ? `${prefixCls}-disabled`:''
        const wrapperCls = computed(() => [
            `${prefixCls}-wrapper`,
            focused.value && `${prefixCls}-wrapper--focus`,
            disabledCls
            
          ])

     
        return () => {

            return (
                <span class={wrapperCls.value}>
                <input class={classes.value} disabled={props.disabled} placeholder={props.placeholder} />
                   
                </span>
            )
        }
    }
})