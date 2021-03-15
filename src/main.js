import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import VueMoment from 'vue-moment'

Vue.use(VueMoment)

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
