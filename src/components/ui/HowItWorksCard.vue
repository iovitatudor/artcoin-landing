<template lang="">
  <v-col cols="auto" align-self="center">
    <v-card color="transparent" elevation="0" class="how-it-works mt-4">
      <v-img :src="imgUrl" contain alt="step icon" height="150" />
      <v-card-title color="white" class="justify-center text-center">{{
        step.title
      }}</v-card-title>
      <v-card-text class="justify-center text-center">{{
        step.text
      }}</v-card-text>
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
      return require(`@/assets/img/${this.step.icon}`);
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
</style>
