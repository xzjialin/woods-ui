import { App } from 'vue'
import SMore from './src/showMore'

// 具名导出
export  {SMore}
// 导出插件
export default {
    install(app:App) {
        app.component(SMore.name,SMore)
    }
}