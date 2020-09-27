// @ts-nocheck
import { AntdInputEvent } from '@/@types/global'
import './HelloWorld.less'
const HelloWorld = {
  props: {
    msg: String
  },
  setup () {
    return {
      input: ''
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    getMsg (): string {
      return this.msg
    },
    callback () {
      this.$emit('update', this.input)
    },
    onInputChange (e: AntdInputEvent) {
      this.input = e.target.value
    }
  },
  render () {
    return (
      <>
        <div class="hello">
          {this.msg}
        </div>
        <a-input onChange={(e: AntdInputEvent) => this.onInputChange(e)} style="width: 200px" />
        <a-button onClick={() => this.callback()}>确定</a-button>
      </>
    )
  }
}

export default HelloWorld
