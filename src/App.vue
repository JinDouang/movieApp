<template>
    <ion-app>
        <app-header></app-header>
        <transition>
            <router-view></router-view>
        </transition>
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

<style lang="scss">
    @import 'assets/global.scss';
</style>
