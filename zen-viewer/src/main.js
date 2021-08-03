import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Equal from "equal-vue";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";

import "equal-vue/dist/style.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

createApp(App)
  .use(router)
  .use(Equal)
  .use(PrimeVue)
  .component("DataTable", DataTable)
  .mount("#app");
