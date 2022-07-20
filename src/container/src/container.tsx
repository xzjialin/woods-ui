import { defineComponent,VNode,computed,Component } from "vue";
import { containerProps, ContainerProps } from './type';
import '../style/container.scss'

export default defineComponent({
    name: 'SContainer',
    props: containerProps,
    setup (props: ContainerProps, {slots}) {
        return ()=>{
            const defaultSlot: VNode[] = slots.default?.()
            const className = computed(() => {
                if (props.direction) {
                  return  `s-container.is-${props.direction}`
                } else {
                  return defaultSlot.some(item => {
                    let tag = (item.type as Component).name
                    return tag === 'SHeader' || tag === 'SFooter'
                  }) ? 'is-vertical' : 'is-horizontal'  
                }
              }) 
              return <section class={[`s-container`, className.value]}>{defaultSlot}</section>
        }
    }
})
