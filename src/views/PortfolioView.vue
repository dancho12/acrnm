<template>
  <main>
    <RouterLink to="/"><img class="logo-all" src="@/assets/acrnm-logo-white-pattern.png" alt=""></RouterLink>
    <RouterLink to="/"><img class="logo-all-mob" src="@/assets/acrnm-logo-mob.png" alt=""></RouterLink>
    <div class="title-block">
      <h3>Наши работы</h3>
      <span class="subtitle">Всё самое крутое что мы делали</span>
      <p>Пожалуй, самый увлекательный блок на этом сайте, ведь здесь собраны самые лучшие работы как целой команды, так
        и отдельных наших специалистов, рассказы о том, как они создавались, и то, что любят все - красивые картинки
        без лишней воды.</p>
    </div>
    <div class="content-container marg-ar">

      <div class="item">
        <div class="description">
          <span class="title">Atomic Heart:<br>
            Инстинкт Истребления</span>
          <p>Летом 2023 года мы познакомились с исполнителем ScaryOn, участвовавшим в создании саундтрека к игре.
            Незадолго до выхода дополнения, он попросил нас помочь ему в продюсировании нескольких треков и записать
            озвучку радио-голосов для трейлера. </p>
          <p>Так и мы стали частью большой гордости Российского геймдева, оказавшись в трейлере и в самой игре с треком
            BEA-2 Theme. </p>

          <div class="info">
            <span>Яков Шостакович </span>
            <a href="https://www.youtube.com/watch?v=7x2Y3Uq8Mko" target="_blank" rel="noopener noreferrer">Смотреть</a>
          </div>
        </div>
        <div class="pic">
          <img src="@/assets/photos/comp/atomic-2-min.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="description">
          <span class="title">VK Видео: Адская Школа</span>
          <p>Осенью 2023 к нам обратились из VK видео и МШК с просьбой записать и обработать звук для пилотного эпизода
            сериала про “Игру в кальмара” в российских реалиях. Проект был сложным, но крайне интересным. Более того,
            специально для сериала мы написали заглавную тему в исполнении великолепной Екатерины Проскуры. </p>
          <p>Пилот участвовал в тендере VK и занял лидирующее место в списке перспективных сериалов площадки</p>

          <div class="info">
            <span>Яков Шостакович, Михаил Бурый</span>
            <a href="https://youtu.be/IU0AJHgbldg" target="_blank" rel="noopener noreferrer">Смотреть</a>
          </div>
        </div>
        <div class="pic">
          <img src="@/assets/photos/comp/hell-min.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="description">
          <span class="title">Sofia Doors:<br>
            Solaris</span>
          <p>Не так давно мы познакомились с коллегами Argument Agency, которые в тот момент работали над рекламной
            кампанией Sofia Doors, приуроченной к новой линейке продукции, вдохновлённой фильмом “Солярис” Андрея
            Тарковского.</p>
          <p>Ребята тоже талантливые дизайнеры, но им не хватало грамотной визуализации задумки и проработки
            аудио-концепции, в чём мы им и помогли. </p>

          <div class="info">
            <span>Илья Яковенко, Яков Шостакович </span>
            <a href="https://sofiadoors.com/blog/solyaris/" target="_blank" rel="noopener noreferrer">Смотреть</a>
          </div>
        </div>
        <div class="pic">
          <img src="@/assets/photos/comp/sofia.jpg" alt="">
        </div>
      </div>
      <div class="item">
        <div class="description">
          <span class="title">Organic</span>
          <p>Organic - это документальный проект Егора Субботина о флоре и фауне разных штатов Америки, выигравший
            множество наград по всему миру. В конце 2022 года мы приняли участие в разработке аудио-визуальной концепции
            проекта, создали музыкальное сопровождение к трейлеру и промо. </p>
          <p>А сейчас продолжаем работу над экранизацией в формате сериала на площадки Netflix и Amazon.</p>

          <div class="info">
            <span>Яков Шостакович </span>
            <a href="https://vimeo.com/915796876" target="_blank" rel="noopener noreferrer">Смотреть</a>
          </div>
        </div>
        <div class="pic">
          <img src="@/assets/photos/comp/organic.jpg" alt="">
        </div>
      </div>

    </div>

    <p class="last-info">О некоторых проектах мы пока не можем рассказать из-за НДА и прочих юридических прелестей.
      Однако всё впереди и будьте уверены, что это не только самый интересный, но и
      самый обновляемый раздел на сайте.</p>


  </main>
</template>

<style lang="scss" scoped>
.content-container {

  margin-top: 177px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;


  .item {
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: space-between;

    .description {
      .title {
        font-weight: 600;
        font-size: 22px;
        line-height: 149%;
        margin-bottom: 25px;
        display: block;
      }

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 149%;
        margin-bottom: 25px;
      }

      .info {

        display: flex;
        justify-content: space-between;

        font-weight: 300;
        font-size: 12px;
        line-height: 149%;
        margin-top: auto;
        margin-bottom: 0px;

        a {
          text-decoration: none;
          font-weight: 500;
          color: #fff;
        }
      }
    }

    .pic {
      box-shadow: 0 4px 6px 8px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      height: 700px;
      overflow: hidden;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &:nth-child(2n) {
      flex-direction: column-reverse;
    }
  }

}

.last-info {
  margin-left: auto;
  margin-right: auto;
  margin-top: 122px;
  margin-bottom: 220px;
  width: 820px;
  font-weight: 400;
  font-size: 15px;
  line-height: 149%;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .content-container {

    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 40px;


    .item {

      .pic {
        height: 432px;
      }

      &:nth-child(2n) {
        flex-direction: column;
      }
    }
  }

  .last-info {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: auto;
    font-size: 12px;
    line-height: 149%;
  }
}
</style>
