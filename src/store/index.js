import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import todos from './modules/todos'
import levels from './modules/levels'
import conditions from './modules/conditions'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    todos,
    levels,
    conditions,
  },

  strict: process.env.NODE_ENV !== 'production'
})
