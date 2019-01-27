<template>
    <div class="nav-menu-container">
        <nav-menu-button :href="'/' + getCurrencyTypeRoute"
                         :is-active="isActive('index')"
                         type="left">Курс Валюты</nav-menu-button>
        <nav-menu-button :href="'/statistic' + getCurrencyTypeRoute"
                         :is-active="isActive('statistic')"
                         type="inner">Статистика</nav-menu-button>
        <nav-menu-button :href="'/exchange' + getCurrencyTypeRoute"
                         :is-active="isActive('exchange')"
                         type="inner">Обмен</nav-menu-button>
        <nav-menu-button :isButton="true"
                         :is-active="false"
                         type="inner">{{ curUserName }}</nav-menu-button>
        <nav-menu-button v-if="$store.getters.isAuthenticated"
                         href="/logout"
                         :is-active="false"
                         type="right">Выйти</nav-menu-button>
        <nav-menu-button v-else
                         href="'/superLogin'"
                         :is-active="isActive('login')"
                         type="right">Войти</nav-menu-button>
    </div>
</template>

<script>
import NavMenuButton from "@/components/navMenu/NavMenuButton.vue"
import UserAdapter from "@/adapters/UserAdapter.js";


export default {
    name: 'NavMenu',
    components: {NavMenuButton},
    comments: {
        NavMenuButton,
    },
    computed: {
        curUserName() {
            return UserAdapter(this.$store.getters.loggedUser).name;
        },
        getCurrencyTypeRoute() {
            return "?currency=" + this.$route.query.currency;
        }
    },
    methods: {
        isActive(name) {
            const activeName = this.$route.name;
            return activeName === name;
        },
    }
}
</script>

<style lang="scss" scoped>

    .nav-menu-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    }
</style>