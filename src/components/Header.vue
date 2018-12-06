<template>
    <ion-header>
        <ion-toolbar class="title">
            <ion-title>{{title ? title : 'MovieApp'}}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>


<script>
  import { serverBus } from '../main';

  export default {
    data () {
      return {
        title: 'Popular'
      }
    },
    created() {
      // Using the service bus
      serverBus.$on('titleSelected', (server) => {
        this.title = server;
      });
    }
  }
</script>

<style>
    .title {
        --background: #f4f5f812;
        color: white;
    }
</style>
