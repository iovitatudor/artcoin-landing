<template>
  <v-col
      md="3"
      sm="6"
      offset-md="0"
      offset-sm="3"
      offset="2"
      cols="8"
      align-self="center"
  >
    <v-card color="#DD1A33" elevation="0" class="get-service" rounded="xl">
      <div class="mt-5">
        <v-img
            :src="imgUrl"
            alt="service photo"
            class="card-image rounded-xl"
            height="303"
        />
      </div>
      <div class="glass-top">
        <v-avatar size="34" class="ma-1">
          <img :src="avatarUrl" alt="author logo"/>
        </v-avatar>
        <p class="author ml-1">{{ getService.author }}</p>
      </div>

      <div class="glass-bottom">
        <p class="price ma-2">Price</p>
        <div class="glass-bottom__number mr-2">
          <IconEth class="mr-1"/>
          <p class="price-number">{{ getService.price }} AC</p>
        </div>
      </div>

      <v-card-title class="text-center card-title mt-7 mx-2">
        {{ getService.title }}
      </v-card-title>
      <v-card-text
          v-if="getService.description"
          class="text-center card-description pa-3"
      >
        <p v-for="(description, index) in getService.description" :key="index">
          {{ description }}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-row align="center" justify="space-around" class="action-section">
          <p class="validate-error" v-if="validatorError">
            You don't have enough funds. Top up your balance.
          </p>
          <!--          <v-btn rounded color="white" elevation="0" class="btn my-6" @click="transfer(getService.price)">-->
          <!--            {{ btnText }}-->
          <!--          </v-btn>-->
          <div class="artcoin-btn-sell-service"
               :price="getService.price "
               owner="01f0d0b7dfd44d16c5d398d0d702467afa28a9a82ee31b12d69ed187654e29152b">{{ btnText }}
          </div>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import IconEth from "../icons/IconEth.vue";
import Big from 'big.js';

export default {
  components: {
    IconEth,
  },
  props: {
    getService: {type: Object, required: true},
    btnText: {type: String, required: true},
    contract: Object,
    currentUser: Object,
  },
  data: () => ({
    validatorError: false,
    receiverAccountId: 'cormain.testnet',
    artCoinBalance: 0,
  }),
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.getService.img}`);
    },
    avatarUrl() {
      return require(`@/assets/img/${this.getService.avatar}`);
    },
  },
  mounted() {
    this.getCurrentBalance();
  },
  methods: {
    validate(price) {
      this.validatorError = parseInt(price) > this.artCoinBalance;
      setTimeout(() => this.validatorError = false, 3000);
    },
    async transfer(price) {
      this.validate(price);
      if (!this.validatorError) {
        const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();
        await this.contract.ft_transfer(
            {
              "receiver_id": this.receiverAccountId,
              "amount": (parseInt(price) * 100000000).toFixed(),
            },
            BOATLOAD_OF_GAS,
            1
        );
      }
    },
    async getCurrentBalance() {
      if (this.currentUser) {
        const result = await this.contract.ft_balance_of(
            {"account_id": this.currentUser.accountId},
        );
        this.artCoinBalance = result / 100000000;
      }
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
  word-break: normal;
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

.action-section {
  position: relative;

  .validate-error {
    position: absolute;
    top: -23px;
    text-align: center;
    color: $main-red;
    background-color: #FFF;
    line-height: 1.1;
    padding: 7px 36px;
    font-weight: 600;
  }
}

.artcoin-btn {
  margin: 30px;
}
</style>
