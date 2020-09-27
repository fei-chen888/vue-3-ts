<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="msg" @update="update" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  get msg () {
    return 'Welcome to Your Vue.js + TypeScript App'
  }

  update (d: string) {
    console.log('update:', d)
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
