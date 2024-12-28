<template>
  <main>
    <Logo />
    <div class="title-block">
      <h3>Кто мы такие</h3>
      <span class="subtitle">И что нам есть о себе сказать</span>
    </div>

    <div class="content">
      <p>По сути, Лаборатория Акроним является эдаким творческим кластером, состоящим из друзей и коллег из сферы кино и рекламных медиа. Все мы знаем, что делаем, так как
        развиваемся и продолжаем развиваться в своём деле уже давно. Более того, мы хорошо
        друг друга понимаем и знаем свои сильные и слабые стороны.</p>
      <p>Изначально мы поняли, насколько сильна связка звука с визуалом, особенно в динамике,
        особенно для рекламы. Ведь это именно те направления, которые, как правило, не
        поддаются типичной логике повествования, изображения на экране, музыки и звука.
        Потому крайне важно, чтобы оба избранных нами элемента работали на максимум,
        не оставляя у зрителя вопросов и не создавая растерянности.</p>
      <p style="font-weight: 275;">А чтобы узнать подробнее о том, что и как мы делаем - загляните на вкладку
        <RouterLink to="/portfolio"><br><strong>Работы</strong></RouterLink>
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
