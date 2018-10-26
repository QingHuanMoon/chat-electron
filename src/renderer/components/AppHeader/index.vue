<template>
    <div class="app-header-wrapper">
        <mu-appbar style="width: 100%;" class="appbar-box" color="primary">
            <noLogin v-if="!isLogin" slot="right" />
            <isLogin v-if="isLogin" slot="right" />
            <MessageHeader v-if="isLogin && currentTab == 1" slot="right" />
        </mu-appbar>
    </div>
</template>

<script>
    import noLogin from './noLogin'
    import isLogin from './isLogin'
    import {mapState} from 'vuex'
    import MessageHeader from "./MessageHeader";
    export default {
        name: 'AppHeader',
        data () {
            return {

            }
        },
        components: {
            MessageHeader,
            noLogin,
            isLogin
        },
        computed: {
            ...mapState({
                'isLogin': state => state.auth.isLogin,
                'currentTab': state => state.user.currentTab
            })
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
