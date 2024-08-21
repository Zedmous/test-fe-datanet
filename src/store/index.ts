import { createStore } from 'vuex'

interface State {
  count: number;
}

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    currentCount(state): number {
      return state.count;
    }
  },
  modules: {
  },
})
