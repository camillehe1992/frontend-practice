import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from './views/Dashboard.vue';
import PokemonHome from './views/PokemonHome.vue';
import EvolutionChain from './components/evolution/EvolutionChain.vue';
import About from './views/About.vue';

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
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;