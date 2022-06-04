<template>
  <gn-header />
  <router-view />
</template>

<script>
import GnHeader from "./components/GnHeader.vue";

export default {
  name: "App",
  components: {
    GnHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/style/nullstyle.css";
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
#app {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  color: #000000;

  cursor: default;
}
</style>
