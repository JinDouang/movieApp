<template>

    <footer>
        <!--https://ionicframework.com/docs/api/components/fab/FabList/-->

        <!--https://github.com/vuejs/vue-router/blob/dev/examples/transitions/index.html-->
        <!-- fab placed to the bottom end -->
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button class="footer-button">
                <ion-icon name="arrow-dropleft"></ion-icon>
            </ion-fab-button>

            <ion-fab-list side="start">
                <ion-fab-button @click="goToAbout">
                    <ion-icon name="help-circle"></ion-icon>
                </ion-fab-button>

                <ion-fab-button @click="goToDiscover">
                    <ion-icon name="search"></ion-icon>
                </ion-fab-button>

                <ion-fab-button @click="goToNew">
                    <ion-icon name="videocam"></ion-icon>
                </ion-fab-button>

                <ion-fab-button @click="goToPopular">
                    <ion-icon name="star-outline"></ion-icon>
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
      goToAbout () {
        this.$router.go('about');
      },

      goToDiscover () {
        this.$router.go('discover');
      },

      goToNew () {
        this.$router.go('new');
      },

      goToPopular () {
        this.$router.go('/');
      }

    }
  }
</script>

<style>
    .footer-button {
        --background: black;
        --background-activated: black;
    }
</style>
