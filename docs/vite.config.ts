import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
  // server: {
  //   host:'0.0.0.0',
  //   port:80,
  //   open:true
  // }
})