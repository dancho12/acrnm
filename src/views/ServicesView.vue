<template>
    <main>
        <Logo />
        <div class="title-block">
            <h3>Чем мы занимаемся</h3>
            <span class="subtitle">Подробно и наглядно объясняем, что мы делаем</span>
            <p>Часто нам приходится объяснять людям не только ценность нашего дела,
                но и вообще - что это такое. Здесь мы открываем перед вами все карты.</p>
            <p>Что мы делаем, за какие сроки и как рассчитывается цена.</p>
        </div>

        <div class="content">
            <h3>Направления</h3>
            <div class="directions">
                <div class="item">
                    <span class="title">Музыка</span>
                    <p>Мы пишем музыку для всего, что в ней нуждается:</p>
                    <ul>
                        <li>Фильмы и Сериалы</li>
                        <li>Реклама</li>
                        <li>Выставки</li>
                        <li>Видеоигры</li>
                        <li>YouTube-проекты</li>
                        <li>Песенные проекты</li>
                        <li>Трейлеры</li>
                        <li>Театр</li>
                    </ul>
                    <p class="mini">Всё это нам близко, знакомо и интересно. Мы всегда стараемся найти нестандартный подход к поставленной задаче, однако хорошо знаем и о трендовых потребностях клиента. <br><br>Поэтому работаем во всех известныз миру жанрах :)</p>
                </div>
                <div class="item long">
                    <span class="title">Звукорежиссура</span>
                    <p>Звукорежиссура это в первую очередь работа над звуком проекта. Это может быть:</p>
                    <ul>
                        <li><strong>Сведение</strong> (улучшение качества) звука</li>
                        <li><strong>Чистка звука</strong> (избавление от шумов, помех, артефактов)</li>
                        <li><strong>Саунд-дизайн</strong> (создание звуков окружения и взаимодействий в нашей студии)</li>
                        <li><strong>Запись на площадке или в студии</strong> (запись звука непосредственно на съёмках проекта)</li>
                    </ul>
                    <p class="mini">Всем этим мы занимаемся, добиваясь наилучшего опыта восприятия картинки и звука.<br><br>Может показаться что это что-то необязательное, но поверьте - часто это даже важнее, чем качественный визуал. Ведь плохую картинку можно списать на стиль, а вот звук нашему уху важен настолько чистым, насколько это возможно.</p>
                </div>
                <div class="item">
                    <span class="title">Музыка</span>
                    <p>Помимо всего прочего, мы являемся не просто подрядчиками, а сами ведём ваши проекты по части звука, и создаём и курируем собственные.<br><br>Это позволяет нам эффективно расходовать ваши и свои ресурсы, оставаясь в курсе дел и имея возможность обращаться к собственной базе профессионалов</p>

                    <p class="mini">Таким образом - вам становится не нужным самим выдумывать задачи и брифы, в которых возможно и не разбираетесь.<br><br>Мы всегда поможем, подскажем и предложим те решения, которые реально нужны, не перетрачивая бюджет.</p>
                </div>
            </div>
            <h3>Сроки</h3>
            <div class="deadlines">
                <div class="info">
                    <p>
                        Тут мы плавно переходим к такой неточной науке как время исполнения.
                        Дело в том, что всё очень сильно зависит от трёх факторов:</p>
                    <ul>
                        <li>Бюджета</li>
                        <li>Хронометража</li>
                        <li>Поставленной задачи</li>
                    </ul>
                    <p>Поэтому проще будет привести несколько примеров, которые покажут
                        общую тенденцию к временным затратам.
                    </p>
                </div>

                <div class="cards">

                    <Carousel :wrap-around="true" :breakpoints="breakpoints" ref="myCarousel">
                        <Slide v-for="slide in items" :key="slide">
                            <div class="item">
                                <span class="title">{{ slide.title }}</span>
                                <p v-html="slide.points"></p>
                                <p class="mini" v-html="slide.text"></p>
                            </div>
                        </Slide>

                    </Carousel>

                </div>
                <p class="warning">В примерах учитывается
                    только наша работа,
                    не включающая правки*</p>
            </div>
            <h3>Цена</h3>
            <p class="prices">
                Естественно, стоимость работы - первое о чём спрашивают у нас потенциальные заказчики.
                И вероятно продолжат спрашивать, даже после прочтения этой страницы.
            </p>
            <p class="prices">К сожалению сориентировать точно и сказать наверняка сколько будет стоить та или иная
                работа, в нашем деле - невозможно. Всё зависит от слишком
                большого количества факторов.</p>
            <p class="prices big">Какой хронометраж у вашего проекта?<br>
                Какая задача или набор задач?<br>
                Какой у вас дедлайн?<br>
                Какая цель у вашего проекта? </p>
            <p class="prices">Всё это складывается в, будем уж честны - зачастую достаточно немаленькую сумму.
                Мы прекрасно понимаем, что стоим не копейки, и позволить себе нас могут не каждые
                студенты творческого вуза :)</p>
            <p class="prices mini">Однако! Даже если вы только начали свой путь в сфере культуры и медиа,
                или у вас ну совсем нет средств - не стесняйтесь писать нам пообщаться.
                Будучи сами молодой и растущей командой - мы стараемся не упускать шанс
                поучаствовать в интересном и перспективном проекте, даже если за него
                заплатят мало, или не заплатят вообще.</p>
            <p class="prices">
                Пишите, рассказывайте о своём проекте - и мы сможем точно сказать -
                сколько это будет стоить и почему!</p>


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
        </div>






    </main>
</template>

<script>
import { defineComponent, ref, inject } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const myCarousel = ref(null)

export default defineComponent({
    name: 'HomeView',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    setup() {
        const breakpoints = Object({

            0: {
                itemsToShow: 1.5,
                // snapAlign: 'start',
            },
            768: {
                itemsToShow: 4,
                snapAlign: 'start',
            },

        })


        const items = [
            {
                title: '1',
                points: 'Короткометражный фильм<br>•<br>25 минут<br>•<br>Саунд-дизайн,<br>Звукорежиссура,<br>Музыка<br>•',
                text: 'Такая работа займёт от полутора-недель, до двух-трёх. Всё зависит от степени динамичности и музыкального направления, но обычно время остаётся в этих рамках.'
            },
            {
                title: '2',
                points: 'Рекламный проект<br>•<br>1,5 минуты<br>•<br>Саунд-дизайн,<br> Музыка<br>•',
                text: 'Здесь всё проще. Подобные проекты обычно закрывают за неделю, а мы так и вовсе - за два-три дня. Безусловно, всё сильно зависит от задачи, но если мы попадаем в пожелания заказчика - больших сроков ожидать не стоит.'
            },
            {
                title: '3',
                points: 'Эпизод сериала<br>•<br>40-60 минут<br>•<br>Саунд-дизайн,<br>Звукорежиссура<br>•',
                text: 'Подобные проекты часто тонут в доработках и тёрках монтажёра с режиссёром. Поэтому следует ожидать, что работа над одним эпизодом займёт либо полторы-две недели, либо весь месяц.'
            },

            {
                title: '4',
                points: 'Музыкальный трек<br>•<br>3 минуты<br>•<br>Написание аранжировки,<br>Сведение,<br>Запись<br>•',
                text: 'Все мы люди творческие, а когда доходит до песен - тем более. И часто один трек может делаться месяц и более. Всё зависит от степени трепетности заказчика. Но лично мы, например, можем создать песню хоть за один день.'
            }
        ]

        return {
            breakpoints,
            items
        }


    }
})

</script>


<style lang="scss" scoped>
h3 {
    text-align: center;
    margin-bottom: 6px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .directions {
        display: flex;
        margin-top: 34px;
        justify-content: space-between;

        @include is-mobile() {
            flex-direction: column;
            gap: 30px;
            margin-left: auto;
            margin-right: auto;
        }

        .item {
            border-radius: 20px;
            width: 293px;
            height: 405px;
            // backdrop-filter: blur(80px);
            // background: radial-gradient(151.92% 127.02% at 15.32% 21.04%, #ffe0a5 0%, rgba(110, 204, 244, 0.22) 77.08%, rgba(70, 110, 212, 0) 100%);
            padding: 20px 28px 20px 28px;

            display: flex;
            flex-direction: column;

            background-image: url('@/assets/back/services-directions.png');
            background-size: contain;
            background-repeat: no-repeat;
            transition: background-image 0.3s ease;

            @include is-light-theme() {
                background-image: url('@/assets/back/services-directions-light.png');
            }

            .title {
                display: block;
                width: 100%;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
            }

            ul {
                font-weight: 275;
                font-size: 15px;
                line-height: 123%;

                strong {
                    font-weight: 300 !important;
                }
            }

            p {
                font-weight: 275;
                font-size: 15px;
                line-height: 123%;



                &.mini {
                    margin-top: auto;
                    font-size: 12px
                }
            }

            &.long {
                height: 521px;
                background-image: url('@/assets/back/services-directions-long.png') !important;

                @include is-light-theme() {
                    background-image: url('@/assets/back/services-directions-long-light.png') !important;
                }
            }

        }

    }

    .deadlines {

        .info {
            max-width: 600px;
            font-weight: 400;
            font-size: 15px;
            line-height: 149%;
            text-align: center !important;
            margin-left: auto;
            margin-right: auto;

            @include is-mobile() {
                padding-left: 12px;
                padding-right: 12px;
            }

            ul {
                display: flex;
                flex-direction: column;
                margin: 0 auto;

                li {
                    margin: 0 auto;
                    width: fit-content;


                }
            }
        }


        .cards {


            .item {

                width: 216px;
                height: 445px;
                padding: 18px 20px 18px 20px;
                border-radius: 20px;
                background-image: url('@/assets/back/services-deadlines.png');
                background-size: contain;
                background-repeat: no-repeat;
                transition: background-image 0.3s ease;

                @include is-light-theme() {
                    background-image: url('@/assets/back/services-deadlines-light.png');
                }

                .title {
                    display: block;
                    width: 100%;
                    text-align: center;
                    font-weight: 500;
                    font-size: 16px;
                }

                p {
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 123%;
                    text-align: center;

                    &.mini {
                        font-weight: 275;
                        font-size: 13px;
                    }
                }
            }

        }

        .warning {
            width: 170px;
            font-weight: 275;
            font-size: 12px;
            line-height: 149%;
            text-align: right;
            color: #dbdbdb;
            margin-left: auto;
            margin-right: 12px;
            margin-top: 30px;

            @include is-light-theme() {
                color: #171717;
            }
        }
    }

    .prices {
        font-weight: 400;
        font-size: 15px;
        line-height: 149%;
        text-align: center;
        max-width: 800px;
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;

        @include is-mobile() {
            padding-left: 12px;
            padding-right: 12px;
        }


        &.mini {
            font-weight: 300;
        }

        &.big {
            font-weight: 500;
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

}
</style>