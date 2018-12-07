<template>
    <ion-col class="col">
        <ion-card class="movie-info">
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
    </ion-col>
</template>


<script>
  import moment from 'moment'

  export default {
    filters: {
      formatDate: function (value) {
        if (value) {
          return moment(String(value)).format('Y')
        }
      }
    },
    props: ['star', 'date', 'img'],
    data () {
      return {
        imgUrl: 'https://image.tmdb.org/t/p/w500'
      }
    }

  }
</script>

<style>
    .card-title {
        font-size: 1.5em;
        width: 100%;
        font-weight: bold;
        background: #f4f5f812;
        color: white;
    }

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
