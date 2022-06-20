import Vue from 'vue';
import Vuex from 'vuex';

import template from './modules/template';
import pokemon from './modules/pokemon';
import evolution from './modules/evolution';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    template,
    pokemon,
    evolution
  }
});