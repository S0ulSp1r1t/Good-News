<template>
  <!--<gn-header />
  <router-view />-->
  <gn-mobile v-if="isMobile" />
  <gn-desktop v-else />
</template>

<script>
import GnDesktop from "@/components/type_device/GnDesktop.vue";
import GnMobile from "@/components/type_device/GnMobile.vue";

export default {
  name: "App",
  components: {
    GnDesktop,
    GnMobile,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true;
      console.log(navigator.userAgent);
    } else {
      this.isMobile = false;
      console.log(navigator.userAgent);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/style/nullstyle.css";
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic-ext");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap&subset=cyrillic-ext");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap&subset=cyrillic-ext");
#app {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  color: #000000;

  cursor: default;
}
</style>
