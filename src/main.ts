import { createApp } from "vue";
import App from "./App.vue";
import Button from './button'
import Tree from './tree'
import './index.scss'

createApp(App).use(Button).use(Tree).mount("#app");
