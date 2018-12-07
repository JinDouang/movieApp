<template>

    <ion-content class="content">
        <card title="coucou"></card>
    </ion-content>
</template>


<script>
  import movieService from "@/service/movieService";
  import Card from '../components/Card.vue';

  export default {
    components: {
      'card': Card,
    },
    created () {
      movieService.getPopularMovies()
        .then(response => {
          console.log('response: ', response);
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
