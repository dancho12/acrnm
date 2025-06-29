<template>
  <main>
    <Logo />
    <div class="title-block">
      <h3>{{ $t('portfolio.title') }}</h3>
      <span class="subtitle">{{ $t('portfolio.subtitle') }}</span>
      <p>{{ $t('portfolio.description') }}</p>
    </div>
    <div class="tabs">
      <span class="tab" :class="{ selected: tab == 'watch' }" @click="tab = 'watch'">{{ $t('portfolio.tabWatch') }}</span>
      <span>|</span>
      <span class="tab" :class="{ selected: tab == 'listen' }" @click="tab = 'listen'">{{ $t('portfolio.tabListen') }}</span>
    </div>
    <div v-if="tab == 'watch'" class="content-container marg-ar">

      <div class="item" v-for="(item, key) in watch_items" :key="item" :class="{ open: key == open_id && open_id != null }">
        <div class="description">
          <span class="title" v-html="item.name"></span>
          <p v-html="item.info1"></p>
          <p v-html="item.info2"></p>

          <div class="info">
            <span>{{ item.author }}</span>
            <a v-if="item.link != undefined" :href="item.link" target="_blank" rel="noopener noreferrer">{{ $t('portfolio.tabWatch') }}</a>
          </div>
        </div>
        <div class="pic" @click="open_item(key)">
          <img :src="item.img" alt="" :class="item?.class">
          <div class="open-btn"></div>
        </div>
      </div>

    </div>
    <div v-if="tab == 'listen'" class="listen-container">
      <template v-for="album in albums" :key="album">
        <MusicPlayer :cover="album.cover" :title="album.title" :vinyl="album.vinyl" :tracks="album.tracks" :reverse="album.reverse" :link="album.link" />
      </template>

    </div>

    <p class="last-info">{{ $t('portfolio.lastInfo') }}</p>


  </main>
</template>

<script>
import { defineComponent, inject, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'


export default defineComponent({
  name: 'PortfolioView',
  setup() {
    const { is_light_theme } = inject("theme");

    const tab = ref('watch');

    const open_id = ref(null);

    function open_item(key) {
      if (open_id != null) {
        if (open_id.value == key) {
          open_id.value = null
        } else {
          open_id.value = key
        }
      } else {
        open_id.value = null
      }
    }
    const { t } = useI18n()
    const watch_items = computed(() => ([
      {
        name: t('portfolio.watchItems.atomic.name'),
        info1: t('portfolio.watchItems.atomic.info1'),
        info2: t('portfolio.watchItems.atomic.info2'),
        author: t('portfolio.watchItems.atomic.author'),
        link: "https://www.youtube.com/watch?v=7x2Y3Uq8Mko",
        img: new URL("@/assets/photos/comp/atomic-2-min.png", import.meta.url).href,
        class: "atomic"
      },
      {
        name: t('portfolio.watchItems.hell.name'),
        info1: t('portfolio.watchItems.hell.info1'),
        info2: t('portfolio.watchItems.hell.info2'),
        author: t('portfolio.watchItems.hell.author'),
        link: "https://youtu.be/IU0AJHgbldg",
        img: new URL("@/assets/photos/comp/hell-min.png", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.p&g.name'),
        info1: t('portfolio.watchItems.p&g.info1'),
        info2: t('portfolio.watchItems.p&g.info2'),
        author: t('portfolio.watchItems.p&g.author'),
        img: new URL("@/assets/photos/comp/p&g.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.pyaterochka.name'),
        info1: t('portfolio.watchItems.pyaterochka.info1'),
        info2: t('portfolio.watchItems.pyaterochka.info2'),
        author: t('portfolio.watchItems.pyaterochka.author'),
        link: "https://cloutstudio.ru/project/5ka", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/pyaterochka.png", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.bb.name'),
        info1: t('portfolio.watchItems.bb.info1'),
        info2: t('portfolio.watchItems.bb.info2'),
        author: t('portfolio.watchItems.bb.author'),
        img: new URL("@/assets/photos/comp/bb.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.iqos.name'),
        info1: t('portfolio.watchItems.iqos.info1'),
        info2: t('portfolio.watchItems.iqos.info2'),
        author: t('portfolio.watchItems.iqos.author'),
        img: new URL("@/assets/photos/comp/iqos.png", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.fitmost.name'),
        info1: t('portfolio.watchItems.fitmost.info1'),
        info2: t('portfolio.watchItems.fitmost.info2'),
        author: t('portfolio.watchItems.fitmost.author'),
        img: new URL("@/assets/photos/comp/fitmost.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.sofia.name'),
        info1: t('portfolio.watchItems.sofia.info1'),
        info2: t('portfolio.watchItems.sofia.info2'),
        author: t('portfolio.watchItems.sofia.author'),
        link: "https://sofiadoors.com/blog/solyaris/",
        img: new URL("@/assets/photos/comp/sofia.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.volna.name'),
        info1: t('portfolio.watchItems.volna.info1'),
        info2: t('portfolio.watchItems.volna.info2'),
        author: t('portfolio.watchItems.volna.author'),
        link: "https://volna.ae/", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/volna.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.braslet.name'),
        info1: t('portfolio.watchItems.braslet.info1'),
        info2: t('portfolio.watchItems.braslet.info2'),
        author: t('portfolio.watchItems.braslet.author'),
        img: new URL("@/assets/photos/comp/braslet.png", import.meta.url).href,
        class: "braslet"
      },
      {
        name: t('portfolio.watchItems.storyscape.name'),
        info1: t('portfolio.watchItems.storyscape.info1'),
        info2: t('portfolio.watchItems.storyscape.info2'),
        author: "Яков Шостакович ",
        img: new URL("@/assets/photos/comp/storyscape.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.newland.name'),
        info1: t('portfolio.watchItems.newland.info1'),
        info2: t('portfolio.watchItems.newland.info2'),
        author: t('portfolio.watchItems.newland.author'),
        link: "https://youtu.be/y_YdupsmU-A?si=heQwXnWJ-jqeAcUd", // Замените на реальную ссылку
        img: new URL("@/assets/photos/comp/newland.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.organic.name'),
        info1: t('portfolio.watchItems.organic.info1'),
        info2: t('portfolio.watchItems.organic.info2'),
        author: t('portfolio.watchItems.organic.author'),
        link: "https://vimeo.com/915796876",
        img: new URL("@/assets/photos/comp/organic.jpg", import.meta.url).href,
      },
      {
        name: t('portfolio.watchItems.elk.name'),
        info1: t('portfolio.watchItems.elk.info1'),
        info2: t('portfolio.watchItems.elk.info2'),
        author: t('portfolio.watchItems.elk.author'),
        link: "https://example.com/elk", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/elk.jpg", import.meta.url).href,
        class: "elk"
      },


    ]));


    const albums = computed(() => ([
      {
        title: t('portfolio.listen.albums.atomic.title'),
        cover: new URL("@/assets/photos/comp/atomic-2-min.png", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl.png", import.meta.url).href,
        link: {
          title: t('portfolio.listen.albums.atomic.link.title'),
          href: t('portfolio.listen.albums.atomic.link.href')
        },
        tracks: [
          {
            title: "ScaryON - BEA-2 Theme",
            audio: new URL("@/assets/audio/ScaryON - BEA-2 Theme.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: "Organic",
        cover: new URL("@/assets/photos/comp/organic.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-organic.png", import.meta.url).href,
        reverse: true,
        tracks: [
          {
            title: "Organic - Essence Of Time",
            audio: new URL("@/assets/audio/Organic - Essence Of Time.mp3", import.meta.url).href,
          },
          {
            title: "Organic - Manatee",
            audio: new URL("@/assets/audio/Organic - Manatee.mp3", import.meta.url).href,
          },
          {
            title: "Organic - Apocalypse",
            audio: new URL("@/assets/audio/Organic - Apocalypse.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: t('portfolio.listen.albums.newland.title'),
        cover: new URL("@/assets/audio/covers/newland.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-newland.png", import.meta.url).href,

        tracks: [
          {
            title: "New Land - Main Theme",
            audio: new URL("@/assets/audio/New Land - Main Theme.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: t('portfolio.listen.albums.braslet.title'),
        cover: new URL("@/assets/audio/covers/braslet.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-braslet.png", import.meta.url).href,
        reverse: true,
        tracks: [
          {
            title: "Браслет - Салют Вера",
            audio: new URL("@/assets/audio/Браслет - Салют Вера.mp3", import.meta.url).href,
          },
          {
            title: "Браслет - Main Theme",
            audio: new URL("@/assets/audio/Браслет - Main Theme.mp3", import.meta.url).href,
          },
          {
            title: "Браслет - Спа",
            audio: new URL("@/assets/audio/Браслет - Спа.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: t('portfolio.listen.albums.yakov.title'),
        cover: new URL("@/assets/audio/covers/favorite.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-favorite.png", import.meta.url).href,
        link: {
          title: t('portfolio.listen.albums.yakov.link.title'),
          href: t('portfolio.listen.albums.yakov.link.href')
        },
        tracks: [
          {
            title: "Яков Шостакович - Julia ",
            audio: new URL("@/assets/audio/Яков Шостакович - Julia.mp3", import.meta.url).href,
          },
          {
            title: "Яков Шостакович - Avenge ",
            audio: new URL("@/assets/audio/Яков Шостакович - Avenge.mp3", import.meta.url).href,
          },
          {
            title: "Яков Шостакович - Full Circle",
            audio: new URL("@/assets/audio/Яков Шостакович - Full Circle.mp3", import.meta.url).href,
          },
          {
            title: "Яков Шостакович - Сирин",
            audio: new URL("@/assets/audio/Яков Шостакович - Сирин.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: "Адская Школа",
        cover: new URL("@/assets/audio/covers/ad.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-ad.png", import.meta.url).href,
        reverse: true,
        tracks: [
          {
            title: "Адская Школа - Main Theme",
            audio: new URL("@/assets/audio/Адская Школа - Main Theme.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: "Fantasy RPG:<br>Inspired",
        cover: new URL("@/assets/audio/covers/FANTASY-RPG.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-FANTASY-RPG.png", import.meta.url).href,
        tracks: [
          {
            title: "Fantasy RPG - City Market",
            audio: new URL("@/assets/audio/Fantasy RPG - City Market.mp3", import.meta.url).href,
          },
          {
            title: "Fantasy RPG - Mead and Bread",
            audio: new URL("@/assets/audio/Fantasy RPG - Mead and Bread.mp3", import.meta.url).href,
          },
          {
            title: "Fantasy RPG - Dancing With Fire",
            audio: new URL("@/assets/audio/Fantasy RPG - Dancing With Fire.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: t('portfolio.listen.albums.oven.title'),
        cover: new URL("@/assets/audio/covers/oven.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-oven.png", import.meta.url).href,
        reverse: true,
        link: {
          title: t('portfolio.listen.albums.oven.link.title'),
          href: t('portfolio.listen.albums.oven.link.href')
        },
        tracks: [
          {
            title: "Овен - Karen",
            audio: new URL("@/assets/audio/Овен - Karen.mp3", import.meta.url).href,
          },
          {
            title: "Овен - Алконост",
            audio: new URL("@/assets/audio/Овен - Алконост.mp3", import.meta.url).href,
          },
          {
            title: "Овен - Бог Мой",
            audio: new URL("@/assets/audio/Овен - Бог Мой.mp3", import.meta.url).href,
          },
        ]
      },
    ]));



    return {
      is_light_theme,
      tab,
      watch_items,
      albums,
      open_id,
      open_item
    }
  }
})
</script>

<style lang="scss" scoped>
.tabs {
  font-weight: 300;
  font-size: 15px;
  line-height: 149%;
  display: flex;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  width: max-content;

  .tab {
    cursor: pointer;

    min-width: 120px;

    &:first-of-type {
      text-align: end;
    }

    &:last-of-type {
      text-align: start;
    }


    &:hover,
    &.selected {
      font-weight: 500;
    }
  }


}

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
          color: var(--text-color);
        }
      }
    }

    .pic {
      box-shadow: 0 4px 6px 8px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      height: 700px;
      overflow: hidden;
      flex-shrink: 0;

      @include is-light-theme() {
        box-shadow: 0 4px 7px 0 rgba(202, 212, 253, 0.31);
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .open-btn {
        display: none;
      }
    }

    .description {
      height: -webkit-fill-available;
      display: flex;
      flex-direction: column;

      p {
        margin-top: 0px;
      }

      .info {
        margin-top: auto;
        margin-bottom: 0px;
      }
    }

    &:nth-child(2n) {
      flex-direction: column-reverse;

      .pic {
        margin-bottom: auto;
        margin-top: 0px;
      }
    }

    @include is-mobile() {


      flex-direction: column-reverse;
      transition: height 0.3s ease;
      position: relative;
      gap: 0px;

      .pic {
        height: 150px;
        transition: height 0.3s ease;
        position: relative;

        box-shadow: unset;

        @include is-light-theme() {
          box-shadow: 0 4px 10px 0 rgba(72, 41, 102, 0.25);
        }

        img {
          &.atomic {
            position: absolute !important;
            bottom: 0px !important;
            height: unset !important;
          }

          &.elk {
            position: absolute !important;
            bottom: -17px !important;
            height: unset !important;
          }

          &.braslet {
            position: absolute !important;
            bottom: -45px !important;
            height: unset !important;
          }
        }


        .open-btn {
          display: block;
          position: absolute;
          bottom: 0px;
          right: 0px;

          content: '';
          min-width: 52px;
          min-height: 52px;
          max-width: 52px;
          max-height: 52px;
          mask-image: url(@/assets/icons/portfolio-arrow.svg);
          -webkit-mask-image: url(@/assets/icons/portfolio-arrow.svg);
          background-repeat: no-repeat;

          background-color: #fff;
          transition: rotate 0.3s;
          rotate: 0deg;
        }
      }

      .description {
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: translateY(-10px);
        height: 0px;
      }

      // &.open {

      // }

      &.open .description {
        display: block;
        opacity: 1;
        transform: translateY(0);
        height: auto;
        margin-top: 25px;
      }

      &.open .pic {
        height: 432px;

        .open-btn {
          transition: rotate 0.3s;
          rotate: 180deg;
          // transform: rotate(180deg);
        }

        // img {
        //   position: unset !important;
        //   height: 100% !important;
        // }
      }



      &:nth-child(2n) {
        flex-direction: column-reverse;
      }

    }
  }

  @include is-mobile() {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 17px;

  }


}

.listen-container {
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-top: 87px;
  margin-left: 15px;
  margin-right: 15px;
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

  @include is-mobile() {
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
