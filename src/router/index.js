import Vue from 'vue'
import Router from 'vue-router'
import LoginUser from '@/components/LoginUser'
import PackageRomaing from '@/components/PackageRoaming'
import PackageRegister from '@/components/PackageRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'PackageRoaming'
      }
    },
    {
      path: '/package',
      name: 'PackageRoaming',
      component: PackageRomaing
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
    }
  ]
})
