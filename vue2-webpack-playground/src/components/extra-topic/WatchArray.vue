<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="2" md="4">
            <v-text-field
              v-model="dessert"
              label="Dessert"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="4">
            <v-text-field
              v-model="calories"
              :rules="[rules.isNumber]"
              label="Calories"
              suffix="g"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="4">
            <v-text-field
              v-model="fat"
              :rules="[rules.isNumber]"
              label="Fat"
              suffix="g"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="4">
            <v-text-field
              v-model="carbs"
              :rules="[rules.isNumber]"
              label="Carbs"
              suffix="g"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="4">
            <v-text-field
              v-model="protein"
              :rules="[rules.isNumber]"
              label="Protein"
              suffix="g"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="4">
            <v-text-field
              v-model="iron"
              :rules="[rules.isNumber, rules.isPercentage]"
              label="Iron"
              suffix="%"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
import desserts from "@/data/desserts.json";
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: desserts,
      dessert: '',
      calories: null,
      fat: null,
      carbs: null,
      protein: null,
      iron: null,
      rules: {
        isNumber: (value) => Number.isNumber(value) && value >= 0,
        isPercentage: (value) => value >= 0 && value <= 100,
      },
    };
  },
  computed: {
    invalid() {
      return (
        this.dessert === 0 ||
        this.calories === 0 ||
        this.fat === 0 ||
        this.carbs === 0 ||
        this.protein === 0 ||
        this.iron === 0
      );
    },
  },
  methods: {
    submit() {
      desserts.unshift({
        dessert: this.dessert,
        calories: this.calories,
        fat: this.fat,
        carbs: this.carbs,
        protein: this.protein,
        iron: this.iron,
      });
    },
    clear() {
      this.dessert = "";
      this.calories = 0;
      this.fat = 0;
      this.carbs = 0;
      this.protein = 0;
      this.iron = 0;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>