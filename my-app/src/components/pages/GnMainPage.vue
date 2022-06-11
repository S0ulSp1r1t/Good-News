<template>
  <main class="main-page">
    <div class="main-page__container">
      <div class="main-page__body">
        <gn-post-item v-for="post in POSTS" :key="post.id" :post="post" />
      </div>
      <div ref="observer" class="observer"></div>
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
    ...mapActions(["GET_POSTS_FROM_API", "LOAD_MORE_POSTS"]),
  },
  mounted() {
    this.GET_POSTS_FROM_API();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (
        entries[0].isIntersecting &&
        this.$store.state.page < this.$store.state.totalPages
      ) {
        this.LOAD_MORE_POSTS();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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