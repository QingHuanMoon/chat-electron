<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import {PrivateMsg, GroupMsg } from "./channel";
  import {mapState} from 'vuex'
  export default {
    name: 'vue-chat',
    data: () => ({
    }),
    created () {
        this.$store.dispatch('AcheckLoginStatus')
    },
    computed: {
        ...mapState({
            'ws': state => state.user.ws
        })
    },
    mounted () {

    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    user-select: none;
    cursor: default;
    font-family: "Source Code Pro";
    background-color: #4fc08d;
  }
  #app {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
</style>
