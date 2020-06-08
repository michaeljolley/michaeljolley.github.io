import Vue from "vue";
import Vuex from "vuex";

import * as types from "./Mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navVisible: false
  },
  mutations: {
    [types.NAV_TOGGLE](state) {
      state.navVisible = !state.navVisible;
    },
    [types.NAV_CLOSE](state) {
      state.navVisible = false;
    }
  },
  actions: {
    [types.NAV_TOGGLE](context) {
      context.commit(types.NAV_TOGGLE);
    },
    [types.NAV_CLOSE](context) {
      context.commit(types.NAV_CLOSE);
    }
  }
});