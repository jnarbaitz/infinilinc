import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import profile from '@/components/users/profile'
import signin from '@/components/users/signin'
import signup from '@/components/users/signup'
import chat from '@/components/conversations/chat'
import connect from '@/components/links/connect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/connect',
      name: 'connect',
      component: connect
    }
  ],
  mode: 'history'
})
