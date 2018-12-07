<template>
    <ion-content class="content">
        <ion-grid>
            <ion-row>
                <card v-for="(item, index) in items"
                      :key="index"
                      :img="item.poster_path"
                      :star="item.vote_average"
                      :date="item.release_date">
                </card>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>


<script>
  import movieService from "@/service/movieService";
  import Card from '../components/Card.vue';

  export default {
    components: {
      'card': Card,
    },
    data () {
      return {
        items: Array
      }
    },
    created () {
      movieService.getUpcomingMovies()
        .then(response => {
          this.items = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });

    }
  }
</script>

<style>
    .card {
        --background: white;
    }

    .content {
        --offset-top: 0px !important;
        --offset-bottom: 544px !important;
        --background: #22242800;
    }
</style>
