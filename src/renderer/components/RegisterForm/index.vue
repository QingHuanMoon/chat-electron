<template>
    <div class="register-form-wrapper" @keypress.enter="goRegister">
        <mu-form ref="registerForm" :model="registerForm"  class="register-form">
            <mu-form-item label="用户名" icon="account_circle" label-float help-text="用戶名長度在4-16個字符" prop="name" :rules="nameRules">
                <mu-text-field v-model="registerForm.name"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="郵箱" label-float help-text="請輸入正確的郵箱地址" icon="email" prop="email" :rules="emailRules">
                <mu-text-field type="email" v-model="registerForm.email" color="#42b983"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密碼" icon="lock_open" label-float help-text="請設置您的密碼" prop="password" :rules="passwordRules">
                <mu-text-field type="password" v-model="registerForm.password" color="#42b983"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="確認密碼" icon="lock" label-float help-text="請確認您的密碼" prop="password_confirmation" :rules="passwordConfirmationRule">
                <mu-text-field type="password" v-model="registerForm.password_confirmation" color="#42b983"></mu-text-field>
            </mu-form-item>
        </mu-form>
        <mu-flex style="margin-top: 30px;">
            <mu-button color="primary" style="margin-right: 50px" @click="goRegister" @keyup.enter="goRegister">
                <mu-icon left value="send"></mu-icon>
                注册
            </mu-button>
            <mu-button color="#42a5f5" @click="backToLogin">
                <mu-icon left value="face"></mu-icon>
                去登录
            </mu-button>
        </mu-flex>
    </div>
</template>

<script>
    export default {
        name: 'RegisterForm',
        data () {
            return {
                registerForm: {
                    name: '',
                    password: '',
                    password_confirmation: '',
                    email: '',
                },
                nameRules: [
                    { validate: (val) => !!val, message: '必須填寫用戶名' },
                    { validate: (val) => val.length >= 2 && val.length <= 16, message: '用戶名長度不得小於4個字符或大於16個字符' }
                ],
                emailRules: [
                    { validate: (val) => !!val, message: '必須填寫郵箱' },
                    { validate: (val) => val.match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/), message: '請輸入合法的郵箱地址' }
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必須填寫密碼' },
                    { validate: (val) => val.length >= 8 && val.length <= 16, message: '密码長度不得小於8個字符或大於16個字符' }
                ],
                passwordConfirmationRule: [
                    { validate: (val) => !!val, message: '必須填寫確認密碼' },
                    { validate: (val) => val === this.registerForm.password, message: '兩次填寫的密碼不一致' }
                ]
            }
        },
        methods: {
            goRegister () {
                this.$refs.registerForm.validate().then((result) => {
                    if (result) {
                        this.$store.dispatch('AgoRegister', this.registerForm)
                        this._cleanForm()
                    }
                });
            },
            _cleanForm () {
                this.$refs.registerForm.clear();
                this.registerForm = {
                    name: '',
                    password: '',
                    password_confirmation: '',
                    email: '',
                };
            },
            backToLogin () {
                this._cleanForm()
                this.$router.push({name: 'Login'})
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
