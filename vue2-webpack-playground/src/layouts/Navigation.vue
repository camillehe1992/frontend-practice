<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Vue Playground </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list nav>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          activator
          :to="`${child.route}`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        {
          title: "Extra Topic",
          icon: "mdi-view-dashboard",
          items: [
            { title: "Reactivity In Depth", route: "reactivity-in-depth" },
            { title: "Watch Array", route: "watch-array" },
          ],
        },
        { title: "Pokemon", icon: "mdi-pokemon-go" },
        {
          title: "Evolution",
          icon: "mdi-image",
          items: [
            { title: "Chain", route: "evolution-chain" },
            { title: "Trigger", route: "evolution-trigger" },
          ],
        },
        {
          title: "Reactive Search",
          icon: "mdi-magnify",
          items: [
            { title: "Basic Search", route: "basic-search"}
          ]
        },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>