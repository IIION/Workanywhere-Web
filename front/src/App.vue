<template>
  <div id="app">
    <Navbar class="navbar"/>
    <router-view style="margin-top:70px;"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: "app",
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

p {
  font-family: 'Noto Sans KR', sans-serif;
}

@media all and (max-width: 750px) {
  html { font-size: 50%; }
}


</style>
