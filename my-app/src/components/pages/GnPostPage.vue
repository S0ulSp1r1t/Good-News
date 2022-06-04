<template>
  <section class="post-page">
    <div class="post-page__container">
      <div class="post-page__img"></div>
      <div class="post-page__text">
        <h2 class="post-page__title"></h2>
        <div class="post-page__description"></div>
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
</style>