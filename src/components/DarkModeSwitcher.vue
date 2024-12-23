<template>
  <div class="dark-light-mode" :class="{ light: mode === APP_COLOR_THEME_LIGHT }" @click="toggleColorTheme">
    <div class="dark-light-mode__switcher" :class="{
      'dark-light-mode__switcher--dark': mode === APP_COLOR_THEME_DARK,
      'dark-light-mode__switcher--light': mode === APP_COLOR_THEME_LIGHT,
      'dark-light-mode__switcher--translate': mode === APP_COLOR_THEME_LIGHT,
    }">
      <div class="icon" />
    </div>

  </div>
</template>

<script>
import { defineComponent, ref, computed, onBeforeMount } from 'vue'



const reverseThemeSchema = {
  dark: 'light',
  light: 'dark'
}

export default defineComponent({
  name: 'DarkLightMode',
  props: {
    modelValue: {
      type: String,
      required: true,
      default: () => 'dark'
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    onBeforeMount(() => {
      changeColorSchema()
    })

    const APP_COLOR_THEME_DARK = 'dark'
    const APP_COLOR_THEME_LIGHT = 'light'

    const mode = ref(props.modelValue)


    function toggleColorTheme() {
      mode.value = reverseThemeSchema[mode.value]
      window.localStorage.setItem('appColorTheme', mode.value)
      emit("update:modelValue", mode.value);
      changeColorSchema()

    }

    function changeColorSchema() {
      document.documentElement.setAttribute('data-theme', mode.value);
    }


    return {
      mode,
      toggleColorTheme,
      APP_COLOR_THEME_DARK,
      APP_COLOR_THEME_LIGHT
    }
  }
})
</script>

<style lang="scss">
.dark-light-mode {
  position: relative;
  border-radius: 20px;
  width: 80px;
  height: 34px;

  transition: 200ms;

  cursor: pointer;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.5);
  object-fit: none;
  background-size: contain;

  border: solid 2px #0f0;
  box-sizing: border-box;
  border-image-slice: 54;
  border-image-repeat: round;
  border-image-width: 20px;
  border-image-source: url(@/assets/back/switch-bg.png);

  @include is-mobile() {
    width: 54px;
    height: 23px;
    border-image-slice: 51;
  }



  &.light {
    border-image-source: url(@/assets/back/switch-bg-white.png) !important;
    box-shadow: 0 4px 7px 0 rgba(120, 150, 172, 0.38) !important;

    .dark-light-mode__switcher {
      box-shadow: 0 0 6px 0 rgba(253, 245, 195, 0.55), 0 0 14px 0 rgba(255, 225, 149, 0.5) !important;
      border-image-source: url(@/assets/back/switch-btn-white.png) !important;


    }
  }


  .dark-light-mode__switcher {
    width: 34px;
    height: 34px;
    position: absolute;
    border-radius: 100%;
    background-size: cover;
    transition: 500ms;
    cursor: pointer;
    top: -2px;
    left: -2px;
    box-shadow: 0 0 6px 0 rgba(106, 76, 255, 0.55), 0 0 14px 0 rgba(149, 251, 255, 0.5);
    display: flex;


    border: solid 2px #0f0;
    box-sizing: border-box;
    border-image-slice: 50;
    border-image-repeat: round;
    border-image-width: 20px;
    border-image-source: url(@/assets/back/switch-btn.png);


    @include is-mobile() {
      width: 23px;
      height: 23px;

    }

    .icon {
      width: 20px;
      height: 20px;
      margin: auto;
      background-size: contain;

      @include is-mobile() {
        width: 13px;
        height: 13px;
      }
    }

    &--dark {

      .icon {
        background-image: url(@/assets/icons/moon.svg);
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
      }
    }

    &--light {
      .icon {
        background-image: url(@/assets/icons/sun.svg);
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
      }
    }

    &--translate {
      transform: translateX(46px);

      @include is-mobile() {
        transform: translateX(31px);
      }
    }

  }
}
</style>
