<template>
    <mu-row class="self-message-wrapper">
        <mu-avatar>
            <img src="../../../assets/images/avatar1.jpg">
        </mu-avatar>
        &nbsp;&nbsp;
        <mu-paper round class="message-paper" :z-depth="1">{{ MsgItem.body }}</mu-paper>
    </mu-row>
</template>

<script>
    export default {
        name: 'SelfMessage',
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
