<template>
    <div class="rate-container">
        <div class="rate-title">Курсы валют</div>
        <table class="rate-table-style">
            <tbody>
                <tr>
                    <th></th>
                    <th class="rate-table-title">Курс</th>
                </tr>
                <tr v-for="currency in currencies" :key="currency.name">
                    <th>{{ currency.name }}</th>
                    <th>{{ currency.value }}</th>
                    <th v-if="currency.isUp" class="up-rate-arrow"></th>
                    <th v-else class="down-rate-arrow"></th>
                </tr>
            </tbody>
        </table>
        <div class="rate-exchange-url"><a href="/exchange">Обмен валюты</a></div>
    </div>
</template>

<script>

import CurrencyAdapter from '@/adapters/CurrencyAdapter.js';

export default {
    name: "Rates",
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
            this.currencies =  [null, null, null, null].map((el) => CurrencyAdapter(el, true));
        }
    }
}
</script>

<style lang="scss">

    %image-style {
        width: 3px;
        height: 3px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .rate-container {
        /*margin-left: 15vw;*/
        width: 10vw;

        .rate-title {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 1vh;
        }

        .rate-table-style {
            width: 100%;

            .rate-table-title {
                opacity: .5;
            }

            .down-rate-arrow {
                @extend %image-style;
                background-image: url('/static/rates/DownArrow.png');
            }

            .up-rate-arrow {
                @extend %image-style;
                background-image: url('/static/rates/UpArrow.png');
            }

            th {
                padding-right: .5em;
                font-weight: normal;
            }
        }

        .rate-exchange-url {
            display: flex;
            margin-top: 1vh;
            opacity: .5;
            color: white;
            justify-content: flex-end;
        }
    }

</style>