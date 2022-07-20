import { defineComponent, computed } from 'vue';

import {footerProps} from './type'
import '../style/footer.scss';
export default defineComponent({
  name: 'SFooter',
  props: footerProps,
  setup (props, ctx) {
 
    const style = computed(() => {
      return {height: props.height}
    })
    return () => {
      return <footer class={'s-footer'} style={style.value}>{ctx.slots.default?.()}</footer>
    };
  },
});