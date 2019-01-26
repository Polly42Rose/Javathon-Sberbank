<template>
    <a :href="href"><button :style="curStyle" :class="curClass"><slot></slot></button></a>
</template>

<script>
export default {
    name: "navMenuButton",
    props: {
        isActive: { type: Boolean, required: true, },
        href: { type: String, required: true, },
        type: { type: String, required: true, },
    },
    computed: {

        borderStyle() {
            switch (this.type) {
                case "left":
                    return "border-radius: 5px 0px 0px 5px;";
                    break;
                case "right":
                    return "border-radius: 0px 5px 5px 0px;";
                    break;
                case "inner":
                    return "";
                    break;
            }
        },
        curStyle() {
            return `${this.borderStyle}`
        },
        curClass() {
            return this.isActive ? "nav-menu-active-style" : "nav-menu-style";
        }
    }
}
</script>

<style lang="scss">
    @import "~@/assets/css/colors.scss";
    @import "~@/assets/css/styles.scss";

    %nav-menu-button {
        @extend %clear-button-style;
        width: 10em;
        height: 3em;
    }

    .nav-menu-active-style {
        @extend %nav-menu-button;
        background-color: $orange-color;
        box-shadow: -1px 1px 0px 0 darken($orange-color, 10%);

        &:focus {
            background-color: darken($orange-color, 5%);
        }
    }

    .nav-menu-style {
        @extend %nav-menu-button;
        background-color: $green-color;
        box-shadow: -1px 1px 0px 0 darken($green-color, 10%);

        &:focus {
            background-color: darken($green-color, 5%);
        }
    }

</style>