import { createApp } from 'vue'
import App from './App.vue'
import { Button, Input, message } from 'ant-design-vue'
import { Message } from 'ant-design-vue/types/message'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /**
     * 全局展示操作反馈信息
     */
    $message: Message
  }
}

declare module 'vue-class-component' {
  interface ClassComponentHooks {
    /**
     * 用于存储data
     */
    state: Record<string, any>
  }
}

message.config({
  duration: 2,
  top: '100px',
  maxCount: 3
})

const appInstance = createApp(App)
appInstance.config.globalProperties.$message = message
appInstance.use(Button)
appInstance.use(Input)
appInstance.mount('#app')
