<template>
  <main>
    <div class="logo">
      <template v-if="!is_light_theme">
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
      <h2>{{ $t('home.mainTitle') }}</h2>
      <p>{{ $t('home.mainText') }}</p>
    </div>

    <div class="what-we-create marg-ar">
      <div class="cards">
        <div class="card">
          <span class="title">{{ $t('home.cards.card1.title') }}</span>
          <p v-html="$t('home.cards.card1.desc1')"></p>
          <p v-html="$t('home.cards.card1.desc2')"></p>
        </div>
        <div class="card">
          <span class="title">{{ $t('home.cards.card2.title') }}</span>
          <p v-html="$t('home.cards.card2.desc1')"></p>
          <p v-html="$t('home.cards.card2.desc2')"></p>
        </div>
        <div class="card">
          <span class="title">{{ $t('home.cards.card3.title') }}</span>
          <p v-html="$t('home.cards.card3.desc1')"></p>
          <p v-html="$t('home.cards.card3.desc2')"></p>
        </div>
      </div>
    </div>

    <div class="cases">
      <h3>{{ $t('home.ourWorks') }}</h3>
      <p>{{ $t('home.bestRecent') }}</p>


      <Carousel :wrap-around="true" :breakpoints="breakpoints" ref="myCarousel">
        <Slide v-for="slide in photos1" :key="slide">
          <a :href="slide.url" target="_blank" rel="noopener noreferrer" class="item"><img :src="get_url(slide.img)" alt=""></a>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="logos-container">
      <div class="companies-logo" :class="{ 'desk-animated': logos.length > 7 }" ref="logoContainer">
        <img v-for="(logo, index) in logos" :key="'logo-' + index" :src="logo.src" :alt="logo.alt" />
      </div>
    </div>

    <div class="showreel marg-ar">
      <h3>{{ $t('home.showcases') }}</h3>
      <p>{{ $t('home.showreelText') }}</p>
      <div class="video play" @click="open_video_on_full('https://www.youtube.com/watch?v=na8apsjd-bs')">
        <img src="@/assets/photos/comp/showreel.jpg" alt="showreel">
      </div>
      <span class="title">{{ $t('home.showreelTitle') }}</span>
    </div>

    <div class="cases">



      <Carousel :wrap-around="true" :breakpoints="breakpoints" ref="myCarousel2">
        <Slide v-for="slide in showcases" :key="slide">
          <div class="item play" @click="open_video_on_full(slide.url)"><img :src="get_url(slide.img)" alt=""></div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <span class="title">{{ $t('home.showcasesTitle') }}</span>
    </div>
    <div class="contact-us">
      <span class="title">{{ $t('home.contactUs') }}</span>
      <span v-if="$i18n.locale !== 'en'" class="tel">+7 (915) 304-87-71</span>
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
import { defineComponent, ref, inject, onMounted, watch } from 'vue'
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

    const { theme_mode, is_light_theme } = inject("theme");
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

    const logoContainer = ref(null);

    const logos = ref([
      { src: new URL('@/assets/icons/companies/5.svg', import.meta.url).href, alt: '5' },
      { src: new URL('@/assets/icons/companies/exmo.svg', import.meta.url).href, alt: 'exmo' },
      { src: new URL('@/assets/icons/companies/iri.svg', import.meta.url).href, alt: 'iri' },
      { src: new URL('@/assets/icons/companies/ivi.svg', import.meta.url).href, alt: 'ivi' },
      { src: new URL('@/assets/icons/companies/mfs.svg', import.meta.url).href, alt: 'mfs' },
      { src: new URL('@/assets/icons/companies/p_g.svg', import.meta.url).href, alt: 'p_g' },
      { src: new URL('@/assets/icons/companies/vk.svg', import.meta.url).href, alt: 'vk' },
    ]);


    const setupCarousel = () => {

      const container = logoContainer.value;
      const originalLogos = Array.from(container.children);

      // Дублирование логотипов для бесшовности с добавлением класса
      originalLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        clone.classList.add('cloned');
        container.appendChild(clone);
      });

    };

    onMounted(setupCarousel);

    return {
      photos1,
      showcases,
      get_url,
      breakpoints,
      open_video_full,
      open_video_full_url,
      open_video_on_full,
      close_video_on_full,
      is_light_theme,
      logoContainer,
      logos,
    }
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
    width: 414px;
    mix-blend-mode: var(--mix-blend-mode);
    // top: calc(50% - 264px);
    // left: calc(50% - 469px);

    @include is-mobile() {
      width: 375px;
      left: calc(50% - 187.5px);
    }
  }

  @include is-mobile() {
    width: 100vw;
  }

  &-main {
    width: 344px;
    margin: auto;

    @include is-mobile() {
      width: 320px;
    }
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

  @include is-mobile() {
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
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

    @include is-mobile() {
      margin-top: 25px;
      flex-direction: column;
      gap: 10px;

      .card {
        margin-left: auto;
        margin-right: auto;
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

  @include is-mobile() {
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
}

.logos-container {
  position: relative;
  overflow: hidden;

  .companies-logo {
    display: flex;
    justify-content: space-between;
    gap: 0px;


    & img {
      width: 170px;
      transition: all 0.3s ease;
      filter: var(--text-color-filter);

      &.cloned {
        display: none;
      }
    }

    &.desk-animated {
      width: max-content;
      animation: scroll 20s linear infinite;

      & img {
        margin-left: 5px;
        margin-right: 5px;

        &.cloned {
          display: unset !important;
        }
      }
    }


    @include is-mobile() {
      width: max-content;
      animation: scroll 20s linear infinite;
      gap: 0px;

      & img {
        margin-left: 5px;
        margin-right: 5px;

        &.cloned {
          display: unset;
        }
      }
    }
  }
}


@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%); // Половина длины для бесшовной прокрутки
  }
}

.showreel {
  text-align: center;

  margin-top: 0px !important;

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

  @include is-mobile() {
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

    @include is-mobile {
      opacity: 1;
    }
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

  @include is-mobile() {
    margin-top: 68px;
    margin-bottom: 78px;

    ul {
      font-size: 12px;
      width: inherit;
      padding-left: 18px;
    }
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

  @include is-mobile() {
    padding-bottom: 20px;
  }
}
</style>
