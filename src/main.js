import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueLazyload from "vue-lazyload";

import "./assets/styles/tailwind/index.scss";

Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
