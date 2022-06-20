<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <navigation></navigation>
    </v-navigation-drawer>
    <v-app-bar color="deep-purple" app>
      <main-header></main-header>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Camille1992</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import MainHeader from "./layouts/MainHeader.vue";
import Navigation from "./layouts/Navigation.vue";
export default {
  components: { Navigation, MainHeader },
};
</script>

<style lang="scss" scoped>
</style>