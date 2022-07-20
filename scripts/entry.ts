//  入口文件
// 1. 引入组件文件 实现批量导出
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'

const installs = [ButtonPlugin]
// 导出这些组件
export default {
    // 暴露 install 方法 里边遍历组件列表 循环 用app.use() 方法来寻找 组件中定义的install 方法实现全量导出
    install( app: App ) {
        installs.forEach(p=> app.use(p))

    }
}
