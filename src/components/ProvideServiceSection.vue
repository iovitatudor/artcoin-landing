<template>
  <v-container class="bckg" fluid>
    <v-container grid-list-md class="my-16">
      <h1 class="h1 text-center mt-16 mb-5">
        Services You can provide to COR community
      </h1>
      <p class="subsubtitle text-center">
        Click Provide Service, Connect Your wallet and fill out the form (in
        order to earn ArtCoins)
      </p>
      <v-row justify="space-between" align="center">
        <ProvidedServiceCard
          v-for="provideService in provideServices"
          :key="provideService.id"
          :getService="provideService"
          btn-text="Provide service"
        />
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import ProvidedServiceCard from "@/components/ui/ProvidedServiceCard";

export default {
  components: {
    ProvidedServiceCard
  },
  data: () => ({
    provideServices: [
      {
        id: 0,
        author: "COR",
        price: "500",
        title: "Content for next MediaCor event (copywriting) ",
        img: "copywriting.jpg",
        avatar: "Logo-Cor.jpeg",
      },
      {
        id: 1,
        author: "ArtCor",
        price: "200",
        title: "Leaflets for next ArtCor event (design) ",
        img: "Leaflets.png",
        avatar: "Logo-ArtCor.jpeg",
      },
      {
        id: 2,
        author: "MediaCor",
        price: "850",
        title: "Catering for next ArtCor event (services) ",
        img: "catering.jpg",
        avatar: "Logo-MediaCor.png",
      },
    ],
  }),
};
</script>
<style lang="scss"></style>
