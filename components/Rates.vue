<template>
    <div class="rate-container">
        <div class="rate-title">Курсы валют</div>
        <table class="rate-table-style">
            <tr>
                <th></th>
                <th class="rate-table-title">Курс</th>
            </tr>
            <tr>
                <th>Евро</th>
                <th>{{euro}}</th>
                <th v-if="isEuroUp" class="up-rate-arrow"></th>
                <th v-else class="down-rate-arrow"></th>
            </tr>
            <tr>
                <th>Доллар США</th>
                <th>{{dollar}}</th>
                <th v-if="isDollarUp" class="up-rate-arrow"></th>
                <th v-else class="down-rate-arrow"></th>
            </tr>
        </table>
        <div class="rate-exchange-url"><a href="/test">Обмен валюты</a></div>
    </div>
</template>

<script>
export default {
    name: "Rates",
    data() {
        return {
            euro: 73.62,
            dollar: 64.96,
            isEuroUp: false,
            isDollarUp: true
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
        margin-left: 15vw;
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