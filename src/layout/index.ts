import { App } from 'vue'
import Srow from './src/row'
import Scol from './src/col'

// 具名导出
export  {Srow,Scol}
// 导出插件
export default {
    install(app:App) {
        app.component(Srow.name,Srow);
        app.component(Scol.name,Scol)
    }
}