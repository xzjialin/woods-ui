import { App } from 'vue'
import Sinput from './src/input'

// 具名导出
export  {Sinput}
// 导出插件
export default {
    install(app:App) {
        app.component(Sinput.name,Sinput)
    }
}