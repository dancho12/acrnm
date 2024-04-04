<template>
    <main>
        <RouterLink to="/"><img class="logo-all" src="@/assets/acrnm-logo-white-pattern.png" alt=""></RouterLink>
        <RouterLink to="/"><img class="logo-all-mob" src="@/assets/acrnm-logo-mob.png" alt=""></RouterLink>
        <div class="title-block">
            <h3>Контакты & Вакансии</h3>
            <span class="subtitle">Свяжитесь по работе с нами или на нас</span>
        </div>

        <div class="macaroni-container"><img id="macaroni2" src="@/assets/macaroni2.png" alt=""></div>
        <div class="content-block">
            <div class="contact">
                <h3>Контакты</h3>
                <div class="info">
                    <span>Единая почта: <strong>pr.acrnm@gmail.com</strong></span>
                    <span>Телефон: <strong>+7 (915) 304-87-71</strong></span>
                    <span>Мессенджеры и соцсети:</span>
                    <div class="icons">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div class="icon tele"></div>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div class="icon insta"></div>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div class="icon whatsapp"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="vacancies">
                <h3>Открытые Вакансии</h3>

                <div class="cards">
                    <div class="card">
                        <span class="title">Продюсер</span>
                        <span class="subtitle">Поиск и составление клиентской базы,
                            переговоры с заказчиком.</span>
                        <p>Пока работаем за процент, в будущем - как нормальные люди</p>
                        <span class="mail">писать: <strong>pr.acrnm@gmail.com</strong></span>
                    </div>
                    <div class="card">
                        <span class="title">Motion-Designer</span>
                        <span class="subtitle">Создание визуальных решений и анимаций в 3D</span>
                        <p>Работаем попроектно, но это временно</p>
                        <span class="mail">писать: <strong>pr.acrnm@gmail.com</strong></span>
                    </div>
                </div>
            </div>
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


.content-block {
    display: flex;
    justify-content: space-between;

    & h3 {
        margin-top: 104px;
        margin-bottom: 107px;
    }



    .contact {

        h3 {
            text-align: left;
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 15px;

            font-weight: 400;
            font-size: 16px;


            .icons {
                width: max-content;
                margin-right: auto;
                display: flex;
                gap: 16px;

                & .icon {
                    content: '';
                    min-width: 30px;
                    min-height: 30px;
                    max-width: 30px;
                    max-height: 30px;

                    background-color: white;
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


    }

    .vacancies {
        h3 {
            text-align: right;
        }


        & .cards {
            display: flex;
            flex-direction: column;
            gap: 25px;

            & .card {
                margin: 0 auto;
                width: 350px;
                backdrop-filter: blur(15px);
                border: solid 2px #0f0;
                box-sizing: border-box;
                border-radius: 20px;
                border-image-slice: 40;
                border-image-repeat: round;
                border-image-width: 10px;
                border-image-source: url(/src/assets/test_bg.png);
                padding: 16px;

                .title {
                    font-weight: 500;
                    font-size: 16px;
                    display: block;
                    margin-bottom: 7px;
                }

                .subtitle {
                    font-weight: 275;
                    font-size: 10px;
                    line-height: 123%;
                    display: block;
                }

                p {
                    font-style: italic;
                    font-size: 8px;
                }

                .mail {
                    font-weight: 400;
                    font-size: 9px;
                    text-align: right;
                    display: block;
                }
            }

        }
    }
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

@media screen and (max-width: 768px) {

    .content-block {
        display: flex;
        justify-content: unset;
        flex-direction: column;
        gap: 20px;
        margin-left: 20px;
        margin-right: 20px;

        & h3 {
            margin-top: 50px;
            margin-bottom: 30px;
        }


        .vacancies {
            h3 {
                text-align: left;
            }


            & .cards {


                & .card {
                    margin: unset;
                    width: inherit;
                }
            }
        }

    }
}
</style>