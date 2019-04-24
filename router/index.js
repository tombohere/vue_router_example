import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import List from '../components/List'
import List1 from '../components/List1'
import List2 from '../components/List2'
import Rev1 from '../components/Rev1'
import Rev2 from '../components/Rev2'
import Rev3 from '../components/Rev3'
import Rev4 from '../components/Rev4'
import Hero from '../components/Hero'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/list/list1',
      name: 'List1',
      component: List1
    },
    {
      path: '/list/list1/rev1',
      name: 'Rev1',
      component: Rev1
    },
    {
      path: '/list/list1/rev2',
      name: 'Rev2',
      component: Rev2
    },
    {
      path: '/list/list2',
      name: 'List2',
      component: List2
    },
    {
      path: '/list/list2/rev3',
      name: 'Rev3',
      component: Rev3
    },
    {
      path: '/list/list2/rev4',
      name: 'Rev4',
      component: Rev4
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
