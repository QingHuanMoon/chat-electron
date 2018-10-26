<template>
    <div class="message-show-wrapper">
        <mu-paper class="message-show-paper" :z-depth="2">
            <mu-flex v-for="(item, index) in msgList" :key="index" :justify-content="item.type === 'other' ? 'start' : 'end'" :class="item.type">
                <SelfMessage :MsgItem="item" v-if="item.type === 'self'" />
                <OtherMessage :MsgItem="item" v-if="item.type === 'other'" />
            </mu-flex>
        </mu-paper>
    </div>
</template>

<script>
    import SelfMessage from './Self1Message'
    import OtherMessage from './OtherMessage'
    import {mapState} from 'vuex'
    export default {
        name: 'MessageShow',
        data () {
            return {

            }
        },
        methods: {

        },
        components: {
            SelfMessage,
            OtherMessage,
        },
        computed: {
            ...mapState({
                'messageList': state => state.user.messageList,
                'userInfo':    state => state.user.userInfo
            }),
            msgList () {
                if (this.messageList.find(item => item.id === this.userInfo.statusId.currentMessage )) {
                    return this.messageList.find(item => item.id === this.userInfo.statusId.currentMessage ).msgList
                }
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
