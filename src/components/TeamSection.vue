<template>
  <v-container class="bckg" fluid>
    <v-container grid-list-md class="my-16">
      <h1 class="h1 text-center mb-5">Our Team</h1>
      <v-row justify="center" align="center" class="mt-16">
        <TeamCard
          v-for="(member, index) in members"
          :key="index"
          :member="member"
        />
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import TeamCard from "./ui/TeamCard.vue";

export default {
  components: {
    TeamCard,
  },
  data: () => ({
    members: [
      {
        id: 0,
        photo: "Vasili-Braga.jpeg",
        name: "Vasili Braga",
        role: "Executive Director Creative Industries Association in Moldova",
      },
      {
        id: 1,
        photo: "Viorica-Cerbuska.jpeg",
        name: "Viorica Cerbuska",
        role: "CEO Artcor Creative Industries Center & Yep!Moldova Founder",
      },
      {
        id: 2,
        photo: "Andrei.png",
        name: "Andrei Tintari",
        role: "Web3 Moldova Community Founder, CTO",
      },
    ],
  }),
};
</script>
<style lang=""></style>
