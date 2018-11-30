<template>

    <footer>
        <!--https://ionicframework.com/docs/api/components/fab/FabList/-->
        <!-- fab placed to the bottom end -->
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button class="footer-button">
                <ion-icon name="arrow-dropleft"></ion-icon>
            </ion-fab-button>

            <ion-fab-list side="start">
                <ion-fab-button>
                    <ion-icon name="logo-facebook"></ion-icon>
                </ion-fab-button>

                <ion-fab-button>
                    <ion-icon name="logo-twitter"></ion-icon>
                </ion-fab-button>

                <ion-fab-button>
                    <ion-icon name="logo-vimeo"></ion-icon>
                </ion-fab-button>

                <ion-fab-button>
                    <ion-icon name="logo-instagram"></ion-icon>
                </ion-fab-button>

            </ion-fab-list>
        </ion-fab>
    </footer>
</template>


<script>

  export default {
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
    .footer-button {
        --background: black;
        --background-activated: black;
    }
</style>
