<template>
  <div class="main-mobile__container">
    <div
      v-for="post in POSTS"
      :key="post.id"
      class="main-mobile__post mobile-post"
    >
      <div class="mobile-post__title">{{ post.title }}</div>
      <div class="mobile-post__actions">
        <div class="mobile-post__time">8 часов назад</div>
        <a href="#" class="mobile-post__share">Поделиться</a>
      </div>
      <div class="mobile-post__description">{{ post.description }}</div>
      <img
        class="mobile-post__img"
        :src="require('@/assets/img/post/' + post.image)"
        alt="post-img"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
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
.main-mobile {
  &__container {
    padding: 20px;
    margin: 0 auto;
  }

  &__post {
    &:not(:last-child) {
      margin-bottom: 30px;
    }

    > *:not(:last-child) {
      margin-bottom: 17px;
    }
  }
}
.mobile-post {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 22px;
    line-height: 27px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;

    font-weight: 400;
    font-size: 12px;
  }

  &__time {
    color: #a5a5a5;
  }

  &__share {
    color: #1bc6c6;
  }

  &__description {
    font-weight: 400;
    font-size: 15px;
  }

  &__img {
    align-self: center;
    max-width: 100%;
    max-height: 350px;
  }
}
</style>