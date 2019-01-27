<template>
    <div class="exchange-container">
        <currency-translater class="margin-bottom"></currency-translater>
        <div>Первая карта</div>
        <select class="account-exchange-style first-account-select">
            <option v-for="account in accounts" :key="account.id" :value="account.number">{{account.number}}</option>
        </select>
        <div class="margin-bottom">Вторая карта</div>
        <select class="account-exchange-style">
            <option v-for="account in accounts" :key="account.id" :value="account.number">{{account.number}}</option>
        </select>
        <div class="sum-container">
            <div class="sum-title">Сумма </div>
            <input type="number" v-model="sum"/>
        </div>
        <nav-menu-button :isButton="true"
                         :is-active="false"
                         type="inner">Обменять</nav-menu-button>
    </div>
</template>

<script>
import CurrencyTranslater from '@/components/CurrencyTranslater';
import AccountAdapter from '@/adapters/AccountAdapter.js';
import NavMenuButton from "@/components/navMenu/NavMenuButton.vue"


export default {
    name: "exchange",
    layout: 'NavMenu',
    components: {
        CurrencyTranslater,
        NavMenuButton,
    },
    data() {
        return {
            accounts: this.$store.getters.loggedUser.accounts,
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
            margin-bottom: 2em;

            .sum-title {
                margin-right: 1em;
            }
        }
    }

    .margin-bottom {
        margin-bottom: 1em;
    }

</style>