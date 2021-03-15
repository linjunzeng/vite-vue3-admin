import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import installElement from '@/plugins/element-plus';

const app = createApp(App)

installElement(app)

app.use(router)
app.mount('#app')
