import { Options, Vue } from 'vue-class-component'
import './HelloWorld.less'

@Options({
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
  },
  render () {
    return (
      <>
        <div class="hello">
          {this.getMsg()}
        </div>
        <a-input v-model={this.input} style="width: 200px" />
        <a-button type="primary" onClick={() => this.callback()}>确定</a-button>
      </>
    )
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
