<template>
    <mu-row class="other-message-wrapper">
        <mu-paper round class="message-paper" :z-depth="1">{{ MsgItem.body }}</mu-paper>
        &nbsp;&nbsp;
        <mu-avatar>
            <img src="../../../assets/images/avatar1.jpg">
        </mu-avatar>
    </mu-row>
</template>

<script>
    export default {
        name: 'OtherMessage',
        data () {
            return {

            }
        },
        methods: {

        },
        props: {
            MsgItem: {
                type: Object
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
