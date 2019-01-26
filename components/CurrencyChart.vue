<template>
    <div class="chart-container">
        <line-chart v-if=loaded :options="labels" :chart-data="chartData" class="chart-style"></line-chart>
    </div>
</template>

<script>
import LineChart from '@/components/LineChart.js';

export default {
    name: "CurrencyChart",
    data() {
        return {
            chartData: [
                {
                    label: 'Data',
                    borderColor: '#ff0000',
                    pointBackgroundColor: 'black',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    data: [],
                },
            ],
            labels: [],
            loaded: false,
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            for (let i = 0; i < 100; ++i) {
                this.labels.push(i * 10 + 1);
                this.chartData[0].data.push(Math.sin(i) * Math.atan(i) * i * i);
            }
            this.loaded = true;
        },
    },
    components: {
        LineChart,
    }
}
</script>

<style lang="scss" scoped>

    $height: 60vh;

    .chart-container {
        height: $height;

        .chart-style {
            height: $height;
        }
    }
</style>