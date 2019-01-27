<template>
    <div class="login-container">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="Логин" prop="login">
                <el-input v-model="ruleForm.username" autocomplete="off" class="login-input"></el-input>
            </el-form-item>
            <el-form-item label="Пароль" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" class="login-input"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="login-buttons-container">
                    <button class="login-submit-button"
                            @click="submitForm('ruleForm')">Отправить</button>
                    <button class="login-clear-button"
                            @click="resetForm('ruleForm')">Очистить</button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import NavLayout from '@/layouts/NavMenu';

export default {
    data() {
        const validateLogin = (rule, value, callback) => {
            if (!value) {
                callback(new Error('Пожалуйста, введите ваш логин'));
            }
            callback();
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Пожалуйста, введите ваш пароль'));
            }
            callback();
        };
        return {
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                login: [
                    { validator: validateLogin, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$api.login(this.ruleForm).then((result) => {
                        this.$store.commit('setUser', result);
                        this.$router.push('/users');
                    }).catch(() => {
                        alert('Ваш пароль или email были некорректны');
                    });
                } else {
                    console.error('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },

    layout: 'NavLayout',
}
</script>

<style lang="scss">
    @import "~@/assets/css/colors.scss";
    @import "~@/assets/css/styles.scss";

    %login-from-button-style {
        @extend %clear-button-style;
        width: 6vw;
        height: 4vh;
        border-radius: 5px;

        &:active {
            box-shadow: 0px 0px darken(black, 10%);
        }
    }

    .login-container {
        display: flex;
        justify-content: center;
        width: 90vw;
        height: 90vh;
        align-items: center;

        .demo-ruleForm {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 5vw;

            .login-input {
                width: 30vw;
            }

            .login-buttons-container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: 30vw;

                .login-submit-button {
                    @extend %login-from-button-style;
                    box-shadow: 3px 3px darken($green-color, 10%);
                    background-color: $green-color;
                }

                .login-clear-button {
                    @extend %login-from-button-style;
                    box-shadow: 3px 3px darken($orange-color, 10%);
                    background-color: $orange-color;
                }
            }
        }
    }
</style>