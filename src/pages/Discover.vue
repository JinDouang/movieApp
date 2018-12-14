<template>
        <ion-content class="content">

            <ion-searchbar type></ion-searchbar>
            <ion-grid>
                <ion-row>
                    <card v-for="(item, index) in items"
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
  import Card from '../components/Card.vue';
  import movieService from "@/service/movieService";

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
    created () {
      this.getUpcomingMovies(this.page);
    },
    methods: {
      loadPage($event) {
        this.page = this.page + 1;
        this.getUpcomingMovies(this.page);
        $event.target.complete();
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
