<template>
    <ion-page class="show-page">
        <ion-content class="content">
            <ion-grid>
                <ion-row>

                    <ion-col class="col">
                        <ion-card class="movie-info">
                            <ion-card-title  class="card-title">
                                Test
                            </ion-card-title>
                            <img src="https://placeimg.com/500/750/any"/>
                            <div class="card-subtitle">
                                <ion-row>
                                    <ion-col>
                                        <ion-icon name="star"></ion-icon>
                                        <div>9.4</div>
                                    </ion-col>
                                    <ion-col>
                                        <ion-icon name="calendar"></ion-icon>
                                        <div>1995</div>
                                    </ion-col>
                                </ion-row>
                            </div>
                        </ion-card>
                    </ion-col>


                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>


<script>
  import movieService from "@/service/movieService";

  export default {
    created() {
      movieService.getPhotos()
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
        --offset-top: 0px !important;
        --offset-bottom: 544px !important;
        --background: #22242800;
    }



    .card-title{
        font-size: 1.5em;
        width: 100%;
        font-weight: bold;
        background: #0000004d;
    }

    .card-subtitle {
        font-size: 1.0em;
        position: absolute;
        bottom: 10px;
        width: 100%;
        color:#ecf0f1;
    }

    .col {
        flex: 0 0 50%;
    }
</style>
