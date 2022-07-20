import { defineComponent, computed ,CSSProperties,provide} from 'vue';
import { rowProps, RowProps, rowInjectionKey } from './type'
import '../style/row.scss';
export default defineComponent({
  name: 'SRow',
  props: rowProps,
  setup (props:RowProps, { slots }) {
    
 
    const prefixCls = 's-row';
    const classes = computed(() => [
        prefixCls,
        props.justify !== 'start' && `s-row-justify-${props.justify}`, 
        props.align !== 'top' && `s-row-align-${props.align}`
    ])
    const style = computed(() => {
        const styles: CSSProperties = {}
        if (!props.gutter) return styles
        styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
        return styles
      })
      const gutter = computed(() => props.gutter)

      provide(rowInjectionKey, {
        gutter
      })
    return () => {
        return <props.tag class={classes.value} style={style.value}> {slots.default?.()}</props.tag>
      };
  },
});
