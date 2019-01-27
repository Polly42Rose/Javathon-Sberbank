<!--<template>-->
    <!--<div class="login-container">-->
        <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">-->
            <!--<el-form-item label="username" prop="username">-->
                <!--<el-input type="email" v-model="ruleForm.email" autocomplete="off" class="login-input"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="Пароль" prop="password">-->
                <!--<el-input type="password" v-model="ruleForm.password" autocomplete="off" class="login-input"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item class="login-buttons-container">-->
                <!--<el-button type="primary" @click="submitForm('ruleForm')" class="login-submit-button login-button">Отправить</el-button>-->
                <!--<el-button @click="resetForm('ruleForm')" class="login-button">Очистить</el-button>-->
            <!--</el-form-item>-->
        <!--</el-form>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--data() {-->
            <!--var validateEmail = (rule, value, callback) => {-->
                <!--if (!value) {-->
                    <!--callback(new Error('Пожалуйста, введите ваш email'));-->
                <!--}-->
                <!--callback();-->
            <!--};-->
            <!--var validatePass = (rule, value, callback) => {-->
                <!--if (value === '') {-->
                    <!--callback(new Error('Пожалуйста, введите ваш пароль'));-->
                <!--}-->
                <!--if (value.length < 6) callback(new Error('Пароль не должен быть меньше 6 символов'));-->
                <!--callback();-->
            <!--};-->
            <!--var validateName = (rule, value, callback)=> {-->
                <!--if (value === '') {-->
                    <!--callback(new Error('Пожалуйства, введите ваше имя и фамилию'));-->
                <!--}-->
                <!--callback();-->
            <!--};-->
            <!--return {-->
                <!--ruleForm: {-->
                    <!--email: '',-->
                    <!--name: '',-->
                    <!--password: '',-->
                <!--},-->
                <!--rules: {-->
                    <!--email: [-->
                        <!--{ validator: validateEmail, trigger: 'blur' }-->
                    <!--],-->
                    <!--name: [-->
                        <!--{validator: validateName, trigger: 'blur' }-->
                    <!--],-->
                    <!--password: [-->
                        <!--{ validator: validatePass, trigger: 'blur' }-->
                    <!--],-->
                <!--}-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--submitForm(formName) {-->
                <!--console.log(this.$refs[formName].fields[0].$options, formName, 'kek');-->
                <!--this.$refs[formName].validate((valid) => {-->
                    <!--if (valid) {-->
                        <!--this.$api.registration(this.ruleForm).then(() => {-->
                            <!--this.$router.push('/');-->
                        <!--}).catch(() => {-->
                            <!--alert('Ваш email уже используется в системе');-->
                        <!--});-->
                    <!--} else {-->
                        <!--console.error('error submit!!');-->
                        <!--return false;-->
                    <!--}-->
                <!--});-->
            <!--},-->
            <!--resetForm(formName) {-->
                <!--this.$refs[formName].resetFields();-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style lang="scss">-->

    <!--.login-container {-->
        <!--display: flex;-->
        <!--justify-content: center;-->
        <!--width: 90vw;-->
        <!--height: 90vh;-->
        <!--align-items: center;-->

        <!--.demo-ruleForm {-->
            <!--display: flex;-->
            <!--flex-direction: column;-->
            <!--align-items: center;-->
            <!--margin-left: 5vw;-->

            <!--.login-input {-->
                <!--width: 30em;-->
            <!--}-->

            <!--.login-buttons-container {-->
                <!--.login-button {-->
                    <!--width: 7.5em;-->
                    <!--height: 3.75em;-->
                    <!--text-align: center;-->
                <!--}-->

                <!--.login-submit-button {-->
                    <!--margin-right: 5em;-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->

    <!--.regist-label {-->
        <!--margin-right: 5em;-->
    <!--}-->
<!--</style>-->