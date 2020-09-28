<template>
  <div class="hello">
    <h1>{{ getMsg() }}</h1>
    <a-input v-model:value="state.input" type="input" style="width: 200px" />
    <a-button type="primary"  @click="callback">确定</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

/**
 * 组件状态
 */
interface State {
  input: string;
  a: string;
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
    'state.input' (v) {
      this.consoleA(v)
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
    a: ''
  }

  getMsg (): string {
    return this.msg
  }

  consoleA (v: string) {
    console.log(v, this.state.input)
  }

  callback () {
    this.$message.success('update')
    this.$emit('update', this.state.input)
  }
}
</script>

<style scoped lang="less">
.hello {
  color: green;
}
</style>
