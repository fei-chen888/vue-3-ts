// @ts-nocheck
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
    }
  },
  render () {
    return (
      <>
        <div class="hello">
          {this.msg}
        </div>
        <a-input v-model={this.input} style="width: 200px" />
        <a-button onClick={() => this.callback()}>确定</a-button>
      </>
    )
  }
}

export default HelloWorld
