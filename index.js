// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VeeValidate from "vee-validate";
import VueLocalStorage from "vue-localstorage";
import VueFire from "vuefire";
import Toasted from "vue-toasted";
import "./app.css";

import modal from "./components/Modal.vue";
import modalCharacter from "./components/Character.vue";

Vue.use(VueFire);
Vue.use(VeeValidate);
Vue.use(Toasted, {
  duration: 2000,
  type: "success",
  theme: "outline",
  position: "top-center",
  containerClass: ["toaster"],
  className: ["toaster2"]
});
Vue.config.productionTip = false;

Vue.component("modal", modal);
Vue.component("modalCharacter", modalCharacter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data() {
    return {
      showModal: false
    };
  },
  router,
  template: "<App/>",
  components: { App },
  methods: {
    gotoPage: function(p) {
      router.push(p);
    }
  }
});
