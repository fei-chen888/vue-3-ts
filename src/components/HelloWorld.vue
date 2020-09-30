<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="msg in state.list" :key="msg.id">
      <p>{{ msg.content || '-' }}</p>
    </div>
    <a-input v-model:value="state.input" type="input" style="width: 200px" />
    <a-button type="primary"  @click="sendMessage">确定</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

/**
 * 组件状态
 */
interface State {
  input: string
  list: Message[]
}

export interface Message {
  id: number
  content: string
}

@Options({
  /**
   * 注册组件
   */
  components: {
  },
  /**
   * 组件属性
   */
  props: {
    msg: String
  },
  watch: {
    'state.list' (v) {
      console.log(v)
    }
  }
})
export default class HelloWorld extends Vue {
  /**
   * 定义组件的属性，设置默认值
   */
  readonly msg = 'Hello World!'

  state: State = {
    input: '',
    list: []
  }

  /**
   * 发送信息
   */
  sendMessage () {
    const { list, input } = this.state
    list.push({
      id: new Date().getTime(),
      content: input
    })
    this.$emit('update', [...list])
  }
}
</script>

<style scoped lang="less">
.hello {
  color: green;
}
</style>
