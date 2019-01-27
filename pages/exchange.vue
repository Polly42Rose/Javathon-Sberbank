<template>
    <div class="exchange-container">
        <currency-translater></currency-translater>
        <select class="account-exchange-style first-account-select">
            <option v-for="account in accounts" :key="account.id" :value="account.number"></option>
        </select>
        <select class="account-exchange-style">
            <option v-for="account in accounts" :key="account.id" :value="account.number"></option>
        </select>
        <div class="sum-container">
            <div class="sum-title">Сумма </div>
            <input type="number" v-model="sum"/>
        </div>
    </div>
</template>

<script>
import CurrencyTranslater from '@/components/CurrencyTranslater';
import AccountAdapter from '@/adapters/AccountAdapter.js';

export default {
    name: "exchange",
    layout: 'NavMenu',
    components: {
        CurrencyTranslater,
    },
    data() {
        return {
            accounts: [],
            sum: 0,
        }
    },
    methods: {
        getData() {
             this.accounts = [null, null, null, null].map((el) => AccountAdapter(el, true));
        }
    },
}
</script>

<style lang="scss" scoped>

    .exchange-container {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .first-account-select {
            margin-top: 1em;
        }

        .account-exchange-style {
            margin-bottom: 1em;
        }

        .sum-container {
            display: flex;
            flex-direction: row;
            align-items: center;

            .sum-title {
                margin-right: 1em;
            }
        }
    }

</style>