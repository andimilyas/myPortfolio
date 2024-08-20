<template>
  <div class="flex flex-col">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"; 
import Home from "./components/Home.vue";
import {RouterView} from 'vue-router';

import { defineComponent } from "vue";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
    footer: Footer,
    Home: Home,
  },
};
</script>

