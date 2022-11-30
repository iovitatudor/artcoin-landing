<template>
  <v-container class="bckg-red footer" fluid>
    <v-container grid-list-md class="my-14">
      <v-row justify="space-between">
        <v-col align="center" cols="2">
          <IconLogo />
          <v-row justify="center" align="center" class="mt-5">
            <a
              class="mx-2"
              target="_blank"
              href="https://www.facebook.com/artcorcenter"
              ><IconFB
            /></a>
            <a
              class="mx-2"
              target="_blank"
              href="https://www.instagram.com/artcor_center/"
              ><IconInst
            /></a>
            <a
              class="mx-2"
              target="_blank"
              href="https://www.linkedin.com/company/11406333/admin/"
              ><IconIn /> </a
          ></v-row>
        </v-col>
        <v-col align-self="center" md="6">
          <v-row>
            <v-col md="4">
              <ul>
                <li class="footer__text"><b>About</b></li>
                <li class="footer__text">
                  <a class="footer__link" href="">Business model</a>
                </li>
                <li class="footer__text">
                  <a class="footer__link" href="">Team</a>
                </li>
              </ul>
            </v-col>
            <v-col md="3">
              <ul>
                <li class="footer__text"><b>Roadmap</b></li>
                <li class="footer__text">
                  <a class="footer__link" href="">Pitchdeck </a>
                </li>
              </ul>
            </v-col>
            <v-col md="5">
              <ul>
                <li class="footer__text"><b>Keep in touch</b></li>
                <li class="footer__text">
                  <a class="footer__link"><b>Discord</b>: ArtCoinmd#5599</a>
                </li>
                <li class="footer__text">
                  <a class="footer__link" href="mailto:artcoinmd@gmail.com"
                    ><b>Mail</b>:: artcoinmd@gmail.com</a
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import IconLogo from "./icons/IconLogo.vue";
import IconFB from "./icons/IconFB.vue";
import IconIn from "./icons/IconIn.vue";
import IconInst from "./icons/IconInst.vue";

export default { components: { IconLogo, IconFB, IconInst, IconIn } };
</script>
<style lang="scss">
.footer {
  &__text {
    color: #fff;
  }
  a {
    color: #fff !important;
  }
}
</style>
