import { App } from 'vue'
import Container from './src/container'
import Footer from './src/footer';
import Header from './src/header'
import Main from './src/main';
import Aside from './src/aside';
export * from './src/type';
// 具名导出
export  {Container,Header,Main,Footer,Aside}
// 导出插件
export default {
    install(app:App) {
        app.component(Container.name,Container);
        app.component(Header.name,Header);
        app.component(Main.name,Main);
        app.component(Footer.name,Footer);
        app.component(Aside.name,Aside);
    }
}



