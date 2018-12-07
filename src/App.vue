<template>
  <div id="app">
    <Carousel v-bind:cycle="true" v-bind:smooth="true"/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    Carousel,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
