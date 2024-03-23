<template>
  <header>
    <nav>
      <RouterLink to="/">Работы</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
  </header>
  <div class="top-gradient"></div>


  <RouterView />
  <div class="bottom-gradient"></div>
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
</style>
