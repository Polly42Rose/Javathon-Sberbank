<template>
    <div class="nav-menu-container">
        <nav-menu-button href="/"
                         :is-active="isActive('index')"
                         type="left">Курс Валюты</nav-menu-button>
        <nav-menu-button href="/statistic"
                         :is-active="isActive('statistic')"
                         type="inner">Статистика</nav-menu-button>
        <nav-menu-button href="/exchange"
                         :is-active="isActive('exchange')"
                         type="right">Обмен</nav-menu-button>
    </div>
</template>

<script>
import NavMenuButton from "@/components/navMenu/NavMenuButton.vue"

export default {
    name: 'NavMenu',
    components: {NavMenuButton},
    comments: {
        NavMenuButton,
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