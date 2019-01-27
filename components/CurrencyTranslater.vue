<template>
    <div class="translater-container">
        <translate-button :href="'/' + getCurrencyTypeRoute"
                          :is-active="false"
                          type="left">Руб</translate-button>
        <translate-button :href="'/' + getCurrencyTypeRoute"
                          :is-active="false"
                          type="inner">-></translate-button>
        <translate-button :href="'/' + getCurrencyTypeRoute"
                          :is-active="false"
                          type="right">{{curCurrency}}</translate-button>

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