<template>
    <ion-col class="comp-card">
        <ion-card class="comp-card-movie" @click="showModal(id)">
            <img :src="imgUrl + img" />
            <div class="comp-card-movie-subtitle">
                <ion-row>
                    <ion-col>
                        <ion-icon name="star"></ion-icon>
                        <div class="comp-card-movie-description">{{ star }}</div>
                    </ion-col>
                    <ion-col>
                        <ion-icon name="calendar"></ion-icon>
                        <div class="comp-card-movie-description">{{ date | formatDate}}</div>
                    </ion-col>
                </ion-row>
            </div>
        </ion-card>
        <modal :id="id" v-show="isModalVisible === id" @close="closeModal" />
    </ion-col>
</template>

<script>
  import modal from './MovieModal.vue';
  import { serverBus } from '../main';
  import moment from 'moment'

  export default {
    filters: {
      formatDate: function (value) {
        if (value) {
          return moment(String(value)).format('Y')
        }
      }
    },
    components: {
      modal,
    },
    props: ['star', 'date', 'img', 'id'],
    data () {
      return {
        isModalVisible: false,
        imgUrl: 'https://image.tmdb.org/t/p/w500'
      }
    },
    methods: {
      showModal(id) {
        serverBus.$emit('movieDetail', id);
        this.isModalVisible = id;
      },
      closeModal() {
        this.isModalVisible = null;
      }
    }

  }
</script>

<style lang="scss">
    .comp-card {
        flex: 0 0 50%;
        &-movie {
            &-subtitle {
                font-size: 1.0em;
                position: absolute;
                bottom: 10px;
                width: 100%;
                color: #ecf0f1;
            }

            &-description {
                font-weight: bolder;
                color: white;
            }
        }
    }
</style>
