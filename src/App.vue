<template>
  <v-app>
    <NavBar />
    <HeroSrceenSection />
    <HowItWorksSection />
    <ServiceSection />
    <ProvideServiceSection />
    BussinessModel
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSrceenSection from "@/components/HeroSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import ProvideServiceSection from "./components/ProvideServiceSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroSrceenSection,
    HowItWorksSection,
    ServiceSection,
    ProvideServiceSection,
  },
};
</script>
