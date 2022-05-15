const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2'

const pokemon = {
  namespaced: true,
  state() {
    return {
      all: []
    }
  },
  mutations: {
    setPokemons(state, payload) {
      state.all = payload
    }
  },
  actions: {
    async fetch({}, ids) {
      const res = await Promise.all(
        ids.map(id => fetch(`${POKEMON_BASE_URL}/pokemon/${id}`))
      )
      const json = await Promise.all(
        res.map(data => data.json())
      )
      return json.map(datum => (
        {
          id: datum.id,
          name: datum.name,
          sprite: datum.sprites.other['official-artwork'].front_default,
          types: datum.types.map(t => t.type.name)
        }
      ))

    },
    async fetchEvolution(id) {
      const res = await fetch(`${POKEMON_BASE_URL}/evolution-chain/${id}`)
      const json = await res.json()
      return {
        id: json.id
      }
    }
  }
}

export default pokemon;