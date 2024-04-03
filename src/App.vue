<template>
  <header>
    <nav>
      <RouterLink to="/portfolio">Работы</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
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
import { defineComponent, ref } from 'vue'

const myCarousel = ref(null)

export default defineComponent({
  name: 'App',
  setup() {


    return {}
  }
})
</script>
<style lang="scss">
.router-link-active {
  font-weight: 300 !important;
}

.top-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 465px;
  background: linear-gradient(0deg, #040300 0%, #121318 100%);
  z-index: -3;
}

.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 465px;
  background: linear-gradient(180deg, #040300 0%, #121318 100%);
  z-index: -3;
}

nav {
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;

  & a {
    font-weight: 600;
    font-size: 14px;
    line-height: 97%;
    color: #fff;
    text-decoration: none;
  }
}

main {
  width: 1280px;
  margin: 0 auto;
}

h2 {
  font-weight: 500;
  font-size: 18px;
}

p {
  font-weight: 275;
  font-size: 15px;
  line-height: 123%;
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

  width: 90px;
  height: 100%;


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
</style>
