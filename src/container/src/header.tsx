import { defineComponent, computed } from 'vue';
import {headerProps} from './type'
import '../style/header.scss';
export default defineComponent({
  name: 'SHeader',
  props: headerProps,
  setup (props, ctx) {
    
    const style = computed(() => {
      return {height: props.height}
    })
    return () => {
      return <header class={`s-header`} style={style.value}>{ctx.slots.default?.()}</header>
    };
  },
});