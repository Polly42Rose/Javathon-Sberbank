<template>
    <div>
        <div class="container">
            <div class="currency-chart-pickers-container">
                <el-date-picker class="from-time-currency-chart-picker"
                                v-model="fromTime"
                                type="date"
                                placeholder="Время начала">
                </el-date-picker>
                <el-date-picker
                        v-model="toTime"
                        type="date"
                        placeholder="Время окончания">
                </el-date-picker>
            </div>
            <div class="Chart__list">
                <div class="Chart">
                    <div class="chart-container">
                        <line-chart v-if=loaded :options="labels" :new-data="chartData" :chart-data="chartData" class="chart-style"></line-chart>
                    </div>
                </div>
            </div>
            <div class="middle-button">
                <super-button @click="getData" :isButton="true" :isActive="false" type="inner">Рассчитать график</super-button>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from '@/components/LineChart.js';
import axios from 'axios';
import moment from 'moment';
import SuperButton from '@/components/navMenu/NavMenuButton';


export default {
    name: "CurrencyChart",
    props: {
        url: {type: String, required: true}
    },
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
    methods: {
        getData() {
            this.loaded = false;
            const from = moment(this.fromTime, "YYYY.MM.DD").format("DD/MM/YYYY");
            const to = moment(this.toTime, "YYYY.MM.DD").format("DD/MM/YYYY");
            console.error(this.fromTime);

            const promise = this.url === "second" ? this.$api.getSecondChart({account_id: this.$store.getters.loggedUser.accounts[0].id, from: from, to: to, type: this.$route.query.currency})
                : this.$api.getFirstChart( {from: from, to: to, type: this.$route.query.currency});

            if (this.url === "second") {
                promise.then((result) => {
                    this.labels = result[1];
                    this.chartData[0].data = result[0];
                    this.loaded = true;
                });
            }
            else {
                promise.then((result) => {
                    this.labels = result.dates;
                    this.chartData[0].data = result.values.map((el) => parseInt(el));
                    this.loaded = true;
                });
            }
        },
    },
    components: {
        LineChart,
        SuperButton,
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
            
            @media (max-width: 500px) {
                margin-bottom: 1vh;
            }
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

    .middle-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
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