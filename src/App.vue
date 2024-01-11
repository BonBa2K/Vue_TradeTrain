<template>
  <TT_FirstPage />
</template>

<script>
import TT_FP from './components/TT_FirstPage.vue'

export default {
  name: 'App',
  components: {
    TT_FirstPage: TT_FP
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url(./assets/BlackSmith_origin.png) center center no-repeat;
  background-size: cover;
  margin-top: 0px;
  height: 100%;
}

/* Apply styles only to the current component */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, Noto Sans TC, sans-serif;
  font-weight: 700;
}
</style>
