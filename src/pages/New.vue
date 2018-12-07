<template>
    <ion-page class="show-page">
        <ion-content class="content">
            <ion-card class="card">
                <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    This is New
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>


<script>
  import movieService from "@/service/movieService";

  export default {
    created () {
      movieService.getUpcomingMovies()
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
    .card {
        --background: white;
    }

    .content {
        --offset-top: 0px !important;
        --offset-bottom: 544px !important;
        --background: #22242800;
    }
</style>
