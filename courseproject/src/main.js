import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/static/css/style.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './registerServiceWorker'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'	//样式

const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
app.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})