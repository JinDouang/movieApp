<template>
        <ion-content class="view-discover">
            <ion-searchbar class="view-discover-searchBar" type @change="change"></ion-searchbar>
            <ion-grid>
                <ion-row>
                    <card class="view-discover-card"
                          v-for="(item, index) in items"
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
  import Card from '../components/Card.vue';
  import movieService from "@/service/movieService";

  export default {
    components: {
      'card': Card,
    },
    data () {
      return {
        items: [],
        page: 1,
        keyword: ''
      }
    },
    methods: {
      change($event) {
        this.items = [];
        this.page = 1;
        this.keyword = $event.target.value;
        this.searchMovies(this.keyword, this.page);
      },
      loadPage($event) {
        setTimeout(() => {
          this.page = this.page + 1;
          this.searchMovies(this.keyword, this.page);
          $event.target.complete();
        }, 500);
      },


      searchMovies(keyword, page) {
        movieService.searchMovie(keyword, page)
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

<style lang="scss">
    @import '../assets/global.scss';

    .view-discover {
        --offset-top: 0px !important;
        --offset-bottom: 544px !important;
        --background: $background-view;

        &-card, .searchbar-input-container {
            background: $white;
        }
    }
</style>
