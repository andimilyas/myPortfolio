import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";
import Blog from "./components/Blog.vue";
import Footer from "./components/Footer.vue";
import router from "./router";

import App from "./App.vue";
import "./styles/index.css"; // tailwindcss

library.add(fas, fab, far); // fontawesome
const app = createApp(App);

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("Navbar", Navbar)
  .component("Home", Home)
  .component("Project", Project)
  .component("Contact", Contact)
  .component("Blog", Blog)
  .component("Footer", Footer);

app.use(createPinia());
app.use(router)

app.mount("#app");
