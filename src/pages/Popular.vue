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
      movieService.getPopularMovies()
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
    .content {
        position: absolute;
        --background: #22242800;
    }
</style>
