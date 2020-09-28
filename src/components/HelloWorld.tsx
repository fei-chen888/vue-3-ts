import { AntdInputEvent, AntdInputProps } from '@/@types/global'
import { Options, Vue } from 'vue-class-component'
import './HelloWorld.less'
interface State {
  input: string;
}
@Options({
  /**
   * 组件属性
   */
  props: {
    msg: String
  },
  render () {
    return (
      <>
        <div class="hello">
          {this.getMsg()}
        </div>
        <a-input {...this.inputProps} />
        <a-button type="primary" onClick={() => this.callback()}>确定</a-button>
      </>
    )
  }
})
export default class HelloWorld extends Vue {
  /**
   * 定义组件的属性，设置默认值
   */
  readonly msg = 'Hello World!'

  state: State = {
    input: ''
  }

  inputProps: AntdInputProps = {
    onChange: (e: AntdInputEvent) => this.onInputChange(e),
    style: 'width: 200px',
    msg: ''
  }

  getMsg (): string {
    return this.msg
  }

  callback () {
    this.$emit('update', this.state.input)
  }

  onInputChange (e: AntdInputEvent) {
    this.state.input = e.target.value
  }
}
