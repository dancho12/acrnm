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

      <div class="item" v-for="(item, key) in watch_items" :key="item" :class="{ open: key == open_id && open_id != null }">
        <div class="description">
          <span class="title" v-html="item.name"></span>
          <p v-html="item.info1"></p>
          <p v-html="item.info2"></p>

          <div class="info">
            <span>{{ item.author }}</span>
            <a v-if="item.link != undefined" :href="item.link" target="_blank" rel="noopener noreferrer">Смотреть</a>
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
    const watch_items = ref([
      {
        name: "Atomic Heart:<br>Инстинкт Истребления",
        info1: "Летом 2023 года мы познакомились с исполнителем ScaryOn, участвовавшим в создании саундтрека к игре. Незадолго до выхода дополнения, он попросил нас помочь ему в продюсировании нескольких треков и записать озвучку радио-голосов для трейлера.",
        info2: "Так и мы стали частью большой гордости Российского геймдева, оказавшись в трейлере и в самой игре с треком BEA-2 Theme.",
        author: "Яков Шостакович",
        link: "https://www.youtube.com/watch?v=7x2Y3Uq8Mko",
        img: new URL("@/assets/photos/comp/atomic-2-min.png", import.meta.url).href,
        class: "atomic"
      },
      {
        name: "VK Видео: Адская Школа",
        info1: "Осенью 2023 к нам обратились из VK видео и МШК с просьбой записать и обработать звук для пилотного эпизода сериала про “Игру в кальмара” в российских реалиях. Проект был сложным, но крайне интересным. Более того, специально для сериала мы написали заглавную тему в исполнении великолепной Екатерины Проскуры.",
        info2: "Пилот участвовал в тендере VK и занял лидирующее место в списке перспективных сериалов площадки",
        author: "Яков Шостакович, Михаил Бурый, Екатерина Проскура",
        link: "https://youtu.be/IU0AJHgbldg",
        img: new URL("@/assets/photos/comp/hell-min.png", import.meta.url).href,
      },
      {
        name: "P&G:<br>Beyond The Pattern",
        info1: "Летом 2024 нам позвонили ребята из компании P&G, с просьбой нарисовать для них ролик-открытие их мероприятия в кинотеатре Октябрь (да, графикой мы тоже занимаемся), а также написать для него музыку, исполненную в итоге барабанным оркестром вживую!",
        info2: "Безусловно, мы были шокированны таким уважаемым гостем, и боялись не оправдать возложенных на нас ожиданий. Тем не менее, пускай честно говоря ценой многих бессонных ночей и целого месяца трудоёмкой работы - оставили заказчиков довольными! Показать мы правда вам этого не можем, НДА, все дела.",
        author: "Илья Яковенко, Илья Мельников, Кирилл Кокин, Яков Шостакович",
        img: new URL("@/assets/photos/comp/p&g.jpg", import.meta.url).href,
      },
      {
        name: "Пятёрочка",
        info1: "Наши друзья из студии Clout обратились к нам за помощью со звуком в рекламной кампании Пятёрочки в честь дня космонавтики. ",
        info2: "Как мы неоднократно повторяем - звук важен ровно настолько же, насколько важна качественная картинка. А в данном случае тем более - ведь в для промороликов мы записывали прекрасный мощный голос Александра Пушного.<br><br>А оскорбить мастера музыки и ээээкспериментов мы ну никак не могли.",
        author: "Яков Шостакович, Михаил Бурый",
        link: "https://cloutstudio.ru/project/5ka", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/pyaterochka.png", import.meta.url).href,
      },
      {
        name: "Bourgeois Bohème",
        info1: "Наши друзья из студии Argument Agency попросили нас создать музыкальное сопровождение и саунд-дизайн для рекламного ролика европейской платёжной системы - Borgeois Boheme.",
        info2: 'Да, сама работа была достаточно простой, и делимся мы ею в первую очередь ради имени бренда. Но есть и интересное: при работе над проектом, мы никак не могли подобрать подходящее звучание для музыки. Она должна быть одновременно бодрой, но при этом достаточно классической и "богатой". <br><br>По итогу, в качестве вдохновения - отлично помог фильм  "Now You See Me".',
        author: "Яков Шостакович, Мирослав Стефанский ",
        img: new URL("@/assets/photos/comp/bb.jpg", import.meta.url).href,
      },
      {
        name: "IQOS:<br>POP Experience",
        info1: "Один из самых странных, и тем не менее, безумно интересных проектов, которые мы делали. ",
        info2: "К нам обратились за написанием звукового сопровождения и озвучки интерфейса для AR презентации продукции компании, при помощи шлема дополненной реальности Apple Vision Pro. <br><br>Работа включает в себя эдакий многослойный пирог из звуков эффектов и элементов интерфейса, переплетающихся вместе в единую симфонию.",
        author: "Яков Шостакович",
        img: new URL("@/assets/photos/comp/iqos.png", import.meta.url).href,
      },
      {
        name: "Fitmost",
        info1: "Подруга студенчества обратилась к нам за написанием музыкального сопровождения для рекламы приложения Fitmost, которое мало того что поддерживало бы динамику происходящего на экране, но при этом же работало как своеобразный саунд-дизайн само по себе. ",
        info2: "В результате у нас получилось совместить около пяти музыкальных жанров в одной композиции, добавив туда множество элементов из реального мира, работающих как оркестр.",
        author: "Яков Шостакович, Ирина Вязникова",
        img: new URL("@/assets/photos/comp/fitmost.jpg", import.meta.url).href,
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
        name: "Radio Volna",
        info1: "Один из сложнейших и запутаннейших проектов за последнее время, тем не менее - такой же интригующий и интересный. ",
        info2: "Дубайское радио обратилось к нам за полным обновлением “одежды” своего эфира. Заказчик не хотел идти по классическим тропам радиовещаниях с диджейскими сбивками и бархатным мужским и звонким женским голосами, читающими лозунги станции.<br><br>По итогу мы пришли к необычной смеси славянских фольклорных напевов с поп-музыкой, обозначающей суть и специфику единственного русского радио в Дубае - естественнейшим из путей: музыкой! ",
        author: "Яков Шостакович, Екатерина Проскура ",
        link: "https://volna.ae/", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/volna.jpg", import.meta.url).href,
      },
      {
        name: "Браслет",
        info1: "“Скандальный” и эпохальный, этот спектакль родился из золотой классики, умудрившись перевернуть представление всей нашей команды о концептуализации и театре в принципе. ",
        info2: "Режиссёр спектакля Виктор Шахбазов попросил нас написать полноценное музыкальное сопровождение к пьесе, и внезапно, как-то умудриться адаптировать песню “Меладзе - Салют Вера” - под II сонату Бетховена, скрестив оба произведения воедино.<br<br>Удивительно, но у нас получилось! А послушать шедевр можно в соседнем окне. ",
        author: "Яков Шостакович, Екатерина Проскура, Анжелика Чайко",
        img: new URL("@/assets/photos/comp/braslet.png", import.meta.url).href,
        class: "braslet"
      },
      {
        name: "StoryScape:<br>Tales & Stories",
        info1: "Постоянные участники этого раздела (угадайте кто) заказали у нас музыкальное сопровождение и саунд-дизайн для промо-ролика игры StoryScape, использующей нейросети по созданию изображения и текстов, для естественного и увлекательного обучения детей. ",
        info2: "Что интересно, проект мы сдали ещё год назад, однако разработчики примерно раз в несколько месяцев возвращаются с новой версией монтажа и механик, из-за чего работа стала для нас своеборазным пособием по тому, в чём мы профессионально подросли, а в чём ещё нет.",
        author: "Яков Шостакович ",
        img: new URL("@/assets/photos/comp/storyscape.jpg", import.meta.url).href,
      },
      {
        name: "Новая Земля",
        info1: "Дипломный проект Михаила Нистратова, с увлекательнейшим и редчайшим видеоигровым сеттингом - исследованием острова Новая Земля учёными времён царской России. ",
        info2: "Это пожалуй любимая тематика нашего композитора, поэтому несмотря на скромные начала - мы взялись за проект с головой, написав главную тему для игры, и проложив путь для общего звука и атмосферы будущего проекта.",
        author: "Яков Шостакович, Дмитрий Качер",
        link: "https://youtu.be/y_YdupsmU-A?si=heQwXnWJ-jqeAcUd", // Замените на реальную ссылку
        img: new URL("@/assets/photos/comp/newland.jpg", import.meta.url).href,
      },
      {
        name: "Organic",
        info1: "Organic - это документальный проект Егора Субботина о флоре и фауне разных штатов Америки, выигравший множество наград по всему миру. В конце 2022 года мы приняли участие в разработке аудио-визуальной концепции проекта, создали музыкальное сопровождение к трейлеру и промо.",
        info2: "А сейчас продолжаем работу над экранизацией в формате сериала на площадки Netflix и Amazon.",
        author: "Яков Шостакович, Егор Субботин ",
        link: "https://vimeo.com/915796876",
        img: new URL("@/assets/photos/comp/organic.jpg", import.meta.url).href,
      },
      {
        name: "ELK",
        info1: "Наш авторский короткометражный фильм, выполненный в технике смешения реальности с абстрактной анимацией. ",
        info2: "Делали его долго, сложно, и не совсем так как он изначально задумывался - но это один из интереснейших опытов в работе, что у нас когда либо был.",
        author: "Яков Шостакович, Сергей Тамбов",
        link: "https://example.com/elk", // Добавьте правильную ссылку
        img: new URL("@/assets/photos/comp/elk.jpg", import.meta.url).href,
        class: "elk"
      },


    ]);


    const albums = [
      {
        title: "Atomic Heart:<br>Инстинкт Истребления",
        cover: new URL("@/assets/photos/comp/atomic-2-min.png", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl.png", import.meta.url).href,
        link: {
          title: "Слушать на Яндекс.Музыке",
          href: "https://music.yandex.ru/album/26779794/track/115947933"
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
        title: "Новая Земля",
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
        title: "Браслет",
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
        title: "Яков Шостакович:<br>Избранное",
        cover: new URL("@/assets/audio/covers/favorite.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-favorite.png", import.meta.url).href,
        link: {
          title: "Слушать на Яндекс.Музыке",
          href: "https://music.yandex.ru/artist/16390612"
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
        title: "ОВЕН",
        cover: new URL("@/assets/audio/covers/oven.jpg", import.meta.url).href,
        vinyl: new URL("@/assets/audio/covers/Vinyl-oven.png", import.meta.url).href,
        reverse: true,
        link: {
          title: "Слушать на Яндекс.Музыке",
          href: "https://music.yandex.ru/users/yamusic-bestsongs/playlists/9425114"
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
          {
            title: "Овен - Хозяйка",
            audio: new URL("@/assets/audio/Овен - Хозяйка.mp3", import.meta.url).href,
          },
        ]
      },
    ]



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
