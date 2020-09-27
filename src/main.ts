import { createApp } from 'vue'
import App from './App.vue'
import { Button, Input } from 'ant-design-vue'

const appInstance = createApp(App)
appInstance.use(Button)
appInstance.use(Input)
appInstance.mount('#app')
