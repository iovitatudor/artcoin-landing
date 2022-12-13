<template>
  <v-app>
    <NavBar :contract='contract'
            :currentUser='currentUser'
            :nearConfig='nearConfig'
            :walletConnection='walletConnection'/>
    <HeroSrceenSection/>
    <HowItWorksSection/>
    <ServiceSection :contract='contract'
                    :currentUser='currentUser'/>
    <ProvideServiceSection/>
    <BusinessModelSection/>
    <PartnersSection/>
    <TeamSection/>
    <RoadmapSection/>
    <FooterSection/>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSrceenSection from "@/components/HeroSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import ProvideServiceSection from "./components/ProvideServiceSection.vue";
import BusinessModelSection from "./components/BusinessModelSection.vue";
import PartnersSection from "./components/PartnersSection.vue";
import TeamSection from "./components/TeamSection.vue";
import RoadmapSection from "./components/RoadmapSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  props: {
    contract: Object,
    currentUser: Object,
    nearConfig: Object,
    walletConnection: Object,
  },
  components: {
    NavBar,
    HeroSrceenSection,
    HowItWorksSection,
    ServiceSection,
    ProvideServiceSection,
    BusinessModelSection,
    PartnersSection,
    TeamSection,
    RoadmapSection,
    FooterSection,
  },
};
</script>
