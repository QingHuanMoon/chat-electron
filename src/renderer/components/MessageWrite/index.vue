<template>
    <mu-paper class="message-writer-wrapper" :z-depth="2">
        <ChatButton />
        <mu-text-field solo class="message-area" placeholder="请输入聊天内容..." v-model="sendMessage" multi-line :rows="4" full-width></mu-text-field>
        <mu-button color="primary" class="send-btn" @click="sendMsg">Send</mu-button>
    </mu-paper>
</template>

<script>
    import ChatButton from './ChatButton'
    import {mapState} from 'vuex'
    export default {
        name: 'MessageWrite',
        data: () => ({
            sendMessage: ''
        }),
        methods: {
            sendMsg () {
                this.ws.send(JSON.stringify({
                    from_id: this.$store.state.auth.userInfo.id,
                    to_id: this.userInfo.statusId.currentMessage,
                    messageType: 0,
                    message: this.sendMessage,
                    type: 'message'
                }));
                let data = {
                    to_id: this.userInfo.statusId.currentMessage,
                    body: this.sendMessage,
                    time: new Date().getTime(),
                    type: 'self'
                }
                this.$store.dispatch('AsetSelfMessage', data)
                this.sendMessage = ''
            }
        },
        components: {
            ChatButton
        },
        computed: {
            ...mapState({
                'ws': state => state.user.ws,
                'userInfo': state => state.user.userInfo,
                'userId': state => state.auth.userInfo.id
            })
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
