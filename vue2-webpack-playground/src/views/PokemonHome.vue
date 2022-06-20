<template>
  <div>
    <pokemon-cards
      :pokemons="pokemons"
      @fetchEvolutions="fetchEvolutions"
    ></pokemon-cards>
    <pokemon-cards
      :pokemons="evolutions"
    ></pokemon-cards>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PokemonCards from "../components/pokemon/PokemonCards.vue";

const IDS = [1, 4, 7];
export default {
  components: { PokemonCards },
  data() {
    return {
      pokemons: [],
      evolutions: [],
    };
  },
  async mounted() {
    this.pokemons = await this.fetch(IDS);
  },
  methods: {
    ...mapActions("pokemon", ["fetch"]),
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetch([pokemon.id + 1, pokemon.id + 2]);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>