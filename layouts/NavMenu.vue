<template>
    <div class="nav-menu-container">
        <button class="menu-element-left"><a>Главная</a></button>
        <button class="menu-element-inner"><a>Текст</a></button>
        <button class="menu-element-inner"><a>Текст</a></button>
        <button class="menu-element-inner"><a>Текст</a></button>
        <button class="menu-element-inner"><a>Текст</a></button>

    </div>
</template>

<script>
export default {
    name: 'NavMenu',

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
    }
</style>
