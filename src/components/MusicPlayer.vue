<template>
    <div class="music-player" :class="{ reverse: reverse }">
        <div class="album-cover">
            <div class="vinyl" :class="{ spinning: isPlaying }" :style="{ backgroundImage: `url('${vinyl}'` }"></div>
            <img :src="cover" alt="Album Cover" class="cover" />
            <a v-if="link.title != ''" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
        </div>
        <div class="playlist">
            <h2 v-html="title"></h2>
            <div class="track-list">
                <div v-for="(track, index) in tracks" :key="index" class="track-item">

                    <span class="track-info" v-html="track.title"></span>

                    <div class="control">
                        <div @click="playTrack(index)" class="play-pause" :class="{
                            pause: isPlaying && currentTrackIndex === index,
                            play: !isPlaying || currentTrackIndex !== index
                        }">
                        </div>
                        <input type="range" min="0" :max="trackDurations[index]" v-model="currentTrackTimes[index]" @input="seekTrack(index)" class="seek-bar" />
                        <div class="volume-icon" :class="{ muted: currentVolumes[index] == 0 }" @click="toggleMute(index)"></div>
                        <input type="range" min="0" max="1" step="0.01" v-model="currentVolumes[index]" @input="changeVolume(index)" class="volume-bar" />
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent, ref, reactive, onBeforeUnmount, inject, watch } from "vue";

export default defineComponent({
    name: "MusicPlayer",
    props: {
        tracks: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            default: "Playlist",
        },
        cover: {},
        vinyl: {},
        reverse: {
            type: Boolean,
            default: false,
        },
        link: {
            type: Object,
            default: () => ({
                title: "",
                href: "",
            }),
        },
    },
    setup(props) {
        const currentTrackIndex = ref(0);
        const audioInstances = reactive({});
        const isPlaying = ref(false);
        const currentTrackTimes = reactive(props.tracks.map(() => 0));
        const currentVolumes = reactive(props.tracks.map(() => 0.5));
        const trackDurations = reactive(props.tracks.map(() => 0));


        const randomName = ref(`playlist-${Math.random().toString(36).substring(2, 8)}`);
        const nowPlayPlayer = inject("nowPlayPlayer");

        watch(nowPlayPlayer, (newIndex) => {


            if (randomName.value != newIndex) {
                audioInstances[currentTrackIndex.value]?.pause();
                isPlaying.value = false;
            }
        }, { deep: true });

        const playTrack = (index) => {
            if (!audioInstances[index]) {
                audioInstances[index] = new Audio(props.tracks[index].audio);
                audioInstances[index].volume = currentVolumes[index];
                audioInstances[index].addEventListener("loadedmetadata", () => {
                    trackDurations[index] = audioInstances[index].duration;
                });
                audioInstances[index].addEventListener("timeupdate", () => {
                    currentTrackTimes[index] = audioInstances[index].currentTime;
                });
            }

            nowPlayPlayer.value = randomName.value;
            if (isPlaying.value && currentTrackIndex.value === index) {
                audioInstances[index].pause();
                isPlaying.value = false;
            } else {
                if (currentTrackIndex.value !== index && audioInstances[currentTrackIndex.value]) {
                    audioInstances[currentTrackIndex.value].pause();
                }
                currentTrackIndex.value = index;
                audioInstances[index].play();
                isPlaying.value = true;
            }
        };

        const seekTrack = (index) => {
            if (audioInstances[index]) {
                audioInstances[index].currentTime = currentTrackTimes[index];
            }
        };

        const changeVolume = (index) => {
            if (audioInstances[index]) {
                audioInstances[index].volume = currentVolumes[index];
            }
        };



        const toggleMute = (index) => {

            if (audioInstances[index]) {

                if (currentVolumes[index] === 0) {
                    currentVolumes[index] = 0.5;
                } else {
                    currentVolumes[index] = 0;
                }
                audioInstances[index].volume = currentVolumes[index];
            }
        };

        onBeforeUnmount(() => {
            Object.values(audioInstances).forEach((audio) => {
                if (audio) {
                    audio.pause();
                    audio.src = "";
                }
            });
        });

        return {
            currentTrackIndex,
            isPlaying,
            currentTrackTimes,
            currentVolumes,
            trackDurations,
            playTrack,
            seekTrack,
            changeVolume,
            toggleMute
        };
    },
});
</script>

<style lang="scss" scoped>
.music-player {
    display: flex;
    gap: 35px;
    color: var(--text-color);

    position: relative;

    .album-cover {
        position: relative;
        width: 261px;
        height: 261px;
        display: flex;

        @include is-mobile() {
            width: 145px;
            height: 145px;

            position: absolute;
            left: -135px;

        }

        .vinyl {
            position: absolute;
            width: 252px;
            height: 252px;
            border-radius: 50%;
            background: radial-gradient(circle, #444 60%, transparent 100%);
            z-index: 0;
            background-image: url('@/assets/audio/covers/Vinyl.png');
            background-size: cover;
            animation: spin 2s linear infinite;
            animation-play-state: paused;
            /* Stop by default */

            right: -60px;

            @include is-mobile() {
                width: 140px;
                height: 140px;
                right: -33px;
            }
        }

        .vinyl.spinning {
            animation-play-state: running;
            /* Start spinning */
        }

        .cover {
            position: absolute;
            border-radius: 20px;
            width: 261px;
            height: 261px;
            z-index: 2;
            object-fit: cover;
            box-shadow: 8px 0 6px 0 rgba(0, 0, 0, 0.59);

            @include is-light-theme() {
                box-shadow: 0 4px 8px 0 rgba(63, 49, 102, 0.35);
            }

            @include is-mobile() {
                width: 145px;
                height: 145px;
            }
        }

        a {
            margin-top: 271px;
            font-weight: 275;
            font-size: 12px;
            line-height: 149%;
            text-align: center;
            width: 100%;

            text-decoration: none;
            color: #979797;

            @include is-light-theme() {
                color: #171717;
            }
        }


    }

    .playlist {
        z-index: 3;

        @include is-mobile() {
            width: -webkit-fill-available;
            padding-left: 25px;
            padding-right: 25px;
        }

        h2 {
            margin-top: 47px;
            font-weight: 600;
            font-size: 22px;
            line-height: 149%;
            margin-bottom: 80px;
            min-height: 68px;


            @include is-light-theme() {
                text-shadow: #eceef3 0px 0 10px;
            }

            @include is-mobile() {
                margin-bottom: 25px;
            }
        }

        .track-list {
            width: 580px;
            display: flex;
            flex-direction: column;
            gap: 40px;

            @include is-mobile() {
                width: -webkit-fill-available;
                gap: 22px;
            }

            .track-item {
                display: flex;

                gap: 20px;
                flex-direction: column;

                @include is-mobile() {

                    gap: 12px;
                }

                .track-info {
                    flex: 1;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 149%;
                }

                .control {
                    display: flex;
                    gap: 12px;

                    .play-pause {
                        cursor: pointer;

                        min-width: 27px;
                        min-height: 27px;
                        max-width: 27px;
                        max-height: 27px;
                        filter: var(--text-color-filter);
                        background-repeat: no-repeat;
                        background-size: contain;

                        &.play {
                            background-image: url('@/assets/icons/play.svg');
                        }

                        &.pause {
                            background-image: url('@/assets/icons/pause.svg');
                        }
                    }

                    .seek-bar,
                    .volume-bar {
                        width: 380px;

                        -webkit-appearance: none;
                        appearance: none;
                        background: transparent;

                        &:focus {
                            outline: none;
                        }

                        &::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            width: 12px;
                            height: 12px;
                            background: var(--text-color);
                            border-radius: 50%;
                            cursor: pointer;
                            margin-top: -5px;
                        }

                        &::-webkit-slider-runnable-track {
                            width: 100%;
                            height: 2px;
                            background: var(--text-color);
                        }
                    }

                    .volume-icon {
                        cursor: pointer;

                        min-width: 27px;
                        min-height: 27px;
                        max-width: 27px;
                        max-height: 27px;

                        background-image: url('@/assets/icons/volume.svg');
                        filter: var(--text-color-filter);
                        background-repeat: no-repeat;
                        background-size: auto;
                        background-position: center;



                        &.muted {
                            background-image: url('@/assets/icons/mute.svg');
                        }
                    }

                    .volume-bar {
                        width: 100px;
                        margin-left: auto;

                        @include is-mobile() {
                            width: 60px;
                        }
                    }
                }
            }
        }
    }

    &.reverse {
        flex-direction: row-reverse;

        .album-cover {
            .vinyl {
                left: -60px;

                @include is-mobile() {

                    left: -33px
                }
            }

            .cover {
                box-shadow: -8px 0 6px 0 rgba(0, 0, 0, 0.59);

                @include is-light-theme() {
                    box-shadow: 0 4px 8px 0 rgba(63, 49, 102, 0.35);
                }
            }

            @include is-mobile() {

                right: -135px;
                left: unset;
            }
        }

        .playlist {
            h2 {
                text-align: end;
            }

            .track-list {
                .track-item {
                    .track-info {
                        text-align: end;
                    }
                }
            }
        }
    }
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
