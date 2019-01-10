<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <img :src="imgUrl + item.backdrop_path" />
                    <button type="button" class="modal-header-close" @click="close" aria-label="Close modal">
                        <ion-icon name="close"></ion-icon>
                    </button>
                </header>
                <section class="modal-body" id="modalDescription">
                    <div class="modal-body-genre">
                        <ion-badge v-for="(genre, index) in item.genres" :key="index" v-if="index <= 3">
                            {{genre.name}}
                        </ion-badge>
                    </div>

                    <div class="modal-body-company">
                        <ion-badge v-for="(company, index) in item.production_companies" :key="index" v-if="index <= 3">
                            {{company.name}}
                        </ion-badge>
                    </div>

                    <ion-row class="modal-body-vote">
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

                    <ion-row class="modal-body-trailer">
                        <ion-col text-right>
                            <ion-button class="modal-body-trailer-button" color="light" :href="youtubeLink">
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
    mounted() {
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
      test() {
       console.log('ok');
      },
      getMovieDetail(id) {
        movieService.getMovieDetail(id)
          .then(response => {
            this.item = response.data;
            this.youtubeLink = 'https://www.youtube.com/watch?v=' + this.item.videos.results[0].key;

            console.log('item: ', this.item);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>
<style lang="scss">
    .modal-backdrop {
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
    }

    button {
        background-color: transparent;
        border: transparent;
    }

    .modal {
        width: 300px;
        height: 400px;
        background: #ffffff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-header {
        color: #4aae9b;
        justify-content: space-between;
        max-height: 170px;
        img {
            width: 300px;
        }
        &-close {
            position: absolute;
            top: 130px;
            right: 30px;
            ion-icon {
                font-size: 30px;
                color: white;
            }
        }
    }

    .modal-body {
        position: relative;
        ion-badge {
            margin: 0 5px;
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
                font-size: 14px;
            }
        }
        &-trailer {
            &-button {
                color: red;
            }
        }
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
        padding: 15px;
        display: flex;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4aae9b;
        background: transparent;
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