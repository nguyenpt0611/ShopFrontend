import Vue from 'vue'
import Router from 'vue-router'

const Package = () => import('@/components/layout/Package')
const PackageRoaming = () => import('@/components/layout/PackageRoaming')
const LoginUser = () => import('@/components/layout/LoginUser')
const PackageRegister = () => import('@/components/layout/PackageRegister')
const PackageDetail = () => import('@/components/layout/PackageDetail')

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
      path: '/package/roaming',
      name: 'PackageRoaming',
      component: PackageRoaming
    },
    {
      path: '/login',
      name: 'LoginUser',
      component: LoginUser
    },
    {
      path: '/package/register/:name?',
      name: 'PackageRegister',
      component: PackageRegister
    },
    {
      path: '/package/detail/:name?',
      name: 'PackageDetail',
      component: PackageDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }
    return { y: 0 }
  }

})
