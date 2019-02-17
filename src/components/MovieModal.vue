<template>
    <transition name="modal-fade">
        <div class="comp-modal">
            <div class="comp-modal-container" role="dialog" aria-labelledby="modalTitle"
                 aria-describedby="modalDescription">
                <header class="comp-modal-container-header" id="modalTitle">
                    <img :src="imgUrl + item.backdrop_path" />
                    <button type="button" class="comp-modal-container-header-close" @click="close"
                            aria-label="Close modal">
                        <ion-icon name="close"></ion-icon>
                    </button>
                </header>
                <section class="comp-modal-container-body" id="modalDescription">
                    <div class="comp-modal-container-body-genre">
                        <ion-badge v-for="(genre, index) in item.genres" :key="index" v-if="index <= 3">
                            {{genre.name}}
                        </ion-badge>
                    </div>

                    <div class="comp-modal-container-body-company">
                        <ion-badge v-for="(company, index) in item.production_companies" :key="index" v-if="index <= 3">
                            {{company.name}}
                        </ion-badge>
                    </div>

                    <ion-row class="comp-modal-container-body-vote">
                        <ion-col>
                            <button ion-button clear small color="danger" icon-start>
                                <ion-icon name='star'></ion-icon>
                                {{item.vote_average}}
                            </button>
                        </ion-col>
                        <ion-col text-center>
                            <button ion-button clear small color="danger" icon-start>
                                <ion-icon name='calendar'></ion-icon>
                                {{item.release_date}}
                            </button>
                        </ion-col>
                    </ion-row>

                    <ion-card-content>
                        {{item.overview}}
                    </ion-card-content>

                    <ion-row class="comp-modal-container-body-trailer">
                        <ion-col text-right>
                            <ion-button class="comp-modal-container-body-trailer-button" color="light"
                                        :href="youtubeLink">
                                <ion-icon name='share-alt'></ion-icon>
                                Watch Trailer
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </section>
            </div>
        </div>
    </transition>
</template>
<script>
  import { serverBus } from '../main';
  import movieService from "@/service/movieService";

  export default {
    name: 'modal',
    props: ['id'],
    data () {
      return {
        item: '',
        imgUrl: 'https://image.tmdb.org/t/p/w500',
        youtubeLink: 'https://www.youtube.com/watch?v='
      }
    },
    mounted () {
      serverBus.$on('movieDetail', (id) => {
        if (this.id === id) {
          this.getMovieDetail(id);
        }
      });
    },
    methods: {
      close () {
        this.$emit('close');
      },
      getMovieDetail (id) {
        movieService.getMovieDetail(id)
          .then(response => {
            this.item = response.data;
            this.youtubeLink = 'https://www.youtube.com/watch?v=' + this.item.videos.results[0].key;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>
<style lang="scss">
    @import '../assets/mixins.scss';

    $width-size: 300px;
    $height-size: 400px;
    .comp-modal {
        z-index: 99;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        &-container {
            width: $width-size;
            height: $height-size;
            position: relative;
            background: $white;
            box-shadow: 2px 2px 20px 1px;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            &-header {
                justify-content: space-between;
                max-height: 170px;
                img {
                    width: $width-size;
                }
                &-close {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    ion-icon {
                        border: 2px solid rgba(146, 137, 137, 0.82);
                        border-radius: 25px;
                        font-size: $title-size;
                        color: $white;
                    }
                }
            }
            &-body {
                position: relative;
                ion-badge {
                    margin: 0 $spacing-XXS;
                }
                &-genre {
                    ion-badge {
                        --background: #62728e;
                    }
                }
                &-company {
                    ion-badge {
                        --background: #8a8c8e;
                    }
                }
                &-vote {
                    button {
                        font-size: $body-size;
                    }
                }
                &-trailer {
                    &-button {
                        color: $red;
                    }
                }
            }
        }
    }

    // Animation
    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.5s ease;
    }

</style>