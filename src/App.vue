<template>
  <div id="app">
    <Navbar v-show="$route.path !== '/login' ? true : false"></Navbar>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Navbar: () => import('@/components/layout/Navbar'),
    Footer: () => import('@/components/layout/Footer')
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/globals/index";
</style>
