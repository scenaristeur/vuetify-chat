import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat/Chat'
import Create from '@/components/Chat/Create'
import ChatList from '@/components/Chat/ChatList'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
//import Signin from '@/components/User/Signin'
import SolidLogin from '@/components/User/SolidLogin'
import AuthGuard from './auth-guard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'Signin',
      component: SolidLogin // Signin
    },
    {
      path: '/register',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: AuthGuard
    },
    {
      path: '/create',
      name: 'CreateChat',
      component: Create,
      beforeEnter: AuthGuard
    },
    {
      path: '/discover',
      name: 'JoinChat',
      component: ChatList,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
