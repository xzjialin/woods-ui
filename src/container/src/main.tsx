import { defineComponent } from 'vue';

import '../style/main.scss';
export default defineComponent({
  name: 'SMain',
  props: [],
  setup (props, ctx) {
    return () => {
      return <main class={'s-main'}>{ctx.slots.default?.()}</main>
    };
  },
});
