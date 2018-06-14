import Vue from 'vue'
import Router from 'vue-router'
const LoginUser = () => import('@/components/LoginUser')
const Package = () => import('@/components/Package')
const PackageRegister = () => import('@/components/PackageRegister')
const PackageDetail = () => import('@/components/PackageDetail')

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
      component: Package
    },
    {
      path: '/login',
      name: 'LoginUser',
      component: LoginUser
    },
    {
      path: '/package/register/:name?',
      name: 'PackageRegister',
      component: PackageRegister,
    },
    {
      path: '/package/detail/:name?',
      name: 'PackageDetail',
      component: PackageDetail,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }
    return { x: 0, y: 0 }
  }

})
