<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo logo">
          <div class="logo__center">
            <img src="@/assets/img/logo1.svg" alt="Logo image" />
          </div>
          <div class="logo__pulse-mini" />
          <div class="logo__pulse-big" />
        </div>
        <nav class="header__nav-items">
          <div class="header__swipe-wrapper">
            <span
              :class="{ swipeActive: isSwipeActive1 }"
              class="header__swipe-item"
              @click="changeActiveSwipe1"
              >Видео</span
            >
            <span
              :class="{ swipeActive: isSwipeActive2 }"
              class="header__swipe-item"
              @click="changeActiveSwipe2"
              >Статьи</span
            >
          </div>
          <div class="header__dropdown-page">
            <div class="header__dropdown-wrapper dropdown">
              <div
                class="dropdown__select"
                @click="areOptionsVisible = !areOptionsVisible"
              >
                <div class="dropdown__selected-option option">
                  <img
                    class="option__img"
                    :src="require('@/assets/img/nav_img/' + selectedOption.src)"
                  />
                  <div class="option__name">{{ selectedOption.name }}</div>
                </div>
                <img
                  src="@/assets/img/nav_img/03.svg"
                  alt="dropdown-arrow"
                  class="dropdown__arrow"
                  :class="{ arrowActive: areOptionsVisible }"
                />
              </div>
              <div class="dropdown__options" v-if="areOptionsVisible">
                <div
                  v-for="option in options"
                  :key="option.value"
                  @click="selectOption(option)"
                  class="dropdown__option option"
                >
                  <img
                    v-if="selectedOption.src != option.src"
                    class="option__img"
                    :src="require('@/assets/img/nav_img/' + option.src)"
                  />
                  <div
                    v-if="selectedOption.name != option.name"
                    class="option__name"
                  >
                    {{ option.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="header__social social">
          <img src="@/assets/img/socials/search.svg" alt="search" />
          <a href="" class="social__link">
            <img src="@/assets/img/socials/01.svg" alt="vk" />
          </a>
          <a href="" class="social__link">
            <img src="@/assets/img/socials/02.svg" alt="twitter" />
          </a>
          <a href="" class="social__link">
            <img src="@/assets/img/socials/03.svg" alt="telegram" />
          </a>
          <a href="" class="social__link">
            <img src="@/assets/img/socials/04.svg" alt="dots" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSwipeActive1: true,
      isSwipeActive2: false,
      areOptionsVisible: false,
      selectedOption: { src: "01.svg", name: "Новое" },
      options: [
        { src: "01.svg", name: "Новое", value: "1" },
        { src: "02.svg", name: "Популярное", value: "2" },
      ],
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption.src = option.src;
      this.selectedOption.name = option.name;
      this.areOptionsVisible = false;
    },
    changeActiveSwipe1() {
      this.isSwipeActive2 = false;
      this.isSwipeActive1 = true;
    },
    changeActiveSwipe2() {
      this.isSwipeActive2 = true;
      this.isSwipeActive1 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
//=========================================================================================

.header {
  padding: 35px 0;
  background: #fafbff;
  box-shadow: 0px 2px 7px rgba(209, 209, 209, 0.35);
  &__container {
    margin: 0 auto;
    max-width: 1294px;
    padding: 0 15px;
    padding-left: 35px;
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
    cursor: pointer;

    > *:not(:first-child) {
      margin-left: 10px;
    }
  }

  &__dropdown-page {
  }

  &__dropdown-wrapper {
    cursor: pointer;
  }

  &__social {
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
.dropdown {
  position: relative;
  &__select {
    display: flex;
    align-items: center;
  }

  &__selected-option {
    font-weight: 800;
  }

  &__arrow {
    margin-left: 8px;
    transition-duration: 0.5s;
  }

  &__options {
    position: absolute;
    padding: 9px 12px 12px 12px;
    background: #fafbff;
    box-shadow: 0px 0px 4px #d9dff2;
    border-radius: 6px;
    min-width: max-content;
    left: -11px;
    top: calc(100% + 5px);
  }

  &__option {
  }
}
.option {
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

.social {
  > *:not(:first-child, :last-child) {
    margin-right: 24px;
  }
  > *:first-child {
    margin-right: 28px;
    cursor: pointer;
  }

  &__link {
  }
}
.arrowActive {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
}
.swipeActive {
  background: #1bc6c6;
  border-radius: 20px;
  font-weight: 800;

  color: #ffffff;

  transition-duration: 1s;
}
</style>