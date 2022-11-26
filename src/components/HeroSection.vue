<template>
  <v-img src="@/assets/img/banner.png">
    <v-container grid-list-md>
      <v-row justify="space-between" align="center" class="mt-16">
        <v-col cols="6">
          <h1 class="name">artcoin</h1>
          <p class="subtitle">
            a bridge for Institutions and their communities to sharing (peer)
            economy
          </p>
          <p class="subsubtitle">
            ArtCoin - the currency that facilitates Creative Industry services
            exchange. We are building a decentralized technology that allows
            artists, service providers, production houses, freelancers,
            volunteers, institutions to share the use of assets.
          </p>
        </v-col>
        <v-col cols="5">
          <v-img
            src="@/assets/img/hero-cards.png"
            max-height="700"
            max-width="540"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>
<script>
export default {};
</script>
<style lang="scss">
.name {
  font-size: 120px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  letter-spacing: 0.09em;
  //-webkit-text-stroke: 1px rgb(255, 255, 255);
}

.subtitle {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
}

.subsubtitle {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
}
</style>
