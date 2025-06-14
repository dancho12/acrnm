<template>
  <main>
    <Logo />
    <div class="title-block">
      <h3>{{ $t('about.title') }}</h3>
      <span class="subtitle">{{ $t('about.subtitle') }}</span>
    </div>

    <div class="content">
      <p>{{ $t('about.p1') }}</p>
      <p>{{ $t('about.p2') }}</p>
      <p style="font-weight: 275;">
        <span v-html="$t('about.p3')"></span>
        <RouterLink to="/portfolio"><br><strong>{{ $t('menu.portfolio') }}</strong></RouterLink>
      </p>
    </div>

  </main>
</template>

<script>

import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

</script>


<style lang="scss" scoped>
h3 {
  text-align: center;
  margin-bottom: 6px;
}

.content {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 149%;

    strong {
      font-weight: 500;
    }
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  @include is-mobile {
    width: auto;
    margin: 20px;
    text-align: unset;

    p {
      font-size: 12px;
    }
  }
}
</style>
