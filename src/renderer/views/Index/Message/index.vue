<template>
    <div>
        <Contact :contactList="messageList"
                 :currentItemId="currentMessage"/>
    </div>
</template>

<script>
    import Contact from '@/components/Contact'
    import { mapState }  from 'vuex'
    export default {
        name: 'MessagePage',
        data () {
            return {

            }
        },
        computed: {
            ...mapState({
                "messageList": state => state.user.messageList,
                'currentMessage': state => state.user.userInfo.statusId.currentMessage
            })
        },
        methods: {

        },
        components: {
            Contact
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
