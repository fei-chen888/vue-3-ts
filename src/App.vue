<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="msg" @update="update" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld, { Message } from './components/HelloWorld.vue'

interface State {
  msg: string
}

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  state: State = {
    msg: 'Welcome to Your Vue.js + TypeScript App'
  }

  get msg () {
    return this.state.msg
  }

  update (list: Message[]) {
    this.state.msg = `Welcome to Your Vue.js + TypeScript App(${list.length})`
    console.log('update:', list)
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
