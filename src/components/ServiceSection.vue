<template lang="">
  <v-container class="bckg" fluid>
    <v-container grid-list-md class="my-16">
      <h1 class="h1 text-center mt-16 mb-5">
        Services You can get from COR community
      </h1>
      <p class="subsubtitle text-center">
        Click get Service, Connect Your wallet and acquire the service (in case
        You have sufficient ballance in ArtCoin)
      </p>
      <v-row justify="space-between" align="center">
        <GetServiceCard
          v-for="getService in getServices"
          :key="getService.id"
          :getService="getService"
          btn-text="Get service"
        />
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import GetServiceCard from "./ui/GetServiceCard.vue";

export default {
  components: {
    GetServiceCard,
  },
  data: () => ({
    getServices: [
      {
        id: 0,
        author: "COR",
        price: "700",
        title: "Rent small meeting room",
        description: [
          "round table – 20",
          "npeople theater - up to 50 people",
          "n500 lei/hour, minimum 2 hours 2500 lei/day",
        ],
        img: "service1.png",
        avatar: "Logo-Cor.jpeg",
      },
      {
        id: 1,
        author: "ArtCor",
        price: "400",
        title: "Rent soundlab room ",
        description: [
          "Sound recording studio",
          "120 lei/hour",
          "nHall for concerts/small events/rehearsals 500 lei/hour",
        ],
        img: "service2.png",
        avatar: "Logo-ArtCor.jpeg",
      },
      {
        id: 2,
        author: "MediaCor",
        price: "2500",
        title: "Rent events room",
        description: [
          "up to 100 people",
          "internet, audio system, 2 microphones, large LED screen",
          "2,500 lei/hour, minimum 2 hours",
        ],
        img: "service3.png",
        avatar: "Logo-MediaCor.png",
      },
    ],
  }),
};
</script>
<style lang="scss">
.bckg {
  background-color: #000;
}
</style>
