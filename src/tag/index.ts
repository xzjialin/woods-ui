import { App } from 'vue'
import Stag from './src/tag'

// 具名导出
export  {Stag}
// 导出插件
export default {
    install(app:App) {
        app.component(Stag.name,Stag)
    }
}