import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/static/css/style.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './registerServiceWorker'

const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')