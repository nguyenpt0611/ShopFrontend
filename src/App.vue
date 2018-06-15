<template>
  <div id="app">
    <Navbar v-show="isShowNav"></Navbar>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // isShowNav: this.$store.state.isShowNav
    }
  },
  components: {
    Navbar: () => import('@/components/Navbar'),
    Footer: () => import('@/components/Footer')
  }
}
</script>

<style lang="scss">
  @import "assets/scss/globals/index";
</style>
