<template>
  <v-container fluid>
    <v-app-bar color="black" dark>
      <v-img
        src="@/assets/Logo-white.svg"
        max-height="10"
        max-width="50"
      ></v-img>

      <router-link to="#" class="ml-3">About</router-link>
      <router-link to="#" class="ml-3">Business model</router-link>
      <router-link to="#" class="ml-3">Team</router-link>
      <router-link to="#" class="ml-3">Roadmap</router-link>

      <v-spacer></v-spacer>

      <v-btn class="ml-3">PitchDeck</v-btn>
      <v-btn outlined class="ml-3">Connect wallet</v-btn>
    </v-app-bar>
  </v-container>
</template>
<script>
import RouterLink from "vue-router";
export default {};
</script>
<style lang=""></style>
