<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo logo">
          <div class="logo__center">
            <img src="@/assets/img/logo1.svg" alt="Logo image" />
          </div>
          <div class="logo__pulse-mini"></div>
          <div class="logo__pulse-big"></div>
        </div>
        <nav class="header__nav-items">
          <div class="header__swipe-wrapper">
            <span class="header__swipe-item">Видео</span>
            <span class="header__swipe-item">Статьи</span>
          </div>
          <div class="header__dropdown">
            <div class="header__dropdown-wrapper">
              <div class="header__dropdown-item dropdown-item">
                <img
                  class="dropdown-item__img"
                  src="@/assets/img/nav_img/01.svg"
                />
                <div class="dropdown-item__name">Новое</div>
              </div>
              <div
                class="header__dropdown-item dropdown-item"
                style="display: none"
              >
                <img
                  class="dropdown-item__img"
                  src="@/assets/img/nav_img/02.svg"
                />
                <div class="dropdown-item__name">Популярное</div>
              </div>
            </div>
            <img
              src="@/assets/img/nav_img/03.svg"
              alt="dropdown-arrow"
              class="header__arrow"
            />
          </div>
        </nav>
        <div class="header__socials socials">
          <img
            src="@/assets/img/socials/search.svg"
            alt="search"
            class="socials__search"
          />
          <a href="" class="social__link">
            <img
              src="@/assets/img/socials/01.svg"
              alt="vk"
              class="socials__vk"
            />
          </a>
          <a href="" class="social__link">
            <img
              src="@/assets/img/socials/02.svg"
              alt="twitter"
              class="socials__twitter"
            />
          </a>
          <a href="" class="social__link">
            <img
              src="@/assets/img/socials/03.svg"
              alt="telegram"
              class="socials__telegram"
            />
          </a>
          <a href="" class="social__link">
            <img
              src="@/assets/img/socials/04.svg"
              alt="dots"
              class="socials__dots"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 35px 0;
  background: #fafbff;
  box-shadow: 0px 2px 7px rgba(209, 209, 209, 0.35);
  &__container {
    margin: 0 auto;
    width: 1294px;
    padding: 0 15px;
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 219.38px;
  }

  &__nav-items {
    display: flex;
    align-items: center;
  }

  &__swipe-wrapper {
    background: #f7f7f8;
    border: 1px solid #16e1e1;
    border-radius: 20px;
    display: flex;
    &:not(:last-child) {
      margin-right: 56px;
    }
  }

  &__swipe-item {
    padding: 4px 24px;

    > *:not(:first-child) {
      margin-left: 10px;
    }
  }

  &__dropdown {
    display: flex;
  }

  &__dropdown-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__dropdown-item {
  }

  &__arrow {
    margin-left: 8px;
  }

  &__socials {
  }
}
.logo {
  position: relative;
  top: -26px;
  transform: translateY(-40px);
  &__center {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 156px;
    width: 156px;
    height: 156px;
    position: absolute;
    background: linear-gradient(
      180deg,
      #99f2f2 0%,
      rgba(226, 231, 237, 0.2) 100%
    );
  }

  &__pulse-mini {
    position: absolute;
    height: 156px;
    width: 156px;
    opacity: 0;
    border: 1px solid #99f2f2;
    border-radius: 150px;
    -webkit-animation: pulsate-mini 2s ease-out;
    -webkit-animation-iteration-count: infinite;

    @keyframes pulsate-mini {
      0% {
        transform: scale(1, 1);
        opacity: 0.1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.22, 1.22);
        opacity: 0.1;
      }
    }
  }

  &__pulse-big {
    position: absolute;
    height: 156px;
    width: 156px;
    opacity: 0;
    border: 1px solid #99f2f2;
    border-radius: 150px;
    -webkit-animation: pulsate-big 2s ease-out;
    -webkit-animation-iteration-count: infinite;

    @keyframes pulsate-big {
      0% {
        transform: scale(1, 1);
        opacity: 0.1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.6, 1.6);
        opacity: 0;
      }
    }
  }
}
.dropdown-item {
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 10px;
  }

  &__img {
  }

  &__name {
  }
}
.socials {
  > *:not(:first-child, :last-child) {
    margin-right: 24px;
  }

  &__search {
    &:first-child {
      margin-right: 28px;
    }
  }

  &__vk {
  }

  &__twitter {
  }

  &__telegram {
  }

  &__dots {
  }
}
</style>