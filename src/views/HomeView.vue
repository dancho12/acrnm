<template>
  <main>
    <div class="logo">
      <template v-if="theme_mode == 'dark'">
        <img class="logo-main" src="@/assets/acrnm-logo-new.png" alt="">
        <img class="logo-back" src="@/assets/logo-back.png" alt="">
      </template>
      <template v-else>
        <img class="logo-main" src="@/assets/acrnm-logo-new-black.png" alt="">
        <img class="logo-back" src="@/assets/logo-back-light.png" alt="">
      </template>

      <span class="logo-text">Music & Sound<br>Production</span>
    </div>
    <div class="main-text">
      <h2>Коротко о главном</h2>
      <p>Мы занимаемся музыкой и звукорежиссурой для рекламы и кино, выставок и театра. Благодаря точечному подходу к этим двум сферам - мы получаем наилучший результат.</p>
    </div>

    <div class="what-we-create marg-ar">
      <div class="cards">
        <div class="card">
          <span class="title">Музыка</span>
          <p>Классические и современные жанры, Своя студия</p>
          <p>Наше основное направление. Делаем музыкальное оформление для рекламы, кино и мероприятий</p>
        </div>
        <div class="card">
          <span class="title">Звук</span>
          <p>Звукорежиссура площадки & постпродакшна, Саунд-дизайн</p>
          <p>Одна из важнейших частей производства контента. Делаем всё, что связано со звуком</p>
        </div>
        <div class="card">
          <span class="title">Продюсирование</span>
          <p>Ведение проектов и управление подрядами</p>
          <p>Сами найдём необходимых профессионалов или поможем с исполнением</p>
        </div>
      </div>
    </div>

    <div class="cases">
      <h3>Наши работы</h3>
      <p>Лучшее за последнее время</p>


      <Carousel :wrap-around="true" :breakpoints="breakpoints" ref="myCarousel">
        <Slide v-for="slide in photos1 " :key="slide">
          <a :href="slide.url" target="_blank" rel="noopener noreferrer" class="item"><img :src="get_url(slide.img)" alt=""></a>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="showreel marg-ar">
      <h3>Шоукейсы</h3>
      <p>Наша работа - не просто написать пару нот в секвенсоре и сгенерировать
        абстрактную картинку нейросетью, а провести проект от задумки до показа.
        И вот как это выглядит:</p>
      <div class="video play" @click="open_video_on_full('https://www.youtube.com/embed/r3i-5_7ZwFA')">
        <img src="@/assets/photos/comp/showreel.jpg" alt="showreel">
      </div>
      <span class="title">ACRNM LAB Showreel 2023</span>
    </div>

    <!-- <div class="how-it-works marg-ar">
      <h3>Как всё это работает</h3>
      <span class="subtitle">Весь процесс от А до Я</span>
      <ul>
        <li>Вы присылаете нам все необходимые материалы</li>
        <li>Мы обсуждаем проект любым удобным вам способом (лично или в сети)</li>
        <li>Составляем тех. задание, референсы, сроки и бюджет</li>
        <li>Выполняем задание и радуемся вместе</li>
      </ul>
    </div> -->

    <div class="cases">



      <Carousel :wrap-around="true" :breakpoints="breakpoints" ref="myCarousel2">
        <Slide v-for="slide in showcases " :key="slide">
          <div class="item play" @click="open_video_on_full(slide.url)"><img :src="get_url(slide.img)" alt=""></div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <span class="title">MUSIC, SOUNDDESIGN & CG SWOWCASES</span>
    </div>
    <div class="contact-us">
      <span class="title">Связаться с нами</span>
      <span class="tel">+7 (915) 304-87-71</span>
      <span class="mail">pr.acrnm@gmail.com</span>
      <div class="icons">
        <a href="https://t.me/yakov_ovven" target="_blank" rel="noopener noreferrer">
          <div class="icon tele"></div>
        </a>
        <a href="https://www.instagram.com/acrnm.mus/" target="_blank" rel="noopener noreferrer">
          <div class="icon insta"></div>
        </a>
        <a href="https://wa.me/+79153048771" target="_blank" rel="noopener noreferrer">
          <div class="icon whatsapp"></div>
        </a>
      </div>
    </div>


  </main>
  <div class="full-screen-video" v-if="open_video_full" @click="close_video_on_full()">
    <iframe :src="open_video_full_url" @click.stop.prevent="">
    </iframe>
  </div>
</template>
<script>

import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { defineComponent, ref, inject } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const myCarousel = ref(null)
const myCarousel2 = ref(null)

export default defineComponent({
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {

    const { theme_mode } = inject("theme");
    const open_video_full = ref(false);
    const open_video_full_url = ref('');

    function open_video_on_full(url) {

      open_video_full_url.value = url;
      open_video_full.value = true;
    }
    function close_video_on_full() {

      open_video_full_url.value = '';
      open_video_full.value = false;
    }

    const photos1 = [
      {
        img: 'organic.jpg',
        url: 'https://egorsubbotin.tilda.ws/organic'
      },
      {
        img: 'atomic.jpg',
        url: 'https://www.youtube.com/watch?v=7x2Y3Uq8Mko'
      },
      {
        img: 'sofia.jpg',
        url: 'https://sofiadoors.com/blog/solyaris'
      },
      {
        img: 'elk.jpg',
        url: 'https://www.youtube.com/watch?v=alBh2lwpQyU'
      },
      {
        img: 'oldmen_rule.jpg',
        url: 'https://www.youtube.com/watch?v=lA8lNvTsde0'
      },
    ]
    const showcases = [
      {
        img: 'AD1.jpg',
        url: 'https://www.youtube.com/embed/bzKXPnmVX8E'
      },
      {
        img: 'SHORT 1.jpg',
        url: 'https://www.youtube.com/embed/K7hgMUQqGpo'
      },
      {
        img: 'AD2.jpg',
        url: 'https://www.youtube.com/embed/23SqcHIGDxg'
      },
      {
        img: 'SHORT 2.jpg',
        url: 'https://www.youtube.com/embed/m1RJixlBIWI'
      },
      {
        img: 'SHORT.jpg',
        url: 'https://www.youtube.com/embed/uNZqu9jSbAE'
      },
    ]


    function get_url(img) {
      return new URL(`../assets/photos/comp/${img}`, import.meta.url).href;
    }

    const breakpoints = Object({

      0: {
        itemsToShow: 1.5,
      },
      768: {
        itemsToShow: 2.5,
      },
      1024: {
        itemsToShow: 3,
      },
    })

    return { photos1, showcases, get_url, breakpoints, open_video_full, open_video_full_url, open_video_on_full, close_video_on_full, theme_mode }
  }
})
</script>


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
    mix-blend-mode: var(--mix-blend-mode);
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

.main-text {
  text-align: center;
  width: 750px;
  margin: 0 auto;
}

.what-we-create {

  margin-top: 40px;

  & h2 {
    text-align: center;
    margin-bottom: 2px
  }

  & .sub {
    font-weight: 200;
    font-size: 9px;
    text-align: center;
    display: block;
  }

  & .cards {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    & .card {
      width: 318px;
      height: 128px;
      background-image: url('@/assets/back/home-page-info.png');
      padding: 16px;
      background-size: contain;
      background-repeat: no-repeat;
      transition: background-image 0.3s ease;

      @include is-light-theme() {
        background-image: url('@/assets/back/home-page-info-light.png');
      }

      .title {
        font-weight: 500;
        font-size: 16px;
        display: block;
        margin-bottom: 7px;
      }

      p {
        margin-top: 0px;
        font-weight: 275;
        font-size: 12px;
        line-height: 123%;
      }
    }

  }
}

.cases {
  text-align: center;
  margin-top: 85px;

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  & .item {
    box-shadow: 0 4px 6px 8px rgba(0, 0, 0, 0.25);
    height: 495px;
    width: 350px;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 15px;

    @include is-light-theme() {
      box-shadow: 0 4px 7px 0 rgba(202, 212, 253, 0.31);
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 65px;
    margin-top: 10px;

  }

  & .title {
    display: block;
    margin-top: 20px;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    color: #a4a4a4;

    @include is-light-theme() {
      color: var(--text-color);
    }
  }
}


.showreel {
  text-align: center;

  margin-top: 90px;

  p {
    margin-bottom: 70px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  .video {
    box-shadow: 0 4px 6px 8px rgba(0, 0, 0, 0.25);
    height: 490px;
    border-radius: 20px;
    overflow: hidden;

    @include is-light-theme() {
      box-shadow: 0 4px 7px 0 rgba(202, 212, 253, 0.31);
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .title {
    display: block;
    margin-top: 20px;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    color: #a4a4a4;

    @include is-light-theme() {
      color: var(--text-color);
    }
  }
}

.play {
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 26px);
    left: calc(50% - 26px);
    min-width: 52px;
    min-height: 52px;
    max-width: 52px;
    max-height: 52px;
    mask-image: url(@/assets/icons/play_outline_24px.svg);
    -webkit-mask-image: url(@/assets/icons/play_outline_24px.svg);
    background-color: white;
    z-index: 100;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

  }
}

.how-it-works {
  margin-top: 90px;
  text-align: center;

  h3 {
    margin-bottom: 0px;
  }

  & .subtitle {
    display: block;
    font-weight: 300;
    font-size: 9px;
    margin-bottom: 20px;
  }

  ul {
    text-align: left;
    font-weight: 300;
    font-size: 15px;
    line-height: 149%;
    margin: 0 auto;
    width: max-content;
  }
}

.contact-us {
  margin-top: 120px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 75px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 24px;
  }

  .tel {
    margin-bottom: 9px;
  }

  a {
    color: #fff;
  }

  .icons {
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    display: flex;
    gap: 16px;

    & .icon {
      content: '';
      min-width: 30px;
      min-height: 30px;
      max-width: 30px;
      max-height: 30px;

      background-color: var(--text-color);
    }

    .tele {
      mask-image: url(@/assets/icons/tele.svg);
      -webkit-mask-image: url(@/assets/icons/tele.svg);
    }

    .insta {
      mask-image: url(@/assets/icons/insta.svg);
      -webkit-mask-image: url(@/assets/icons/insta.svg);
    }

    .whatsapp {
      mask-image: url(@/assets/icons/whatsapp.svg);
      -webkit-mask-image: url(@/assets/icons/whatsapp.svg);
    }
  }
}

@media screen and (max-width: 768px) {
  .main-text {
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }

  .what-we-create {

    & .cards {
      margin-top: 25px;
      flex-direction: column;
      gap: 10px;

      .card {
        width: auto;
      }
    }
  }

  .cases {

    margin-top: 40px;

    & .item {
      height: 335px;
      margin-left: 11px;
      margin-right: 11px;
    }

    p {
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 40px
    }
  }

  .showreel {
    margin-top: 68px;

    p {
      margin-bottom: 18px;
    }

    .video {
      height: 155px;
    }

    .title {
      margin-top: 9px;
      font-size: 9px;
    }
  }

  .how-it-works {
    margin-top: 68px;
    margin-bottom: 78px;

    ul {
      font-size: 12px;
      width: inherit;
      padding-left: 18px;
    }
  }

  .contact-us {
    padding-bottom: 20px;
  }
}
</style>
