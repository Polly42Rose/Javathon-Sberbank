<template>
    <div>
        <select @change="handle" v-model="curCurrency">
            <option v-for="currency in currencies" :key="currency.name" :value="currency.name">{{ currency.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        currencies: { type: Array, required: true, },
    },
    data() {
        return {
            curCurrency: this.$route.query.currency,
        }
    },
    mounted() {
    },
    methods: {
        handle() {
            this.$router.push({ query: {currency: this.curCurrency}});
        }
    },
    watchQuery: ['currency']
}
</script>

<style lang="scss" scoped>

</style>