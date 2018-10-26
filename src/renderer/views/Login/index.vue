<template>
    <div>
        <mu-container class="login-wrapper" justify-content="center" align-items="center"></mu-container>
        <mu-flex class="login-flex-wrapper" justify-content="center" align-items="center">
            <mu-appbar class="login-app-bar" color="#ff4081">
            </mu-appbar>
            <LoginForm />
        </mu-flex>
    </div>
</template>


<script>
    import LoginForm from '@/components/LoginForm'
    export default {
        name: 'LoginPage',
        data () {
            return {

            }
        },
        methods: {
            backIndex () {
                this.$router.push({name: 'MessagePage'})
            }
        },
        components: {
            LoginForm
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
