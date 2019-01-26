<template>
    <div>
        <div class="container">
            <div class="currency-chart-pickers-container">
                <el-date-picker class="from-time-currency-chart-picker"
                                v-model="fromTime"
                                type="datetime"
                                placeholder="Время начала">
                </el-date-picker>
                <el-date-picker
                        v-model="toTime"
                        type="datetime"
                        placeholder="Время окончания">
                </el-date-picker>
            </div>
            <div class="Chart__list">
                <div class="Chart">
                    <div class="chart-container">
                        <line-chart v-if=loaded :options="labels" :chart-data="chartData" class="chart-style"></line-chart>
                    </div>
                </div>
            </div>
        </div>
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
            fromTime: '',
            toTime: '',
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

    .currency-chart-pickers-container {

        .from-time-currency-chart-picker {
            margin-top: 2vh;
            margin-right: 1vw;
            margin-left: 1vw;
        }
    }

    .chart-container {
        height: $height;


        .chart-style {
            height: $height;
        }
    }

    .container {
        max-width: 80vw;
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