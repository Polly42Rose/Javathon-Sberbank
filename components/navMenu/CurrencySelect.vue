<template>
    <div>
        <select @select="handle">
            <option v-for="currency in currencies" :key="currency.name" :value="currency.name">{{ currency.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        currencies: {type: Array, required: true, },
    },
    data() {
        return {
            curCurrency: this.pathCurrency,
        }
    },
    methods: {
        handle() {
            this.curCurrency = this.$route.query.currency;
        }
    },
    watchQuery: {

    }
}
</script>

<style scoped>

</style>