<template>
  <div class="hello">
    <h1>{{ getMsg() }}</h1>
    <a-input v-model="input" type="input" style="width: 200px" />
    <a-button type="primary"  @click="callback">确定</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

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
  /**
   * 组件内部数据
   */
  data () {
    return {
      input: ''
    }
  }
})
export default class HelloWorld extends Vue {
  /**
   * 定义组件的属性，设置默认值
   */
  msg = 'Hello World!'
  input = ''
  getMsg (): string {
    return this.msg
  }

  callback () {
    this.$emit('update', this.input)
  }
}
</script>

<style scoped lang="less">
.hello {
  color: green;
}
</style>
