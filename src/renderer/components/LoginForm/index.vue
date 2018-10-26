<template>
    <div class="login-form-wrapper" @keypress.enter="login">
        <mu-form ref="loginForm" :model="loginForm"  class="login-form">
            <mu-form-item label="郵箱" label-float help-text="請輸入正確的郵箱地址" icon="email" prop="email" :rules="emailRules">
                <mu-text-field type="email" v-model="loginForm.email" color="#42b983"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密碼" icon="lock_open" label-float help-text="請設置您的密碼" prop="password" :rules="passwordRules">
                <mu-text-field type="password" v-model="loginForm.password" color="#42b983"></mu-text-field>
            </mu-form-item>
        </mu-form>
        <mu-flex justify-content="center" align-items="center" style="margin-top: 50px;">
            <mu-button color="primary" style="margin-right: 50px" @click="login">
                <mu-icon left value="send"></mu-icon>
                登录
            </mu-button>
            <mu-button color="#42a5f5" @click="goRegister">
                <mu-icon left value="face"></mu-icon>
                去注册
            </mu-button>
        </mu-flex>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'LoginForm',
        data: () => ({
            loginForm: {
                email: '',
                password: ''
            },
            emailRules: [
                { validate: (val) => !!val, message: '必須填寫郵箱' },
                { validate: (val) => val.match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/), message: '請輸入合法的郵箱地址' }
            ],
            passwordRules: [
                { validate: (val) => !!val, message: '必須填寫密碼' },
            ],
        }),
        methods: {
            goRegister () {
                this.$router.push({name: 'Register'})
            },
            login () {
                this.$refs.loginForm.validate().then((result) => {
                    if (result) {
                        this.$store.dispatch('ALogin', this.loginForm)
                    }
                });
            },
            keydownhaha () {
                console.log('keydown')
            }
        },
        computed: {
            ...mapState({
                isLogin: (state) => state.auth.isLogin
            })
        },
        watch: {
            isLogin (newVal) {
                if (newVal) {
                    this.$router.push({name: 'MessagePage'})
                }
            }
        }
    }
</script>
