<template>
    <!--https://ionicframework.com/docs/api/components/fab/FabList/-->

    <!--https://github.com/vuejs/vue-router/blob/dev/examples/transitions/index.html-->
    <!-- fab placed to the bottom end -->
    <ion-fab class="footer-button" vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="menu-button">
            <ion-icon name="arrow-dropleft"></ion-icon>
        </ion-fab-button>

        <ion-fab-list side="start">
            <ion-fab-button @click="goToDiscover">
                <ion-icon name="search"></ion-icon>
            </ion-fab-button>

            <ion-fab-button @click="goToNew">
                <ion-icon name="videocam"></ion-icon>
            </ion-fab-button>

            <ion-fab-button @click="goToTop">
                <ion-icon name="pulse"></ion-icon>
            </ion-fab-button>

            <ion-fab-button @click="goToPopular">
                <ion-icon name="star-outline"></ion-icon>
            </ion-fab-button>

        </ion-fab-list>
    </ion-fab>
</template>


<script>
  import { serverBus } from '../main';

  export default {
    data () {
      return {}
    },
    methods: {
      goToTop () {
        this.$router.push('top');
        serverBus.$emit('titleSelected', 'Top Rated');
      },

      goToDiscover () {
        this.$router.push('discover');
        serverBus.$emit('titleSelected', 'Discover');
      },

      goToNew () {
        this.$router.push('new');
        serverBus.$emit('titleSelected', 'New');
      },

      goToPopular () {
        this.$router.push('/');
        serverBus.$emit('titleSelected', 'Popular');
      }

    }
  }
</script>

<style>
    .menu-button {
        --background: #cc0066;
        --background-activated: #cc0066;
    }

    .footer-button {
        position: fixed;
    }
</style>
