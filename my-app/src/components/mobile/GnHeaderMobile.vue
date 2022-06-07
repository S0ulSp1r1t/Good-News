<template>
  <div class="header-mobile">
    <div class="header-mobile__upper">
      <div class="header-mobile__container">
        <nav class="header-mobile__navigation">
          <img
            src="@\assets\img\UI\UI_mobile\burger.svg"
            alt="burger"
            class="header-mobile__burger"
          />
          <img
            src="@\assets\img\UI\UI_mobile\logo.svg"
            alt="logo"
            class="header-mobile__logo"
          />
        </nav>
        <div class="header-mobile__actions">
          <img
            src="@\assets\img\UI\UI_mobile\search.svg"
            alt="search"
            class="header-mobile__search"
          />
          <img
            src="@\assets\img\UI\UI_mobile\dots.svg"
            alt="burger"
            class="header-mobile__dots"
          />
        </div>
      </div>
    </div>
    <div class="header-mobile__bottom">
      <div class="header-mobile__news-type news-type">
        <div
          :class="{ _active: isActive1 }"
          @click="changeActive1"
          class="news-type__item"
        >
          Новое
        </div>
        <div
          :class="{ _active: isActive2 }"
          @click="changeActive2"
          class="news-type__item"
        >
          Популярное
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive1: true,
      isActive2: false,
    };
  },
  methods: {
    changeActive1() {
      this.isActive1 = true;
      this.isActive2 = false;
    },
    changeActive2() {
      this.isActive1 = false;
      this.isActive2 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-mobile {
  &__upper {
    background: #fafbff;
    border: 1px solid #e3e3e3;
    box-shadow: 0px 4px 10px rgba(219, 219, 219, 0.25);
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;
    padding-top: 28px;
    padding-bottom: 24px;
  }

  &__navigation {
    display: flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__burger {
  }

  &__logo {
  }

  &__actions {
    display: flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: 24px;
    }
  }

  &__search {
  }

  &__dots {
  }

  &__bottom {
  }

  &__news-type {
  }
}
.news-type {
  width: 100%;
  display: flex;

  &__item {
    width: 50%;
    text-align: center;
    padding: 21px 0;

    font-weight: 400;
    font-size: 15px;
    line-height: 120%;

    border-bottom: 1px solid #000000;

    cursor: pointer;
  }
}
._active {
  border-bottom: 3px solid #2cd6d6;
}
</style>