import { createApp } from "vue";
import App from "./App.vue";
import { Visualia } from "./lib.es";

const app = createApp(App);
app.use(Visualia);
app.mount("#app");
