<template>
  <v-container fluid>
    <header :class="{ 'scrolled-nav': scrollPosition }">
      <nav>
        <div class="branding">
          <icon-logo></icon-logo>
        </div>
        <div v-show="!mobile" class="navigation">
          <ul class="navigation__list">
            <li><a to="#" class="menu-item">About</a></li>
            <li><a to="#" class="menu-item">Business model</a></li>
            <li><a to="#" class="menu-item">Team </a></li>
            <li><a to="#" class="menu-item">Roadmap</a></li>
            <li><a class="menu-item">PitchDeck</a></li>
          </ul>

<!--          <v-btn class="btn-main" @click="login" v-if="!currentUser">Connect wallet</v-btn>-->
<!--          <div class="account-section" v-else>-->
<!--            <span class="account-section-item">-->
<!--              <v-icon dark>mdi-wallet</v-icon>-->
<!--              {{ artCoinBalance }} AC-->
<!--            </span>-->
<!--            <span class="account-section-item">-->
<!--              <v-icon dark>mdi-account</v-icon>-->
<!--              {{ currentUser.accountId }}-->
<!--            </span>-->
<!--            <v-btn class="btn-main" @click="logout">Logout</v-btn>-->
<!--          </div>-->

        </div>

        <div class="icon">
          <IconMenu
            @click.native="toggleMobileNav"
            v-show="mobile"
            class="menu-icon"
            :class="{ 'icon-active': mobileNav }"
            width="30"
          />
        </div>

        <transition name="mobile-nav">
          <div v-show="mobileNav" class="dropdown-nav text-center">
            <ul>
              <li><a to="#" class="menu-item">About</a></li>
              <li><a to="#" class="menu-item">Business model</a></li>
              <li><a to="#" class="menu-item">Team </a></li>
              <li><a to="#" class="menu-item">Roadmap</a></li>
              <li><a class="menu-item">PitchDeck</a></li>
            </ul>
            <v-btn class="btn-main" @click="login" v-if="!currentUser">Connect wallet</v-btn>
            <div class="account-section" v-else>
              <v-btn class="btn-main" @click="logout">Logout</v-btn>
              <p class="account-section-item">
                <v-icon dark>mdi-account</v-icon>
                {{ currentUser.accountId }}
              </p>
              <p class="account-section-item">
                <v-icon dark>mdi-wallet</v-icon>
                {{ artCoinBalance }} AC
              </p>
            </div>
          </div>
        </transition>
      </nav>
    </header>
  </v-container>
</template>
<script>
import IconLogo from "./icons/IconLogo.vue";
import IconMenu from "./icons/IconMenu.vue";

export default {
  name: "navMenu",
  props: {
    contract: Object,
    currentUser: Object,
    nearConfig: Object,
    walletConnection: Object,
  },
  components: {IconLogo, IconMenu},
  data: () => ({
    width: 0,
    scrollPosition: null,
    mobile: null,
    mobileNav: null,
    artCoinBalance: 0,
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width <= 870) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    async login() {
      localStorage.setItem('redirectToNear', 'true');
      await this.walletConnection.requestSignIn({
          contractId: this.nearConfig.contractName,
          methodNames: [
            this.contract.ft_transfer.name,
          ]
        },
        'Artcoin',
        null,
        null,
      )
    },
    async logout() {
      await this.walletConnection.signOut();
      window.location.replace(window.location.origin + window.location.pathname);
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
  created() {
    this.getCurrentBalance();
    window.addEventListener("resize", this.updateWidth);
  },
};
</script>
<style lang="scss">
.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.btn-main {
  border-radius: 40px;
  background-color: $main-red !important;
  font-size: 16px;
  font-weight: 700;
  color: #fff !important;
}

.menu-item {
  font-size: 16px;
  color: #fff !important;
  margin-left: 40px;
}

.menu-item-last {
  font-size: 16px;
  color: #fff !important;
  margin-right: 50px;
}

.v-toolbar__content {
  width: 1185px;
  margin: 0 auto;
}

.container--fluid {
  padding: 0;
}

header {
  background-color: rgba(0, 0, 0);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1185px) {
      max-width: 1185px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    .link {
      font-size: 18px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: $main-red;
        border-color: $main-red;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      svg {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      width: 98%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__list {
        display: flex;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      svg {
        fill: #fff;
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transition: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: $main-red;
      top: 0;
      left: 0;

      ul {
        padding: 0;
      }

      li {
        margin-top: 15px;

        a {
          margin-left: 0;
          text-align: center;
        }
      }

      button {
        background-color: #fff !important;
        color: $main-red !important;
        width: 70%;
        margin-top: 17px;
      }
    }
  }
}

.account-section {
  .account-section-item {
    margin: 0 20px 0 10px;
    display: inline-block;
    font-weight: 600;
  }

  @media screen and (max-width: 900px) {
    .account-section-item {
      width: 85%;
      padding-top: 15px;
    }
  }
}
</style>
