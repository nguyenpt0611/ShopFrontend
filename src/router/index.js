import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'Package'
      }
    },
    {
      path: '/package',
      name: 'Package',
      component: require('@/components/LoginUser')
    },
    {
      path: '/login',
      name: 'LoginUser',
      component: require('@/components/LoginUser')
    },
    {
      path: '/package/register/:name?',
      name: 'PackageRegister',
      component: require('@/components/PackageRegister'),
    },
    {
      path: '/package/detail/:name?',
      name: 'PackageDetail',
      component: require('@/components/PackageDetail'),
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }
    return { y: 0 }
  }

})
