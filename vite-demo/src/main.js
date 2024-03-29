import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

const app = createApp(App);

app.component("modal-button", {
  template: `
    <button @click="modalOpen = true">
        Open full screen modal! (With teleport!)
    </button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! 
          (My parent is "body")
          <button @click="modalOpen = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
  `,
  data() {
    return {
      modalOpen: false,
    };
  },
});

app.use(store).mount("#app");
