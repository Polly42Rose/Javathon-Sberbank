<template>
    <div>
        <currency-translater></currency-translater>
        <currency-chart></currency-chart>
        <el-slider :value="value" :min="1" :max="max"></el-slider>
    </div>
</template>

<script>
import CurrencyTranslater from '@/components/CurrencyTranslater';
import CurrencyChart from '@/components/CurrencyChart';

export default {
    name: "statistic",
    layout: 'NavMenu',
    middleware: 'isAuth',
    components: {
        CurrencyTranslater,
        CurrencyChart,
    },
    data() {
        return {
            value: 1,
            max: 0,
        }
    },
    mounted() {

    },
    getData() {

    },
}
</script>

<style lang="scss" scoped>

</style>