<template>
    <ion-grid>
        <ion-row>
            <ion-col class="col">
                <ion-card class="movie-info">
                    <ion-card-title class="card-title">{{ title }}</ion-card-title>
                    <img src="https://placeimg.com/500/750/any" />
                    <div class="card-subtitle">
                        <ion-row>
                            <ion-col>
                                <ion-icon name="star"></ion-icon>
                                <div class="description">9.4</div>
                            </ion-col>
                            <ion-col>
                                <ion-icon name="calendar"></ion-icon>
                                <div class="description">1995</div>
                            </ion-col>
                        </ion-row>
                    </div>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>


<script>
  export default {
    props: ['title'],

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
