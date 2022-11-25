<template>
  <v-container fluid>
    <v-app-bar class="header" color="black" dark>
      <v-img
        src="@/assets/Logo-white.svg"
        max-height="50"
        max-width="30"
      ></v-img>

      <a to="#" class="menu-item">About</a>
      <a to="#" class="menu-item">Business model</a>
      <a to="#" class="menu-item">Team </a>
      <a to="#" class="menu-item">Roadmap</a>

      <v-spacer></v-spacer>

      <a class="menu-item-last">PitchDeck</a>
      <v-btn class="btn-main">Connect wallet</v-btn>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang="scss">
.btn-main {
  border-radius: 40px;
  background-color: $main-red !important;
  font-size: 16px;
  font-weight: 700;
}

.menu-item {
  font-size: 16px;
  color: #fff !important;
  margin-left: 40px;
}

.menu-item-last {
  font-size: 16px;
  color: #fff !important;
  margin-right: 50px;
}

.v-toolbar__content {
  width: 1185px;
  margin: 0 auto;
}

.container--fluid {
  padding: 0;
}
</style>
