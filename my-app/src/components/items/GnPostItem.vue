<template>
  <router-link :to="{ name: 'PostPage', params: { id: post.id } }">
    <section class="post-item">
      <img
        class="post-item__img"
        :src="require('@/assets/img/post/' + post.image)"
      />
      <h3 class="post-item__title">{{ post.title }}</h3>
      <div class="post-item__time">8 часов назад</div>
      <div class="post-item__actions">
        <div class="post-item__open">Развернуть</div>
        <a href="" class="post-item__share share">
          <div class="share__name">Поделиться</div>
          <img src="@/assets/img/UI/share.svg" class="share__img" />
        </a>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  border: 1px solid #d3d3d3;
  padding: 16px 16px 23px 16px;
  max-width: 411px;

  > *:not(:last-child) {
    margin-bottom: 22px;
  }
  &__img {
    cursor: pointer;
  }

  &__title {
    font-family: "Roboto";
    font-size: 24px;
    line-height: 125%;
    cursor: pointer;
  }

  &__time {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 12px;
    color: #9b9b9b;
  }

  &__actions {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    color: #1bc6c6;
  }

  &__open {
  }

  &__share {
    display: flex;
    > *:not(:last-child) {
      margin-right: 9px;
    }
  }
}
.share {
  &__name {
  }

  &__img {
  }
}
</style>