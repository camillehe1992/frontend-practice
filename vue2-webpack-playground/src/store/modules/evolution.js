const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2'

const evolution = {
  namespaced: true,
  state() {
    return {
      chains: []
    }
  },
  mutations: {
    setChains(state, chains) {
      state.all = chains
    }
  },
  actions: {
    async fetch({ commit }) {
      const res = await fetch(`${POKEMON_BASE_URL}/evolution-chain`);
      const json = await res.json()
      commit('setChains', json)
    }
  }
}

export default evolution;