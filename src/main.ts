import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import installElement from './plugins/element-plus';
import './assets/styles/base.css'

const app = createApp(App)

installElement(app)

app.use(store)
app.use(router)
app.mount('#app')
