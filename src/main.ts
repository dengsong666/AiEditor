import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import 'virtual:uno.css'
import App from './App.vue'
const app = createApp(App)
app.use(createPinia()).mount('#app')
