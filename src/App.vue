<template>
  <main>
    <div class="video-block">
      <video autoplay muted loop playsinline class="video-block-mp4">
        <source src="./assets/videoplayback.mp4" type="video/mp4">
      </video>
      <img class="video-block-logo" src="./assets/acrnm logo.png" alt="logo">
    </div>



    <div class="text-block gradient">
      <div class="text-block-content">
        <h3>ACRNM</h3>
        <p>Мы специализируемся на создании музыкального и звукового сопровождения к фильмам, сериалам и рекламе.<br><br>
          Совместно с талантливыми звукорежиссёрами и саунддизайнерами — мы проводим проект от начала и до конца.<br><br>
          И вот несколько из них:</p>
      </div>
    </div>

    <div>
      <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000" ref="myCarousel">
        <Slide v-for="slide in  photos1 " :key="slide">
          <a :href="slide.url" target="_blank" rel="noopener noreferrer" class="carousel__item"><img
              :src="get_url(slide.img)" alt=""></a>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="text-block gradient">
      <div class="text-block-content">
        <h3>СТИЛЬ</h3>
        <p>Каждая работа уникальна, и приносит что-то новое в мир творчества или коммерции.<br><br> Однако именно единство
          стиля создаёт впечатление целостности происходящего.<br><br> И у нас оно есть.</p>
      </div>
    </div>
    <div class="photo-block">
      <iframe src="https://www.youtube.com/embed/r3i-5_7ZwFA">
      </iframe>
      <span class="photo-block-subtitle">MUSIC AND SOUNDDESIGN SHOWREEL 2023</span>
    </div>
    <div class="text-block gradient">
      <div class="text-block-content">
        <h3>МУЗЫКА & САУНД-ДИЗАЙН</h3>
        <p>Почти всегда то что мы видим - нераздельно с тем, что мы слышим.<br><br>Звук должен быть органичен картинке и
          самому себе, поэтому мы всегда стараемся обращаться к нашим звукооператорам и инженерам, чтобы провести звук от
          площадки до показа. </p>
      </div>
    </div>
    <div class="photos-block">
      <div class="photos-block-elem" @click="open_video_on_full('https://www.youtube.com/embed/qIFahO7KTSQ')">
        <img src="./assets/photos/comp/AD1.jpg" alt="music_and_sound">
      </div>
      <div class="photos-block-elem" @click="open_video_on_full('https://www.youtube.com/embed/uNZqu9jSbAE')">
        <img src="./assets/photos/comp/SHORT.jpg" alt="music_and_sound">
      </div>
      <div class="photos-block-elem" @click="open_video_on_full('https://www.youtube.com/embed/23SqcHIGDxg')">
        <img src="./assets/photos/comp/AD2.jpg" alt="music_and_sound">
      </div>
      <span class="photo-block-subtitle">MUSIC, SOUNDDESIGN & VOICEOVER SHOWCASES</span>
    </div>
    <div class="text-block gradient">
      <div class="text-block-contacts">
        <h3>КОНТАКТЫ</h3>
        <span>+7 915 304 87 71</span>
        <span>pr.acrnm@gmail.com</span>
        <div class="text-block-contacts-social">
          <a href="https://www.instagram.com/acrnm.mus/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/icons/Insta.svg" alt="">
          </a>
          <a href="https://t.me/yakov_ovven" target="_blank" rel="noopener noreferrer">
            <img src="./assets/icons/tele.svg" alt="">
          </a>
          <a href="https://wa.me/+79153048771" target="_blank" rel="noopener noreferrer">
            <img src="./assets/icons/whatsapp.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </main>

  <div class="full-screen-video" v-if="open_video_full" @click="close_video_on_full()">
    <iframe :src="open_video_full_url" @click.stop.prevent="">
    </iframe>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const myCarousel = ref(null)

export default defineComponent({
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {


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
        img: 'atomic.jpg',
        url: 'https://www.youtube.com/watch?v=7x2Y3Uq8Mko'
      },
      {
        img: 'elk.jpg',
        url: 'https://www.youtube.com/watch?v=alBh2lwpQyU'
      },
      {
        img: 'oldmen_rule.jpg',
        url: 'https://www.youtube.com/watch?v=lA8lNvTsde0'
      },
      {
        img: 'organic.jpg',
        url: 'https://egorsubbotin.tilda.ws/organic'
      },
    ]

    function get_url(img) {
      return new URL(`./assets/photos/comp/${img}`, import.meta.url).href;
    }

    const breakpoints = Object({

      0: {
        itemsToShow: 1,
      },
      768: {
        itemsToShow: 2.5,
      },
      1024: {
        itemsToShow: 3,
      },
      1280: {
        itemsToShow: 3.5,
      },
      1920: {
        itemsToShow: 4,
      },
    })

    return { photos1, get_url, breakpoints, open_video_full, open_video_full_url, open_video_on_full, close_video_on_full }
  }
})
</script>
<style lang="scss">
.carousel__item {
  cursor: pointer;
  height: 75vh;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


main {
  // position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.video-block {
  height: 70vh;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;

  &-logo {
    width: 500px;
    z-index: 1;
  }

  &-mp4 {
    position: absolute;
    z-index: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;

    &::-webkit-media-controls {
      display: none !important;
    }
  }
}

@media screen and (max-width: 768px) {}


.text-block {
  width: 100%;
  min-height: 400px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;


  display: flex;

  &-content {
    width: 750px;
    margin: auto;
  }

  &-contacts {
    display: flex;
    width: 750px;
    margin: auto;
    flex-direction: column;

    & h3 {
      font-size: 26px;
    }

    & span {
      font-size: 24px;
    }

    &-social {
      margin-top: 37px;
      display: flex;
      gap: 28px;
      margin-left: auto;
      margin-right: auto;

      & img {
        width: 48px;
      }
    }
  }
}

.photo-block,
.photos-block {

  position: relative;

  &-subtitle {
    color: #909090;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    width: 400px;
    position: absolute;
    bottom: -30px;
    left: calc(50% - 200px);
  }
}

.photo-block {
  height: 70vh;
  display: flex;

  & img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & iframe {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
  }
}

.photos-block {
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &-elem {
    position: relative;
    height: inherit;
    cursor: pointer;

    & img {
      margin: auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      top: calc(50% - 75px);
      left: calc(50% - 75px);
      min-width: 150px;
      min-height: 150px;
      max-width: 150px;
      max-height: 150px;
      mask-image: url(@/assets/icons/triangle-play.svg);
      -webkit-mask-image: url(@/assets/icons/triangle-play.svg);
      background-color: white;
      z-index: 100;
      opacity: 0.5;
    }

    &:hover {
      &::after {
        opacity: 0.9;
      }

    }


  }
}



.gradient {
  background: linear-gradient(180deg, #0C0D11 0%, #080808 70.31%, #0B0B0F 100%);
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
    top: calc(50% - 44px);
    content: '';
    min-width: 46px;
    min-height: 88px;
    max-width: 46px;
    max-height: 88px;
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

  background: linear-gradient(90deg, #0c0d1100 0%, #0b0b0f 100%);
}

.carousel__prev {
  background: linear-gradient(-90deg, #0c0d1100 0%, #0b0b0f 100%);
}


@media screen and (max-width: 768px) {
  .video-block {
    &-logo {
      width: 90vw;
    }
  }

  .photo-block {
    height: 230px;
  }

  .photos-block {
    height: unset;
    grid-template-columns: repeat(1, 1fr);

    &-elem {
      height: 230px;

      &::after {

        top: calc(50% - 60px);
        left: calc(50% - 60px);
        min-width: 120px;
        min-height: 120px;
        max-width: 120px;
        max-height: 120px;

      }
    }
  }

  .photo-block,
  .photos-block {

    position: relative;

    &-subtitle {
      color: #909090;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      width: 350px;
      position: absolute;
      bottom: -50px;
      height: 40px;
      left: calc(50% - 175px);
    }
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
      height: 30%;
    }
  }

  .carousel__prev,
  .carousel__next {
    width: 70px;

    &::after {
      top: calc(50% - 22px);
      min-width: 23px;
      min-height: 44px;
      max-width: 23px;
      max-height: 44px;
    }
  }

}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .photos-block {
    height: unset;
    grid-template-columns: repeat(2, 1fr);

    &-elem {
      height: 300px;

      &:last-of-type {
        grid-column: 1/4;
      }
    }
  }
}
</style>
