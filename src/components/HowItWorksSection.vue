<template>
  <v-container class="bckg-red" fluid>
    <v-container grid-list-md class="my-7">
      <h1 class="h1 text-center">How it works</h1>
      <v-row
        justify-lg="space-between"
        justify="center"
        align="center"
        class="mt-16"
      >
        <HowItWorksCard
          v-for="(step, index) in steps"
          :key="index"
          :step="step"
        />
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import HowItWorksCard from "./ui/HowItWorksCard.vue";

export default {
  components: {
    HowItWorksCard,
  },
  data: () => ({
    steps: [
      {
        icon: "IconWallet.svg",
        title: "1. Connect wallet",
        text: "Connect with Your wallet (Metamask, Ledger, etc.)",
      },
      {
        icon: "IconService.svg",
        title: "2. Provide services",
        text: "Choose to provide service in order to earn ArtCoin",
      },
      {
        icon: "IconGetService.svg",
        title: "3. Get Services",
        text: "Get a service You need by spending ArtCoin",
      },
    ],
  }),
};
</script>
<style lang="scss">
.bckg-red {
  background-color: $main-red;
}

.h1 {
  font-size: 54px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 3px;
  line-height: 1.2em;
}
</style>
