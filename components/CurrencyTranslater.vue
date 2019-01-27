<template>
    <div class="translater-container">
        <translate-button :href="'/statistic' + getCurrencyTypeRoute"
                          :is-active="false"
                          type="left">{{getLeftButtonData}}</translate-button>
        <translate-button :href="'/statistic' + getCurrencyTypeRoute"
                          :is-active="false"
                          @click="swap"
                          type="inner">-></translate-button>
        <translate-button :href="'/statistic' + getCurrencyTypeRoute"
                          :is-active="false"
                          type="right">{{getRightButtonData}}</translate-button>

    </div>
</template>

<script>

import TranslateButton from "@/components/navMenu/NavMenuButton.vue";

export default {
    data() {
        return {
            RublesIsLeft: true,
        }
    },
    components: {
        TranslateButton,
    },
    computed: {
        getCurrencyTypeRoute() {
            return "?currency=" + this.curCurrency;
        },
        curCurrency() {
            return this.$route.query.currency;
        },
        getLeftButtonData() {
            return this.RublesIsLeft ? "Руб" : this.curCurrency;
        },
        getRightButtonData() {
            return this.RublesIsLeft ? this.curCurrency : "Руб";
        }
    },
    methods: {
        swap() {
            this.RublesIsLeft = !this.RublesIsLeft;
        }
    },
    name: "CurrencyTranslater"
}
</script>

<style lang="scss" scoped>
    .translater-container {
        display: flex;
        justify-content: center;
        margin-top: 3vh;
    }
</style>