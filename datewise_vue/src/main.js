import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueSweetalert2 from "vue-sweetalert2";
import MaterialDashboard from "./material-dashboard";
import mitt from 'mitt';

const appInstance = createApp(App);
const pinia = createPinia();

const emitter = mitt();
appInstance.config.globalProperties.emitter = emitter;

appInstance.use(store);
appInstance.use(router);
appInstance.use(pinia);
appInstance.use(VueSweetalert2);
appInstance.use(MaterialDashboard);
appInstance.mount("#app");