import Vue from 'vue'
import Vuex from 'vuex'

import {ChuckStoreModule} from './ChuckStoreModule'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    ChuckStoreModule
  }
})

export default store
