<template>
    <ion-content class="content">
        <ion-grid>
            <ion-row>
                <card v-for="(item, index) in items"
                      :id="item.id"
                      :key="index"
                      :img="item.poster_path"
                      :star="item.vote_average"
                      :date="item.release_date">
                </card>
            </ion-row>
            <ion-infinite-scroll @ionInfinite="loadPage($event)">
                <ion-infinite-scroll-content
                        loadingSpinner="bubbles"
                        loadingText="Loading more data...">
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>
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
        items: [],
        page: 1
      }
    },
    mounted () {
      this.getUpcomingMovies(this.page);
    },
    methods: {
      loadPage($event) {
        setTimeout(() => {
          this.page = this.page + 1;
          this.getUpcomingMovies(this.page);
          $event.target.complete();
        }, 500);
      },


      getUpcomingMovies(page) {
        movieService.getUpcomingMovies(page)
          .then(response => {
            for (let i = 0; i < response.data.results.length; i++) {
              this.items.push(response.data.results[i]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
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
