<template>
    <main>
        <Logo />
        <div class="title-block">
            <h3>Контакты</h3>
            <span class="subtitle">Свяжитесь по работе с, или вместе с нами. <br>
                Мы всегда рады пообщаться.</span>
        </div>


        <div class="contact">
            <div class="info">
                <span>Единая почта: <strong>pr.acrnm@gmail.com</strong></span>
                <span>Телефон: <strong>+7 (915) 304-87-71</strong></span>
                <span>Мессенджеры и соцсети:</span>
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

import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

</script>


<style lang="scss" scoped>
h3 {
    text-align: center;
    margin-bottom: 6px;
}






.contact {
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
    text-align: center;

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
            margin-left: auto;
            margin-right: auto;
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


}
</style>