import { defineComponent, computed ,CSSProperties,inject} from 'vue';
import { colProps, ColProps,rowInjectionKey } from './type'
import '../style/col.scss';
import {isNumber} from '../../_utils/is'
export default defineComponent({
  name: 'SCol',
  props: colProps,
  setup (props:ColProps, { slots }) {
    
 
    const prefixCls = 's-col';
    const { gutter } = inject(rowInjectionKey, {gutter: computed(() => 0)})
    const classObject = computed(() => {
        // offset 栅格左侧的间隔格数
        // pull 栅格向左移动格数
        // push 栅格向右移动格数
        const pos = ['offset', 'pull', 'push'] as const
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
        const classes: Record<string, boolean>[] = [
            {
              [props.span ? `${prefixCls}-${props.span}` : '']: true
            }
          ]
        //   给class 添加间隔个数 生成例子：'s-row-offset-1'
          pos.forEach((prop) => {
            const size = props[prop]
            if (isNumber(size)) {
              if (size > 0) {
                classes.push({
                  [props[prop] ? `${prefixCls}-${prop}-${size}` : '']: true,
                })
              }
            }
          })
          sizes.forEach((prop) => {
            const size = props[prop]
            if (isNumber(size)) {
              classes.push({[`${prefixCls}-${prop}-${size}`]: true})
            }
          })
    
          // this is for the fix
          if (gutter.value) {
            classes.push({'is-guttered': true})
           
          }

          return classes
    })
    const style = computed(() => {
        console.log('打印一下')
        console.log(gutter.value)
        const styles: CSSProperties = {}
        if (!gutter.value) return styles
        styles.paddingLeft = styles.paddingRight  = `${gutter.value/2}px`
        return styles
      })
    return () => {
        return <props.tag class={classObject.value} style={style.value}> {slots.default?.()}</props.tag>
      };
  },
});
