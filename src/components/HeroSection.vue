<template>
  <v-img src="@/assets/img/banner.png">
    <v-container fluid>
      <v-container grid-list-md class="my-14">
        <v-row justify="space-between" align="center" class="mt-16">
          <v-col md="6" sm="12">
            <h1 class="name" ref="name">artcoin</h1>
            <p class="subtitle" ref="subtitle">
              a bridge for Institutions and their communities to sharing (peer)
              economy
            </p>
            <p class="subsubtitle" ref="subsubtitle">
              ArtCoin - the currency that facilitates Creative Industry services
              exchange. We are building a decentralized technology that allows
              artists, service providers, production houses, freelancers,
              volunteers, institutions to share the use of assets.
            </p>
          </v-col>
          <v-col md="5" sm="0">
            <v-img
              src="@/assets/img/hero-cards.png"
              max-height="700"
              max-width="540"
              class="hero-img"
              v-if="width >= 960"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-img>
</template>
<script>
export default {
  data: () => ({
    width: 0,
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  watch: {
    width: {
      handler() {
        if (this.width <= 960) {
          this.$refs.name.classList.add("text-center");
          this.$refs.subtitle.classList.add("text-center");
          this.$refs.subsubtitle.classList.add("text-center");
        }
      },
      deep: true,
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
};
</script>
<style lang="scss">
.name {
  font-size: 120px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  letter-spacing: 0.09em;
  @include rwdmax(500) {
    font-size: 80px;
  }
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
