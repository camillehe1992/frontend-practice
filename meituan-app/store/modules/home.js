const state = () => ({
  menu: [],
  hotPlace: []
})

const mutations = {
  setMenu: (state, payload) => {
    state.menu = payload
  },
  setHotPlace: (state, payload) => {
    state.hotPlace = payload
  }
}

const actions = {
  setMenu({ commit }, menu) {
    commit('setMenu', menu)
  },
  setHotPlace({ commit }, hotPlace) {
    commit('setHotPlace', hotPlace)
  }
}

export default { namespaced: true, state, mutations, actions }