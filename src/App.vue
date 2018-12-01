<template>
    <ion-app id="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </ion-app>
</template>


<script>
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      'app-header': Header,
      'app-footer': Footer,
    },
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    html {
        background: #2224284d;
    }
</style>
