<template>
    <div>
        <nav-menu/>
        <div class="layout-data-container-style">
            <rates :currencies="currencies" class="nav-menu-rates"></rates>
            <currency-select :currencies="currencies"></currency-select>
        </div>
        <nuxt/>
    </div>
</template>

<script>
import NavMenu from "@/components/navMenu/NavMenu.vue";
import Rates from "@/components/navMenu/Rates.vue";
import CurrencySelect from "@/components/navMenu/CurrencySelect.vue";
import CurrencyAdapter from '@/adapters/CurrencyAdapter.js';


export default {
    data() {
        return {
            currencies: [],
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            // this.$api.getCurrencies().then((result) => {
            //     console.error(result);
            //     result.map((el) => CurrencyAdapter(el));
            // }).catch(() => {
            // });
            this.currencies = [null, null, null, null,].map((el) => CurrencyAdapter(el, true));
        }
    },
    components: {CurrencySelect, Rates, NavMenu},
    comments: {
        NavMenu,
        Rates,
        CurrencySelect,
    }

};
</script>

<style lang="scss" scoped>

    .layout-data-container-style {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 5vh;

        .nav-menu-rates {
            flex-basis: 10%;
            @media (max-width: 500px) {
                margin-right: 10vw;

            }
        }
    }

</style>
