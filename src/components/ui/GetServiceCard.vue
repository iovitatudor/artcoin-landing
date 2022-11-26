<template>
  <v-col cols="3" align-self="center">
    <v-card color="red" elevation="0" class="how-it-works">
      <v-img :src="imgUrl" contain alt="service photo" height="150" />
      {{ getService.title }}
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    getService: { type: Object, required: true },
  },
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.getService.img}`);
    },
  },
};
</script>
<style lang="scss"></style>
