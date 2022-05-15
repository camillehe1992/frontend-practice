<template>
  <div class="cards">
    <pokemon
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      @fetchEvolutions="fetchEvolutions"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    ></pokemon>
  </div>
</template>

<script>
import Pokemon from "./Pokemon.vue";
export default {
  components: {
    Pokemon,
  },
  data() {
    return {
      selectedId: null
    }
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    fetchEvolutions(pokemon) {
      this.$emit("fetchEvolutions", pokemon);
      this.selectedId = pokemon.id
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  margin-bottom: 10px;
}
.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
</style>