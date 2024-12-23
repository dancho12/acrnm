<template>
  <main>
    <Logo />
    <div class="title-block">
      <h3>Наши работы</h3>
      <span class="subtitle">Всё самое крутое что мы делали</span>
      <p>Пожалуй, самый увлекательный блок на этом сайте, ведь здесь собраны самые лучшие работы как целой команды, так
        и отдельных наших специалистов, рассказы о том, как они создавались, и то, что любят все - красивые картинки
        без лишней воды.</p>
    </div>
    <div class="tabs">
      <span class="tab" :class="{ selected: tab == 'watch' }" @click="tab = 'watch'">Посмотреть</span>
      <span>|</span>
      <span class="tab" :class="{ selected: tab == 'listen' }" @click="tab = 'listen'">Послушать</span>
    </div>
    <div v-if="tab == 'watch'" class="content-container marg-ar">

      <div class="item" v-for="item in watch_items" :key="item">
        <div class="description">
          <span class="title" v-html="item.name"></span>
          <p v-html="item.info1"></p>
          <p v-html="item.info2"></p>

          <div class="info">
            <span>{{ item.author }}</span>
            <a :href="item.link" target="_blank" rel="noopener noreferrer">Смотреть</a>
          </div>
        </div>
        <div class="pic">
          <img :src="item.img" alt="">
        </div>
      </div>

    </div>
    <div v-if="tab == 'listen'" class="listen-container marg-ar">
      <template v-for="album in albums" :key="album">
        <MusicPlayer :cover="album.cover" :title="album.title" :vinyl="album.vinyl" :tracks="album.tracks" :reverse="album.reverse" :link="album.link" />
      </template>
      <!-- <MusicPlayer :albums="albums" /> -->

    </div>

    <p class="last-info">О некоторых проектах мы пока не можем рассказать из-за НДА и прочих юридических прелестей.
      Однако всё впереди и будьте уверены, что это не только самый интересный, но и
      самый обновляемый раздел на сайте.</p>


  </main>
</template>

<script>
import { defineComponent, inject, ref } from 'vue'



export default defineComponent({
  name: 'PortfolioView',
  setup() {
    const { is_light_theme } = inject("theme");

    const tab = ref('watch');

    const watch_items = ref([
      {
        name: "Atomic Heart:<br>Инстинкт Истребления",
        info1: "Летом 2023 года мы познакомились с исполнителем ScaryOn, участвовавшим в создании саундтрека к игре. Незадолго до выхода дополнения, он попросил нас помочь ему в продюсировании нескольких треков и записать озвучку радио-голосов для трейлера.",
        info2: "Так и мы стали частью большой гордости Российского геймдева, оказавшись в трейлере и в самой игре с треком BEA-2 Theme.",
        author: "Яков Шостакович",
        link: "https://www.youtube.com/watch?v=7x2Y3Uq8Mko",
        img: new URL("@/assets/photos/comp/atomic-2-min.png", import.meta.url).href,
      },
      {
        name: "VK Видео: Адская Школа",
        info1: "Осенью 2023 к нам обратились из VK видео и МШК с просьбой записать и обработать звук для пилотного эпизода сериала про “Игру в кальмара” в российских реалиях. Проект был сложным, но крайне интересным. Более того, специально для сериала мы написали заглавную тему в исполнении великолепной Екатерины Проскуры.",
        info2: "Пилот участвовал в тендере VK и занял лидирующее место в списке перспективных сериалов площадки.",
        author: "Яков Шостакович, Михаил Бурый",
        link: "https://youtu.be/IU0AJHgbldg",
        img: new URL("@/assets/photos/comp/hell-min.png", import.meta.url).href,
      },
      {
        name: "P&G:<br>Beyond The Pattern",
        info1: "Для кампании P&G Beyond The Pattern мы предоставили полный спектр услуг по аудиопродакшену. В том числе создание звуковых эффектов, запись и обработку вокала для промо-роликов и анимаций.",
        info2: "Результат был представлен на международных фестивалях и получил признание аудитории.",
        author: "Яков Шостакович",
        link: "https://example.com/pg-beyond-the-pattern", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/p&g.jpg", import.meta.url).href,
      },
      {
        name: "Пятёрочка",
        info1: "Крупная сеть супермаркетов обратилась к нам с просьбой разработать серию рекламных роликов, направленных на продвижение сезонных предложений. Мы отвечали за полное музыкальное сопровождение, включая джинглы.",
        info2: "Ролики транслировались на телевидении и в социальных сетях.",
        author: "Яков Шостакович, Команда ACRYM",
        link: "https://example.com/pyaterochka", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/pyaterochka.jpg", import.meta.url).href,
      },
      {
        name: "Bourgeois Bohème",
        info1: "Мы участвовали в создании аудио- и визуальной концепции для модного дома Bourgeois Bohème. Проект включал создание звуковой атмосферы, которая подчеркивает уникальный стиль бренда.",
        info2: "Результат был представлен на модных показах и в рекламных кампаниях.",
        author: "Илья Яковенко",
        link: "https://example.com/bourgeois-boheme", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/bb.jpg", import.meta.url).href,
      },
      {
        name: "IQOS:<br>POP Experience",
        info1: "Для IQOS мы создали аудиовизуальное сопровождение их POP Experience кампании, включая разработку уникальных музыкальных тем и обработку звуковых эффектов.",
        info2: "Проект был представлен на нескольких международных выставках.",
        author: "Яков Шостакович",
        link: "https://example.com/iqos-pop-experience", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/iqos.jpg", import.meta.url).href,
      },
      {
        name: "Sofia Doors:<br>Solaris",
        info1: "Не так давно мы познакомились с коллегами Argument Agency, которые в тот момент работали над рекламной кампанией Sofia Doors, приуроченной к новой линейке продукции, вдохновлённой фильмом “Солярис” Андрея Тарковского.",
        info2: "Ребята тоже талантливые дизайнеры, но им не хватало грамотной визуализации задумки и проработки аудио-концепции, в чём мы им и помогли.",
        author: "Илья Яковенко, Яков Шостакович",
        link: "https://sofiadoors.com/blog/solyaris/",
        img: new URL("@/assets/photos/comp/sofia.jpg", import.meta.url).href,
      },
      {
        name: "Фитмост",
        info1: "Мы работали над созданием аудиосопровождения для рекламной кампании Фитмост. Кампания была направлена на продвижение здорового образа жизни через фитнес-платформу.",
        info2: "Музыка и звуки были разработаны специально для этой кампании.",
        author: "Яков Шостакович",
        link: "https://example.com/fitmost", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/fitmost.jpg", import.meta.url).href,
      },
      {
        name: "Volna",
        info1: "Проект Volna - это уникальная коллаборация, в которой мы приняли участие в разработке музыкального оформления для нового бренда одежды, вдохновленного природой.",
        info2: "Результат был представлен в рамках запуска бренда.",
        author: "Команда ACRYM",
        link: "https://example.com/volna", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/volna.jpg", import.meta.url).href,
      },
      {
        name: "Браслет",
        info1: "Для адаптации романа в сериал мы создали звуковую атмосферу, которая подчеркивает драматизм истории. А также разработали музыкальное оформление для трейлера.",
        info2: "Проект был представлен зрителям в 2023 году.",
        author: "Команда ACRYM",
        link: "https://example.com/braslet", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/braslet.jpg", import.meta.url).href,
      },
      {
        name: "StoryScape:<br>Tales & Stories",
        info1: "Проект StoryScape включает в себя разработку аудио- и визуальной концепции для ряда документальных фильмов, охватывающих различные регионы мира.",
        info2: "Наша команда работала над музыкальным оформлением и созданием звуковых эффектов.",
        author: "Команда ACRYM",
        link: "https://example.com/storyscape", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/storyscape.jpg", import.meta.url).href,
      },
      {
        name: "Новая Земля",
        info1: "Проект о человеческой адаптации в суровых условиях Арктики, в рамках которого мы создавали звуковую и музыкальную концепцию для документального сериала.",
        info2: "Сериал получил высокую оценку на международных кинофестивалях и продолжает вдохновлять зрителей.",
        author: "Команда ACRYM",
        link: "https://example.com/new-earth", // Замените на реальную ссылку
        img: new URL("@/assets/photos/comp/newland.jpg", import.meta.url).href,
      },
      {
        name: "ELK",
        info1: "ELK - проект, созданный для исследования и популяризации экологической осведомлённости. Мы работали над аудиовизуальной концепцией, а также создали звуковое сопровождение для трейлеров и рекламных материалов.",
        info2: "Проект участвовал в международных экологических форумах.",
        author: "Команда ACRYM",
        link: "https://example.com/elk", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/elk.jpg", import.meta.url).href,
      },
      {
        name: "Organic",
        info1: "Organic - это документальный проект Егора Субботина о флоре и фауне разных штатов Америки, выигравший множество наград по всему миру. В конце 2022 года мы приняли участие в разработке аудио-визуальной концепции проекта, создали музыкальное сопровождение к трейлеру и промо.",
        info2: "А сейчас продолжаем работу над экранизацией в формате сериала на площадки Netflix и Amazon.",
        author: "Яков Шостакович",
        link: "https://vimeo.com/915796876",
        img: new URL("@/assets/photos/comp/organic.jpg", import.meta.url).href,
      },

    ]);


    const albums = [
      {
        title: "Atomic Heart:<br>Инстинкт Истребления",
        cover: new URL("@/assets/photos/comp/atomic-2-min.png", import.meta.url).href,
        vinyl: new URL("@/assets/audio/Vinyl.png", import.meta.url).href,
        reverse: false,
        link: {
          title: "Слушать на Яндекс.Музыке",
          href: "https://music.yandex.ru/album/26779794/track/115947933"
        },
        tracks: [
          {
            title: "ScaryOn - BEA-2 Theme",
            audio: new URL("@/assets/audio/korol.mp3", import.meta.url).href,
          },
        ]
      },
      {
        title: "Organic",
        cover: new URL("@/assets/photos/comp/organic.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/Vinyl-organic.png", import.meta.url).href,
        reverse: true,
        tracks: [
          {
            title: "Organic - Essence Of Time",
            audio: new URL("@/assets/audio/korol.mp3", import.meta.url).href,
          },
          {
            title: "Organic - Manatee",
            audio: new URL("@/assets/audio/korol.mp3", import.meta.url).href,
          },
          {
            title: "Organic - Apocalypse",
            audio: new URL("@/assets/audio/korol.mp3", import.meta.url).href,
          },
        ]
      },

    ]



    return {
      is_light_theme,
      tab,
      watch_items,
      albums
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
    text-align: center;

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

.listen-container {
  display: flex;
  flex-direction: column;
  gap: 65px;
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
