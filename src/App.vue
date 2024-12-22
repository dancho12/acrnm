<template>
  <header>

    <nav class="desk">
      <RouterLink to="/services">Услуги</RouterLink>
      <RouterLink to="/portfolio">Работы</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
    <nav class="mob">
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
import { defineComponent, provide, ref } from 'vue'

import DarkModeSwitcher from '@/components/DarkModeSwitcher.vue'


export default defineComponent({
  name: 'App',
  components: {
    DarkModeSwitcher
  },
  setup() {

    const theme_mode = ref(window.localStorage.getItem('appColorTheme') || 'dark')
    provide('theme', {
      theme_mode
    });


    return { theme_mode }
  }
})
</script>
<style lang="scss">
.mode-switch {
  position: absolute;
  top: 13px;
  right: 28px;
}


#back {
  position: absolute;
  top: -230px;
  left: calc(50% - 1024px);
  width: 2048px;

  opacity: 0.6;
  z-index: -2;
  display: flex;

  background-image: url(@/assets/background-gradient.jpg);
  height: calc(100% + 230px);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: lighten;

  .left,
  .right {
    width: 100px;
    height: 100%;
  }

  .left {
    margin-left: 0px;
    margin-right: auto;

    background: #000;
    background: linear-gradient(90deg, rgba(4, 3, 0, 1) 0%, rgba(4, 3, 0, 0) 100%);
  }

  .right {
    margin-left: auto;
    margin-right: 0px;
    background: linear-gradient(-90deg, rgba(4, 3, 0, 1) 0%, rgba(4, 3, 0, 0) 100%);
  }
}

.router-link-active {
  font-weight: 200 !important;
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
  // height: 465px;
  height: 20vh;
  transition: background 0.3s ease;
  background: var(--back-gradient);
  transform: rotate(180deg);
  z-index: -3;
}

nav.desk {
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;

  & a {
    font-weight: 400;
    font-size: 14px;
    line-height: 97%;
    transition: color 0.3s ease;
    color: var(--text-color);
    text-decoration: none;
  }
}

nav.mob {
  display: none;
}

main {
  width: 1200px;
  margin: 0 auto;
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
  }
}

@media screen and (max-width: 768px) {

  #back {
    position: absolute;
    top: 0;
    left: calc(50% - 575px);
    width: 1150px;
    background-image: url(@/assets/background-gradient-mob.jpg);

    .left,
    .right {
      display: none;
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
    background-color: white;
  }

  margin: unset !important;
  padding: 0 10px;

}

.carousel__next {
  &::after {
    transform: rotate(180deg);
    right: -40px;
  }
}


.carousel__prev {
  &::after {
    left: -40px;
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
    }
  }
}


.logo-all {
  cursor: pointer;
  width: 210px;
  display: flex;
  margin: 10px auto 60px auto;
}

.logo-all-mob {
  display: none;
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
}

.marg-ar {
  margin-left: 28px !important;
  margin-right: 28px !important;
}

@media screen and (max-width: 768px) {

  .marg-ar {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }

  main {
    width: 100%;
    margin: 0 auto;
  }


  nav.desk {
    display: none;
  }

  nav.mob {
    position: absolute;
    right: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    width: max-content;
    flex-direction: column;
    gap: 16px;
    z-index: 10;

    & a {
      font-weight: 400;
      font-size: 14px;
      line-height: 97%;
      color: #fff;
      text-decoration: none;
      text-align: right;
    }
  }

  p {
    font-weight: 275;
    font-size: 12px;
    line-height: 123%;
  }


  .carousel__prev,
  .carousel__next {
    position: relative;
    width: 40px !important;
    height: 100% !important;
  }

  .carousel__next {
    background: linear-gradient(-270deg, rgba(29, 29, 29, 0) 0%, rgba(4, 3, 0, 0.49)) !important;

    &::after {
      transform: rotate(180deg);
      right: -10px;
    }
  }


  .carousel__prev {
    background: linear-gradient(270deg, rgba(29, 29, 29, 0) 0%, rgba(4, 3, 0, 0.49) 100%) !important;

    &::after {
      left: -10px;
    }
  }


  .logo-all {
    display: none;
  }

  .logo-all-mob {
    cursor: pointer;
    width: 80px;
    display: flex;
    margin: 10px auto 60px 13px;
  }


  .title-block {
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
</style>
