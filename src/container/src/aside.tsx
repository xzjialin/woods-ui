import { computed, defineComponent } from 'vue';
import { asidedProps } from './type'
import '../style/aside.scss';
export default defineComponent({
  name: 'SAside',
  props: asidedProps,
  setup (props, ctx) {

    const style = computed(() => {
      return {width: props.width}
    })

    return () => {
      return <aside class={'s-aside'} style={style.value}>{ctx.slots.default?.()}</aside>
    };
  },
});