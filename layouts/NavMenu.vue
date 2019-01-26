<template>
    <div>
        <nav-menu/>
        <div class="layout-data-container-style">
            <rates class="nav-menu-rates"></rates>
            <private-office :name="user.name"></private-office>
        </div>
        <nuxt/>
    </div>
</template>

<script>
import NavMenu from "@/components/navMenu/NavMenu.vue";
import Rates from "@/components/navMenu/Rates.vue";
import PrivateOffice from "@/components/navMenu/PrivateOffice.vue";
import UserAdapter from "@/adapters/UserAdapter.js";

export default {
    data() {
        return {
            user: UserAdapter(null, true),
        }
    },
    components: {PrivateOffice, Rates, NavMenu},
    comments: {
        NavMenu,
        Rates,
        PrivateOffice,
    }

};
</script>

<style lang="scss" scoped>

    .layout-data-container-style {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 5vh;

        .nav-menu-rates {

        }
    }

</style>
