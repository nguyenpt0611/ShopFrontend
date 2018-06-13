<template>
  <div id="app">
    <Navbar v-show="$route.path !== '/login' ? true : false"></Navbar>
    <router-view/>
    <Footer v-show="$route.path !== '/login' ? true : false"></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {Navbar, Footer},
}
</script>

<style lang="scss">
  @import "assets/scss/globals/index";
</style>
