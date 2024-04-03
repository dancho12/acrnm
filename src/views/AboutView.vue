<template>
  <main>
    <RouterLink to="/"><img class="logo-all" src="@/assets/acrnm-logo-white-pattern.png" alt=""></RouterLink>
    <div class="title-block">
      <h3>Кто мы такие</h3>
      <span class="subtitle">И почему настолько крутые, насколько рассказываем</span>
    </div>
    <div class="macaroni-container"><img id="macaroni2" src="@/assets/macaroni2.png" alt=""></div>

    <div class="content">
      <p>По сути, Лаборатория Акроним является эдаким творческим кластером, состоящим из друзей и коллег из сферы кино и
        рекламных медиа. Все мы знаем, что делаем, так как
        развиваемся и продолжаем развиваться в своём деле уже давно. Более того, мы хорошо
        друг друга понимаем и знаем свои сильные и слабые стороны.</p>
      <p>Изначально мы поняли, насколько сильна связка звука с визуалом, особенно в графике,
        особенно для рекламы. Ведь это именно те направления, которые, как правило, не
        поддаются типичной логике повествования, изображения на экране и звука.
        Потому крайне важно, чтобы оба избранных нами элемента работали на максимум,
        не оставляя у зрителя вопросов и не создавая растерянности.</p>
      <p>В основе нашей команды только лучшие на наш взгляд люди. <br>А именно: </p>
      <p><strong>Продюсеры:</strong> Белла Картель, Дмитрий Качер<br>
        <strong>Звукорежиссёры:</strong> Кирилл Кокин, Яков Шостакович<br>
        <strong>Звукооператор:</strong> Михаил Бурый<br>
        <strong>Моушн-Дизайнер:</strong> Илья Яковенко<br>
        <strong>Графический Дизайнер:</strong> Илья Мельников
      </p>
      <p style="font-weight: 275;">А чтобы узнать подробнее о том, что и как мы делаем - загляните на вкладку
        <RouterLink to="/portfolio"><strong>Работы</strong></RouterLink>
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

#macaroni2 {
  position: absolute;
  top: -600px;
  left: calc(50% - 50vw);
  mix-blend-mode: lighten;
  opacity: 0.6;
  width: 100vw;
  z-index: -2;
}

.content {
  max-width: 750px;
  margin: 0 auto;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 149%;

    strong {
      font-weight: 500;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }

}
</style>
