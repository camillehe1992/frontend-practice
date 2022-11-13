import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "./store/index";

import {
  ReactiveBase,
  DataSearch,
  MultiList,
  SingleRange,
  ToggleButton,
  ReactiveList,
} from "@appbaseio/reactivesearch-vue";

Vue.config.productionTip = false;

Vue.use(ReactiveBase);
Vue.use(DataSearch);
Vue.use(MultiList);
Vue.use(SingleRange);
Vue.use(ToggleButton);
Vue.use(ReactiveList);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
