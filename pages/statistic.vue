<template>
    <div class="statistic-container">
        <div class="statistic-inner-container">
            <currency-translater></currency-translater>
            <currency-chart></currency-chart>
            <div class="slider-outer-container">
                <div class="slider-container">
                    <el-slider v-model="value" :min="1" :max="max"></el-slider>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CurrencyTranslater from '@/components/CurrencyTranslater';
import CurrencyChart from '@/components/CurrencyChart';
import MaxSumAdapter from '@/adapters/MaxSumAdapter';

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
        this.getData();
    },
    methods: {
        getData() {
            this.max = MaxSumAdapter(null, true).max;
        },
    },
}
</script>

<style lang="scss" scoped>

    .statistic-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .statistic-inner-container {
            width: 80vw;
        }

        .slider-outer-container {

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            .slider-container {
                width: 15vw;
            }
        }
    }
</style>