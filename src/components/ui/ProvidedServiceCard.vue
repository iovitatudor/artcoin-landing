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
          <p class="price-number">{{ getService.price }} ARTC</p>
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
          <v-dialog
              v-model="dialog"
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <!--              <v-btn rounded color="white"-->
              <!--                     elevation="0"-->
              <!--                     class="btn my-6"-->
              <!--                     v-bind="attrs"-->
              <!--                     v-on="on">-->
              <!--                {{ btnText }}-->
              <!--              </v-btn>-->
              <div class="artcoin-btn-buy-service"
                   :price="getService.price">
                {{ btnText }}
              </div>
            </template>
            <v-card class="restyled-popup">
              <v-card-title>
                <span class="text-h5">Fill out the form to provide service.</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-form
                      v-if="!successAlert"
                      ref="form"
                      v-model="form.valid"
                      lazy-validation
                  >
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                            label="Name"
                            v-model="form.name"
                            :rules="form.nameRules"
                            outlined dark
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Email"
                            v-model="form.email"
                            :rules="form.emailRules"
                            outlined dark
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Wallet ID"
                            v-model="form.walletId"
                            :rules="form.walletIdRules"
                            outlined dark
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Telegram, Twitter, etc."
                            v-model="form.socialLinks"
                            :rules="form.socialLinksRules"
                            outlined dark
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" class="text-center">
                        <v-btn
                            class="mr-4"
                            @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                            class="mr-4"
                            @click="submit(getService)"
                        >
                          Submit
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-row v-else>
                    <v-col cols="12" class="text-center">
                      <p class="success-alert">Thank you, the data has been sent successfully.</p>
                      <v-btn
                          class="mr-4"
                          @click="dialog = false"
                      >
                        Close
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import IconEth from "../icons/IconEth.vue";
import axios from "axios";

export default {
  components: {
    IconEth,
  },
  props: {
    getService: {type: Object, required: true},
    btnText: {type: String, required: true},
  },
  data: () => ({
    dialog: false,
    successAlert: false,
    form: {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      walletId: '',
      walletIdRules: [
        v => !!v || 'Wallet Id is required',
      ],
      socialLinks: '',
      socialLinksRules: [
        v => !!v || 'Social Links is required',
      ],
    },
  }),
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.getService.img}`);
    },
    avatarUrl() {
      return require(`@/assets/img/${this.getService.avatar}`);
    },
  },
  methods: {
    async submit(service) {
      if (this.$refs.form.validate()) {
        const botToken = process.env.VUE_APP_TELEGRAM_TOKEN || '5794768337:AAEqdp_kzjoykw4U7OcabtmxrdFZfdaqE_Q';
        const chatId = process.env.VUE_APP_TELEGRAM_CHAT_ID || '802416432';
        const data = `Name: ${this.form.name}\nEmail: ${this.form.email}\nWallet ID: ${this.form.walletId}\nSocial Links: ${this.form.socialLinks}\nService: ${service.title}\nPrice: ${service.price}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
              text: data,
              chat_id: chatId
            },
            {
              mode: 'no-cors',
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            });

        if (response.data.ok) {
          this.successAlert = true;
        }
      }
    }
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

.success-alert {
  font-size: 20px;
  color: #7ab317;
  margin: 25px auto;
}

.text-h5 {
  margin: 0 auto;
}

.restyled-popup {
  color: #FFF;
  background-color: #000;
}

.artcoin-btn {
  margin: 30px;
}
</style>
