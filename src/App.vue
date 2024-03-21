<template>
  <header>
    <nav>
      <RouterLink to="/">Работы</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
  </header>

  <RouterView />
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
header {
  height: 465px;
  background: linear-gradient(180deg, #040300 0%, #121318 100%);
  display: flex;
}

nav {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
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
</style>
