import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import ReactivityInDepth from "./components/extra-topic/ReactivityInDepth.vue";
import WatchArray from "./components/extra-topic/WatchArray.vue";
import PokemonHome from "./views/PokemonHome.vue";
import EvolutionChain from "./components/evolution/EvolutionChain.vue";
import BasicSearch from "./components/reactive-search/BasicSearch.vue";
import FacetedSearchWithVue from "./components/reactive-search/FacetedSearchWithVue.vue";
import About from "./views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  // Extra Topics
  {
    path: "/reactivity-in-depth",
    name: "ReactivityInDepth",
    component: ReactivityInDepth,
  },
  {
    path: "/watch-array",
    name: "WatchArray",
    component: WatchArray,
  },
  // Pokemon
  {
    path: "/pokemon",
    name: "pokemon",
    component: PokemonHome,
  },
  {
    path: "/evolution-chain",
    name: "evolutionChain",
    component: EvolutionChain,
  },
  // Reactive Search
  {
    path: "/basic-search",
    name: "basicSearch",
    component: BasicSearch,
  },
  {
    path: "/faceted-search-with-vue",
    name: "facetedSearchWithVue",
    component: FacetedSearchWithVue,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
