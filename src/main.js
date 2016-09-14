import Vue from 'vue'
import App from './App'

import Index from './view/Index'
import Home from './view/Home'
import Contact from './view/Contact'
import Case from './view/Case'
import CaseDetail from './view/Case-detail'

import VueHead from 'vue-head'
import lazyimg from "vue-lazyload-img"
Vue.use(VueHead)
Vue.use(Vue.lazyimg,{
    fade: true,
    nohori: true,
    speed: 20,
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { sync } from 'vuex-router-sync'
import store from './vuex/store'

var router = new VueRouter({
	history: true
})

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
* sync router loading status
*/
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

sync(store, router)

const FastClick = require('fastclick')
FastClick.attach(document.body)
/* eslint-disable no-new */

router.map({
	'/': {
      component: Home
  },
	'/case': {
      component: Case,
  },
  '/case-detail/:caseId': {
      component: CaseDetail,
  },
	'/contact': {
      component: Contact
  }
})
router.start(App, '#app')
