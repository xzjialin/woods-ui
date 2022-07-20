import Theme from 'vitepress/theme'
// import Test from '../../../src/components/Test'
// import Tree from '../../../src/tree'
// import Button from '../../../src/button'
// import Container from '../../../src/container/index'
// import Icon from '../../../src/icon'
import { AlignCenterIcon,EditIcon,ShareAltIcon,LoadingIcon,DeleteIcon } from '../../../src/icon/icons/index'


import SUI from '../../../src/vue-devui';

import type {App} from 'vue'
import './demo-block.scss'
import './custom.css';
import 'vitepress-theme-demoblock/theme/styles/index.css'

import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'


export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}:{app:App<never>}) {
    // 注册组件
    // app.component('Test',Test)
    app.use(SUI)
    // app.use(Tree)
    // app.use(Button)
    app.use(AlignCenterIcon)
    app.use(EditIcon)
    app.use(ShareAltIcon)
    app.use(LoadingIcon)
    app.use(DeleteIcon)
    // app.use(Container)
    // app.use(Header)
    // app.use(Icon)
    
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
