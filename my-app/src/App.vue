<template>
  <gn-header />
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
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
