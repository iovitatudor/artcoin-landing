<template lang="">
  <v-col cols="8" md="4" sm="6" align-self="center" class="mt-3">
    <v-card
      color="transparent"
      elevation="0"
      class="how-it-works mr-3 text-center"
    >
      <img
        :src="imgUrl"
        contain
        alt="member icon"
        height="230"
        class="member-photo"
        rounded-pill
      />

      <v-card-title color="white" class="justify-center">{{
        member.name
      }}</v-card-title>
      <v-card-text class="justify-center pa-3">{{ member.role }}</v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    member: { type: Object, required: true },
  },
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.member.photo}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-card__title {
  padding-top: 40px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.v-card__text {
  padding-top: 30px;
  color: #fff !important;
  font-size: 16px;
  font-weight: 400;
}

.member-photo {
  margin: 0 auto;
  border-radius: 100% !important;
  border: 5px solid #dd1a33;
}
</style>
