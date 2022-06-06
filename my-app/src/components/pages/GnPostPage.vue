<template>
  <section class="post-page">
    <div class="post-page__container">
      <div class="post-page__content">
        <img class="post-page__img" :src="savedPost.imagefull" alt="post-img" />
        <div class="post-page__text">
          <h2 class="post-page__title">{{ savedPost.title }}</h2>
          <div class="post-page__description">{{ savedPost.description }}</div>
        </div>
      </div>
      <div class="post-page__actions">
        <div class="post-page__time">8 часов</div>
        <a href="" class="post-page__share share">
          <div class="share__name">Поделиться</div>
          <img src="@/assets/img/UI/share.svg" class="share__img" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      post: {},
      savedPost: {},
      //id: null,
    };
  },
  computed: {
    ...mapGetters(["POSTS"]),
  },
  methods: {
    ...mapActions(["GET_POSTS_FROM_API"]),
  },

  mounted() {
    this.GET_POSTS_FROM_API();
    this.id = this.$route.params.id;
    setTimeout(() => {
      this.post = this.POSTS.find((post) => post.id == this.id);
      sessionStorage.post = JSON.stringify(this.post);
      this.savedPost = JSON.parse(sessionStorage.post);
    }, 50);
  },
};
</script>

<style lang="scss" scoped>
.post-page {
  &__container {
    max-width: 1130px;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 0 15px;
    padding-top: 94px;
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__content {
    display: flex;

    > *:not(:last-child) {
      margin-right: 50px;
    }
  }

  &__img {
    max-width: 310px;
    max-height: 310px;
  }

  &__text {
    font-family: "Roboto";
  }

  &__title {
    font-size: 20px;
    line-height: 115%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 117%;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }

  &__time {
    line-height: 116%;
    color: #9b9b9b;
  }

  &__share {
    display: flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: 9px;
    }
  }
}
.share {
  &__name {
    color: #1bc6c6;
  }

  &__img {
  }
}
</style>