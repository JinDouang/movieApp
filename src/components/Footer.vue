<template>
    <ion-footer>

        <!--https://ionicframework.com/docs/api/components/fab/FabList/-->
        <!-- fab placed to the bottom end -->
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button color="dark">
                <ion-icon name="arrow-dropleft"></ion-icon>
            </ion-fab-button>


            <ion-fab-list side="start" class="fab-list-side-start hydrated">
                <ion-fab-button class="fab-button-in-list hydrated">
                    <ion-icon name="logo-facebook" role="img" class="hydrated" aria-label="logo facebook"></ion-icon>
                </ion-fab-button>

                <ion-fab-button class="fab-button-in-list hydrated">
                    <ion-icon name="logo-twitter" role="img" class="hydrated" aria-label="logo twitter"></ion-icon>
                </ion-fab-button>

                <ion-fab-button class="fab-button-in-list hydrated">
                    <ion-icon name="logo-vimeo" role="img" class="hydrated" aria-label="logo vimeo"></ion-icon>
                </ion-fab-button>

                <ion-fab-button class="fab-button-in-list hydrated">
                    <ion-icon name="logo-instagram" role="img" class="hydrated" aria-label="logo instagram"></ion-icon>
                </ion-fab-button>

            </ion-fab-list>
        </ion-fab>
    </ion-footer>

</template>


<script>

</script>

<style>

</style>
