<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Regexp></Regexp>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Regexp from "./components/Regexp-test.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    Regexp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
