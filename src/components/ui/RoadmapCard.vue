<template lang="">
  <v-col cols="3" align-self="center">
    <v-card
      color="transparent"
      elevation="0"
      class="roadmap mr-3 text-center"
      height="250"
    >
      <v-card-title color="white" class="justify-center pt-5">{{
        step.date
      }}</v-card-title>
      <v-card-text class="text-center">
        <ul class="pa-4">
          <li v-for="(text, index) in step.text" :key="index">
            {{ text }}
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    step: { type: Object, required: true },
  },
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.step.photo}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-card__title {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.v-card__text {
  color: #fff !important;
  font-size: 16px;
  font-weight: 400;
}

.step-photo {
  margin: 0 auto;
  border-radius: 100% !important;
  border: 5px solid $main-red;
}

.roadmap {
  border: 3px solid $main-red !important;
  border-radius: 20px;
}

ul {
  padding: 0;
  text-align: left !important;
}

li {
  margin-bottom: 5px;
}
</style>
