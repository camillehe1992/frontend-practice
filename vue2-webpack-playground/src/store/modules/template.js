const template = {
  namespaced: true,
  state() {
    return {
      all: []
    }
  },
  mutations: {
    setTemplate(state, payload) {
      state.all = payload
    }
  },
  actions: {
    async fetch({ commit }) {
      commit('setTemplate', null)
    }
  }
}

export default template;