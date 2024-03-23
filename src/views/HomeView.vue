<template>
  <main>
    <div class="logo">
      <img class="logo-main" src="@/assets/acrnm-logo-new.png" alt="">
      <img class="logo-back" src="@/assets/logo-back.png" alt="">
      <span class="logo-text">Аудио-Визуальная Лаборатория<br><br>Графика и Звук</span>
    </div>

    <div class="macaroni-container"><img id="macaroni1" src="@/assets/macaroni1.png" alt=""></div>
    <div class="main-text">
      <h2>Коротко о главном</h2>
      <p>Мы занимаемся созданием аудио и CG-графики для рекламы и кино. Благодаря точечному подходу к этим двум сферам -
        мы получаем наилучший результат.</p>
    </div>

    <div class="what-we-create">
      <h2>Что мы делаем</h2>
      <span class="sub">Вместе или по отдельности</span>
      <div class="cards">
        <div class="card">
        </div>
        <div class="card">
        </div>
        <div class="card">
        </div>
      </div>
    </div>



  </main>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: 395px;
  height: 395px;
  display: flex;
  margin: 50px auto;
  overflow: hidden;

  &-back {
    position: absolute;
    width: 938px;
    mix-blend-mode: lighten;
    top: calc(50% - 264px);
    left: calc(50% - 469px);
  }

  &-main {
    width: 344px;
    margin: auto;
  }

  &-text {
    position: absolute;
    bottom: 55px;
    left: calc(50% - 165px);
    width: 330px;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
  }
}

.macaroni-container {
  position: relative;
}

#macaroni1 {
  position: absolute;
  top: -50px;
  left: calc(50% - 50vw);
  mix-blend-mode: lighten;
  opacity: 0.6;
  width: 100vw;
  z-index: -2;
}

.main-text {
  text-align: center;
  width: 750px;
  margin: 0 auto;
}

.what-we-create {

  & h2 {
    text-align: center;
  }

  & .sub {
    font-size: 15px;
    text-align: center;
    display: block;
  }

  & .cards {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    & .card {
      margin: 0 auto;
      width: 350px;
      height: 98px;
      backdrop-filter: blur(80px);
      border: solid 2px #0f0;
      box-sizing: border-box;
      border-radius: 20px;
      border-image-slice: 40;
      border-image-repeat: round;
      border-image-width: 10px;
      border-image-source: url(/src/assets/test_bg.png);
    }

  }
}
</style>
