<template>
  <main class="main-page">
    <div class="main-page__container">
      <div class="main-page__body">
        <gn-post-item
          v-for="post in POSTS"
          :key="post.id"
          :post="post"
        ></gn-post-item>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GnPostItem from "../items/GnPostItem.vue";

export default {
  components: { GnPostItem },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["POSTS"]),
  },
  methods: {
    ...mapActions(["GET_POSTS_FROM_API"]),
  },
  mounted() {
    this.GET_POSTS_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
.main-page {
  &__container {
    max-width: 896px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: content-box;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 45px;

    > *:not(:nth-last-child(-n + 2)) {
      margin-bottom: 42px;
    }
  }
}
</style>