<template>
  <div id="app">
    <Navbar class="navbar" v-if="showNav"/>
    <router-view :style="{marginTop: showNav ? '70px' : '0px'}"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: "app",
  components: {
    Navbar
  },
  data: function() {
    return {
      showNav: true
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.name == "sokchoproposal" || to.name == "yeongwolproposal") {
        if (window.screen.width < 768) {
          this.showNav = false
        }
      } else {
        this.showNav = true
      }
    }
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

@media all and (max-width: 768px) {
  html { font-size: 50%; }
}


</style>
