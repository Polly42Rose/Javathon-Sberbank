<template>
    <div>
        <div class="nav-menu-container">
            <a href="/"><button class="menu-element-left">Курсы валют</button></a>
            <a href="/statistic"><button class="menu-element-inner">Моя статистика</button></a>
            <a href="/exchange" ><button class="menu-element-right">Обмен валют</button></a>
        </div>
        <nuxt/>
    </div>
</template>

<script>
export default {
    name: 'NavMenu',
    computed: {
        curRoute() {
            return this.$route.name;
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "~@/assets/colors.scss";

    %menu-element {
        width: 10em;
        height: 3em;
        background-color: $green-color;
        color: white;
        padding: 0px;
        border: 0px;
        box-shadow: -1px 1px 0px 0 darken($green-color, 10%);
    }

    .nav-menu-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .menu-element-left {
            @extend %menu-element;

            border-radius: 5px 0px 0px 5px;
        }

        .menu-element-inner {
            @extend %menu-element;
        }

        .menu-element-right {
            @extend %menu-element;

            border-radius: 0px 5px 5px 0px;
        }
    }
</style>
