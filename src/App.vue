<template>
  <v-app>
    <NavBar></NavBar>
    <HeroSrceenSection></HeroSrceenSection>
    <HowItWorksSection> </HowItWorksSection>
    <ServiceSection> </ServiceSection>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSrceenSection from "@/components/HeroSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroSrceenSection,
    HowItWorksSection,
    ServiceSection,
  },
};
</script>
