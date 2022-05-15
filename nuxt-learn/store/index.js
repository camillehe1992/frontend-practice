import Vue from 'vue';
import Vuex from 'vuex';
import city from './modules/city';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    city
  },
  actions: {
    // nuxtServerInit({commit}, {req}) {
    //   if (req.session.user) {
    //     commit('city', req.session.user);
    //   }
    // }
  }
});

export default store