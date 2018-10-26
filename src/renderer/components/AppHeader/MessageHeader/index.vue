<template>
    <div class="message-header-wrapper">
        <mu-button flat slot="right" @click="goLogin">登录</mu-button>
        <mu-button flat slot="right" @click="goRegister">注册</mu-button>
    </div>
</template>

<script>
    export default {
        name: 'MessageHeader',
        data: () => ({

        }),
        methods: {

        },
    }
</script>

<style lang="less">
    @import "index";
</style>
