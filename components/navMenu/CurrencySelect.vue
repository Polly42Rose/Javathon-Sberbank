<template>
    <div>
        <select @select="handle" v-model="curCurrency">
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
            curCurrency: '',
        }
    },
    mounted() {
        this.curCurrency = this.$route.query.currency;
    },
    methods: {
        handle(data) {
            this.$router.push({path: '', query: {currency: data}});
        }
    },
    watchQuery: ['currency']
}
</script>

<style lang="scss" scoped>

</style>