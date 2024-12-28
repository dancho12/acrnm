<template>
  <header>

    <nav>
      <RouterLink to="/services">Услуги</RouterLink>
      <RouterLink to="/portfolio">Работы</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
    <DarkModeSwitcher class="mode-switch" v-model="theme_mode" />
  </header>
  <div class="top-gradient"></div>


  <RouterView />
  <div class="copyright">
    <span>ACRNM LAB {{ new Date().getFullYear() }}</span>
    <span>CREATED BY <a href="http://daniiru.jp" target="_blank" rel="noopener noreferrer">DANIIRU</a></span>
  </div>
  <div class="bottom-gradient">
  </div>
</template>

<script>

import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { defineComponent, provide, ref, computed, reactive } from 'vue'

import DarkModeSwitcher from '@/components/DarkModeSwitcher.vue'


export default defineComponent({
  name: 'App',
  components: {
    DarkModeSwitcher
  },
  setup() {

    const theme_mode = ref(window.localStorage.getItem('appColorTheme') || 'dark')

    const is_light_theme = computed(() => {
      return theme_mode.value === 'light'
    })
    provide('theme', {
      theme_mode,
      is_light_theme
    });

    const nowPlayPlayer = ref(null);

    provide("nowPlayPlayer", nowPlayPlayer);



    return { theme_mode }
  }
})
</script>
<style lang="scss">
.mode-switch {
  position: absolute;
  top: 20px;
  right: 28px;

  @include is-mobile {
    top: 50px;
    right: 30px;
  }
}


.router-link-active {
  font-weight: 400 !important;
}

.top-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 465px;
  transition: background 0.3s ease;
  background: var(--back-gradient);
  z-index: -3;
}

.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  transition: background 0.3s ease;
  background: var(--back-gradient);
  transform: rotate(180deg);
  z-index: -3;
}

nav {
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  & a {
    font-weight: 200;

    line-height: 97%;
    transition: color 0.3s ease;
    color: var(--text-color);
    text-decoration: none;

    &:hover {
      font-weight: 400;
    }
  }

  @include is-mobile {
    width: unset;
    margin-left: 32px;
    margin-right: 32px;

    font-weight: 600;
    font-size: 11px;
    line-height: 97%;
  }
}


main {
  width: 1200px;
  margin: 0 auto;

  @include is-mobile {
    width: 100%;

  }
}

h2 {
  font-weight: 400;
  font-size: 18px;
}

p {
  font-weight: 200;
  font-size: 15px;
  line-height: 123%;

  strong {
    font-weight: 500;
  }

  @include is-mobile {
    font-weight: 275;
    font-size: 12px;
  }
}


.full-screen-video {
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #080808b2;
  display: flex;
  z-index: 200;

  & iframe {
    cursor: unset;
    margin: auto;
    border: 0;
    width: 90%;
    height: 90%;

    @include is-mobile() {
      height: 30%;
    }
  }

}


.carousel__prev,
.carousel__next {
  user-select: none;


  & .carousel__icon {
    display: none;
  }



  &::after {
    position: absolute;
    top: calc(50% - 26px);
    content: '';
    min-width: 52px;
    min-height: 52px;
    max-width: 52px;
    max-height: 52px;
    mask-image: url(@/assets/icons/arrow.svg);
    -webkit-mask-image: url(@/assets/icons/arrow.svg);
    background-repeat: no-repeat;

    background-color: #fff;
  }

  margin: unset !important;
  padding: 0 10px;

  @include is-mobile {
    position: relative;
    width: 40px !important;
    height: 100% !important;
  }
}

.carousel__next {
  &::after {
    transform: rotate(180deg);
    right: -40px;
  }

  @include is-mobile {
    background: linear-gradient(-270deg, rgba(29, 29, 29, 0) 0%, rgba(4, 3, 0, 0.49)) !important;
    height: 335px !important;

    &::after {
      transform: rotate(180deg);
      right: -10px;
    }
  }
}


.carousel__prev {
  &::after {
    left: -40px;
  }

  @include is-mobile {
    background: linear-gradient(270deg, rgba(29, 29, 29, 0) 0%, rgba(4, 3, 0, 0.49) 100%) !important;
    height: 335px !important;

    &::after {
      left: -10px;
    }
  }
}

.copyright {
  text-align: center;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 35px;

  margin-top: auto;
  margin-bottom: 0px;

  & span {
    display: block;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    color: #555;
  }

  a {
    color: #555;
    text-decoration: none;

    &:hover {
      color: #fff;

      @include is-light-theme() {
        color: #100f0f;
      }
    }
  }
}


.logo-all {
  cursor: pointer;
  width: 210px;
  display: flex;
  margin: 10px auto 60px auto;

  @include is-mobile {
    display: none;
  }
}

.logo-all-mob {
  display: none;

  @include is-mobile {
    cursor: pointer;
    width: 80px;
    display: flex;
    margin: 10px auto 60px auto;
  }
}

.title-block {
  h3 {
    text-align: center;
    margin-bottom: 6px;
  }

  .subtitle {
    font-weight: 275;
    font-size: 15px;
    line-height: 123%;
    text-align: center;
    display: block;
  }

  p {
    margin-top: 14px;
    text-align: center;
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 149%;
  }

  @include is-mobile {
    margin-left: 20px;
    margin-right: 20px;

    .subtitle {

      font-size: 12px;

    }

    p {
      margin-top: 12px;

    }
  }
}

.marg-ar {
  margin-left: 28px !important;
  margin-right: 28px !important;

  @include is-mobile {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
}
</style>
