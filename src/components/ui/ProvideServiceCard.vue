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
      <div class="glass-top">
        <v-avatar size="34" class="ma-1">
          <img :src="avatarUrl" alt="author logo" />
        </v-avatar>
        <p class="author ml-1">{{ provideService.author }}</p>
      </div>

      <div class="glass-bottom">
        <p class="price ma-2">Price</p>
        <div class="glass-bottom__number mr-2">
          <IconEth class="mr-1" />
          <p class="price-number">{{ provideService.price }} AC</p>
        </div>
      </div>

      <v-card-title class="text-center card-title mt-7">
        {{ provideService.title }}
      </v-card-title>

      <v-card-actions>
        <v-row align="center" justify="space-around">
          <v-btn rounded color="white" elevation="0" class="btn ma-4">
            Provide Service
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import IconEth from "../icons/IconEth.vue";

export default {
  components: {
    IconEth,
  },
  props: {
    provideService: { type: Object, required: true },
  },
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.provideService.img}`);
    },
    avatarUrl() {
      return require(`@/assets/img/${this.provideService.avatar}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.get-service {
  box-sizing: border-box;
}
.card-title {
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.05em;
}

.card-description {
  justify-content: center;
  color: #fff !important;
  font-weight: 400;
  font-size: 16px;
}

.v-image {
  top: 5px;
  margin: 5px;
  position: relative;
}

.glass-top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-left: 6px;
  top: 5px;
  left: 5px;
  width: 92%;
  position: absolute;
  box-shadow: 0 0 1rem 0 rgba(41, 39, 39, 0.2);
  border-radius: 22px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 22px;
}

.glass-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 6px;
  top: 251px;
  left: 5px;
  margin-left: 6px;
  width: 92%;
  position: absolute;
  box-shadow: 0 0 1rem 0 rgba(41, 39, 39, 0.2);
  border-radius: 22px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 22px;
  &__number {
    display: flex;
    margin-bottom: 0;
  }
}

.price {
  margin-bottom: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.price-number {
  margin-bottom: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
.author {
  margin-bottom: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}

.btn {
  color: $main-red;
  font-weight: 600;
  font-size: 16px;
}
</style>
