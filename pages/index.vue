<template>
    <div class="app">
        <rates class="rates" />
        <currency-chart></currency-chart>
    </div>
</template>

<script>
import CurrencyChart from '@/components/CurrencyChart.vue';
import Rates from '@/components/Rates.vue';

export default {
    name: 'Index',
    layout: 'NavMenu',
    components: {
        CurrencyChart,
        Rates,
    },
}
</script>

<style>
    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 60px;
    }

</style>