<template>
    <div class="rate-container">
        <div class="rate-title">Курсы валют</div>
        <table>
            <tr>
                <th></th>
                <th class="rate-table-title">Курс</th>
            </tr>
            <tr class="rate-th-style">
                <th>Евро</th>
                <th>{{euro}}</th>
            </tr>
            <tr class="rate-th-style">
                <th>Доллар США</th>
                <th>{{dollar}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Rates",
    data() {
        return {
            euro: 73.62,
            dollar: 64.96,
        }
    }
}
</script>

<style lang="scss">

    .rate-container {
        margin-left: 15vw;

        .rate-title {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 1em;
        }

        .rate-table-title {
            opacity: .5;
        }

        th {
            padding-right: 1em;
            font-weight: normal;
        }
    }
</style>