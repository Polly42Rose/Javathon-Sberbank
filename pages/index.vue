<template>
    <div id="app">
        <div class="container">
            <div class="Chart__list">
                <div class="Chart">
                    <currency-chart></currency-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CurrencyChart from '@/components/CurrencyChart.vue'

export default {
    name: 'Index',
    components: {
        CurrencyChart,
    }
}
    layout: 'NavMenu',
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
    .Chart {
        background: white;
        border-radius: 15px;
        box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
        margin:  25px 0;
    }

    .Chart h2 {
        margin-top: 0;
        padding: 15px 0;
        color:  black;
        border-bottom: 1px solid #323d54;
    }
</style>