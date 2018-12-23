<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">
                        This is the default tile!
                        <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
                    </slot>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        I'm the default body!
                    </slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                        I'm the default footer!
                        <button type="button" class="btn-green" @click="close" aria-label="Close modal">Close me!</button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>
<script>
  import { serverBus } from '../main';
  import movieService from "@/service/movieService";


  export default {
    name: 'modal',
    props: ['id'],
    mounted() {
      serverBus.$on('movieDetail', (id) => {
        if (this.id === id) {
          this.getMovieDetail(id);
        }
      });
    },
    methods: {
      close () {
        this.$emit('close');
      },
      getMovieDetail(id) {
        movieService.getMovieDetail(id)
          .then(response => {
            console.log('response: ', response);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>
<style>
    .modal-backdrop {
        z-index: 99;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #ffffff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4aae9b;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4aae9b;
        background: transparent;
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.5s ease;
    }

</style>