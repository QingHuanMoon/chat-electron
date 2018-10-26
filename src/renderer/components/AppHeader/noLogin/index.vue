<template>
    <div class="no-login-wrapper">
        <mu-button flat slot="right" @click="goLogin">登录</mu-button>
        <mu-button flat slot="right" @click="goRegister">注册</mu-button>
    </div>
</template>

<script>
    export default {
        name: 'noLogin',
        data () {
            return {

            }
        },
        methods: {
            goLogin () {
                this.$router.push({name: 'Login'})
            },
            goRegister () {
                this.$router.push({name: 'Register'})
            },
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
