<template>
    <main>
        <Logo />
        <div class="title-block">
            <h3>{{ $t('notfound.title') }}</h3>
            <span class="subtitle">{{ $t('notfound.subtitle') }}</span>
        </div>


        <span class="span404">{{ $t('notfound.span404') }}</span>
        <p>{{ $t('notfound.p') }}</p>

        <img class="black" src="@/assets/cat-black.png" alt="cat">
        <img class="white" src="@/assets/cat-white.png" alt="cat">
        <RouterLink to="/"><strong>{{ $t('notfound.back') }}</strong></RouterLink>

    </main>
</template>




<style lang="scss" scoped>
h3 {
    text-align: center;
    margin-bottom: 6px;
}

.span404 {
    margin-top: 44px;
    display: block;
    font-weight: 400;
    font-size: 96px;
    line-height: 149%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

}

p {
    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.black {
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
    display: none;
    width: 64px;

    @include is-light-theme() {
        display: block;
    }
}

.white {
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 64px;

    @include is-light-theme() {
        display: none;
    }
}

a {
    margin-top: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;
    font-size: 15px;
    line-height: 149%;
    text-align: center;
    text-decoration: none;
    color: var(--text-color);
}
</style>