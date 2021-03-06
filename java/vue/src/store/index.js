import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import schedule from './module/schedule'
import resource from './module/resource'
import role from './module/role'
import server from './module/server'
import fabric from './module/fabric'
import ethereum from './module/ethereum'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    schedule,
    resource,
    role,
    server,
    fabric,
    ethereum
  }
})
