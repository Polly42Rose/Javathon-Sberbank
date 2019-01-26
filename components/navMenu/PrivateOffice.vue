<template>
    <div class="private-office-container">
        <div class="private-office-name">{{ name }}</div>
        <a v-if="$store.getters.isAuthenticated" href="/logout">Выйти</a>
        <a v-else href="/login">Войти</a>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true, },
    },
    name: "PrivateOffice"
}
</script>

<style lang="scss" scoped>
    .private-office-container {
        display: flex;
        align-items: center;

        .private-office-name {
            margin-right: 1vw;
        }
    }
</style>