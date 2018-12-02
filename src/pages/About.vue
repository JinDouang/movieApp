<template>
    <ion-page class="show-page">
        <ion-content class="content">
            <ion-card class="card">
                <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    This is About
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>


<script>
  export default {}
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
