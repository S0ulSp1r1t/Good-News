<template>
  <gn-header />
  <router-view />
</template>

<script>
import GnHeader from "@/components/GnHeader.vue";
export default {
  components: {
    GnHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>