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
    created () {
      this.getPopularMovies(this.page);
    },
    methods: {
      loadPage($event) {
        this.page = this.page + 1;
        this.getPopularMovies(this.page);
        $event.target.complete();
      },

      getPopularMovies(page) {
        movieService.getPopularMovies(page)
          .then(response => {
            for (let i = 0; i < response.data.results.length; i++) {
              this.items.push(response.data.results[i]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
    }
  }
</script>

<style>
    .content {
        position: absolute;
        --background: #22242800;
    }
</style>
