import { App } from 'vue'
import Space from './src/space'

// 具名导出
export  {Space}
// 导出插件
export default {
    install(app:App) {
        app.component(Space.name,Space)
    }
}