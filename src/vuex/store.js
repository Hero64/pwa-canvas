import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
// vuex modules
import list from './module/List'

const store = new Vuex.Store(
  {
    modules: {
      list
    }
  }
)
export default store
