<template>
    <div class="app-wrapper">
        <mu-container class="app-container">
            <mu-row class="app-header">
                <AppHeader />
            </mu-row>
            <mu-row class="app-main">
                <mu-col class="contact" span="2" sm="2" md="3">
                    <router-view />
                    <ContactTabs />
                </mu-col>
                <mu-col class="content">
                    <MessageShow />
                    <MessageWrite />
                </mu-col>
            </mu-row>
        </mu-container>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader'
    import ContactTabs from '@/components/ContactTabs'
    import MessageShow from "@/components/MessageShow";
    import MessageWrite from '@/components/MessageWrite'
    import {mapState} from 'vuex'
    export default {
        name: 'IndexPage',
        data () {
            return {

            }
        },
        methods: {

        },
        components: {
            MessageShow,
            AppHeader,
            ContactTabs,
            MessageWrite
        },
        computed: {
            ...mapState({
                'userInfo': state => state.auth.userInfo,
                'ws': state => state.user.ws
            })
        },
        created () {
            this.$store.dispatch('AinitFirendAndListenAllChannel')
            let data = {user_id: this.userInfo.id}
            this.$store.dispatch('AinitRoomList', data)
        },
    }
</script>

<style lang="less">
    @import "index";
</style>
