<template>
  <v-app>
    <nav-bar></nav-bar>
    <hero-srceen></hero-srceen>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSrceen from "./components/HeroSrceen.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroSrceen,
  },

  data: () => ({
    //
  }),
};
</script>
