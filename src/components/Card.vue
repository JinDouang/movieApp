<template>
    <ion-col class="col">
        <ion-card class="movie-info" @click="showModal">
            <img :src="imgUrl + img" />
            <div class="card-subtitle">
                <ion-row>
                    <ion-col>
                        <ion-icon name="star"></ion-icon>
                        <div class="description">{{ star }}</div>
                    </ion-col>
                    <ion-col>
                        <ion-icon name="calendar"></ion-icon>
                        <div class="description">{{ date | formatDate}}</div>
                    </ion-col>
                </ion-row>
            </div>
        </ion-card>
        <modal v-show="isModalVisible" @close="closeModal" />
    </ion-col>
</template>

<script>
  import modal from './MovieModal.vue';
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
    props: ['star', 'date', 'img'],
    data () {
      return {
        isModalVisible: false,
        imgUrl: 'https://image.tmdb.org/t/p/w500'
      }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }

  }
</script>

<style>
    .card-subtitle {
        font-size: 1.0em;
        position: absolute;
        bottom: 10px;
        width: 100%;
        color: #ecf0f1;
    }

    .col {
        flex: 0 0 50%;
    }

    .description {
        font-weight: bolder;
        color: white;
    }
</style>
