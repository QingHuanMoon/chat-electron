<template>
    <div>
        <mu-container class="register-wrapper"></mu-container>
        <mu-flex class="register-flex-wrapper" justify-content="center" align-items="center">
            <mu-appbar class="register-app-bar" color="#673ab7">
            </mu-appbar>
            <RegisterForm />
        </mu-flex>
    </div>
</template>

<script>
    import RegisterForm from '@/components/RegisterForm'
    export default {
        name: 'RegisterPage',
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
            RegisterForm
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
