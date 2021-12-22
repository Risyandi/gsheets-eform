<template>
  <div>
    <Navigation/>
    <div class="home">
      <img alt="Vue logo" v-bind:src="publicPath + 'assets/logo.png'">
      <HelloWorld txt1="Welcome to" txt2="gsheets forms"/>
    </div>
  </div>
</template>

<script scoped>
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  data () {
    return {
      publicPath: 'http://localhost:3000/'
    }
  },
  components: {
    HelloWorld,
    Navigation
  }
}
</script>
