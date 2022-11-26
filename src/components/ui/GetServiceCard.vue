<template>
  <v-col cols="3" align-self="center">
    <v-card color="#DD1A33" elevation="0" class="get-service" rounded="xl">
      <div class="mt-5">
        <v-img
          :src="imgUrl"
          alt="service photo"
          class="card-image rounded-xl"
        />
      </div>
      <div class="glass">
        <v-avatar :src="imgUrl"></v-avatar>
        <p>{{ getService.author }}</p>
      </div>
      <v-card-title class="text-center card-title">
        {{ getService.title }}
      </v-card-title>
      <v-card-text class="text-center">
        {{ getService.description }}
      </v-card-text>
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
<style lang="scss" scoped>
.get-service {
  box-sizing: border-box;
}
.card-image {
}

.card-title {
  justify-content: center;
}

.v-image {
  top: 5px;
  margin: 5px;
  position: relative;
}

.glass {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 6px;
  top: 5px;
  left: 5px;
  box-shadow: 0 0 1rem 0 rgba(41, 39, 39, 0.2);
  border-radius: 22px;
  position: absolute;
  z-index: 1;
  background: inherit;
  overflow: hidden;
}

.glass:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(241, 241, 241, 0.5);
  filter: blur(10px);
  margin: -20px;
}
</style>
