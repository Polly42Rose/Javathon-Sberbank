<template>
    <div class="app">
        <currency-chart></currency-chart>
    </div>
</template>

<script>
import CurrencyChart from '@/components/CurrencyChart.vue';

export default {
    name: 'Index',
    layout: 'NavMenu',
    components: {
        CurrencyChart,
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