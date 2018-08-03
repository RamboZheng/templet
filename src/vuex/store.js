import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import indexModule from './indexModule'

module.exports = new Vuex.Store({
    modules: {
        index: indexModule
    }
})