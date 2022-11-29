<template>
  <v-container class="bckg" fluid>
    <v-container grid-list-md class="my-16">
      <h1 class="h1 text-center mb-5">Roadmap</h1>
      <v-img src="@/assets/img/Roadmap.svg" contain height="250"></v-img>

      <v-row>
        <RoadmapCard v-for="(step, index) in steps" :key="index" :step="step" />
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import RoadmapCard from "./ui/RoadmapCard.vue";

export default {
  components: {
    RoadmapCard,
  },
  data: () => ({
    steps: [
      {
        date: "2021 - 2022",
        text: ["- Building ecosystem based on sharing the use of assets"],
      },
      {
        date: "2022",
        text: [
          "- Blockchain technology study, building team",
          "- P2P marketplace conceptualization",
        ],
      },
      {
        date: "2023 - Q1",
        text: [
          "- Sharing (peer) economy concept",
          "- Artcoin smart-contract",
          "- Authorization System as SaaS on blockchain",
          "- Artcoin exchange service as SaaS",
        ],
      },
      {
        date: "2023 - Q2",
        text: [
          "- Launch (Mainnet)",
          "- Community expansion, mediatization",
          "- Preparation for fundraising, IDO, TGE, etc.",
        ],
      },
    ],
  }),
};
</script>
<style lang=""></style>
