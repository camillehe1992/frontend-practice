<template>
  <v-card class="mx-auto" max-width="200" @click="fetch" hover>
    <v-card-title> {{ pokemon.name }} # {{ pokemon.id }} </v-card-title>

    <v-divider></v-divider>
    <v-img
      :src="pokemon.sprite"
      lazy-src="../../assets/pokemon.jpg"
      width="100%"
    >
    </v-img>

    <v-divider></v-divider>
    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text">
        <v-chip v-for="type in pokemon.types" :key="type">{{ type }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    fetch() {
      this.$emit("fetchEvolutions", this.pokemon);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card__title {
  text-align: center;
  display: block;
}
</style>