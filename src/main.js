import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery/dist/jquery.min";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000'
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
