<template>
  <TT_Header id="header_area"></TT_Header>
  <router-view />
  <TT_Footer id="foot"></TT_Footer>
</template>

<script>
import TT_H from './components/Test_Header.vue'
import TT_F from './components/Test_Footer.vue'

export default {
  name: 'App',
  components: {
    TT_Header: TT_H,
    TT_Footer: TT_F,
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

#header_area {
  position: absolute;
  height: 110px;
  top: 15px;
  left: 0;
  right: 0;
}

#foot {
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 2.5rem;
}
</style>
