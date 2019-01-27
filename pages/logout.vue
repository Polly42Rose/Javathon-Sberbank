<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "logout",
        middleware: 'isAuth',
        mounted() {
            this.$api.logout().then(() => {
                this.$store.commit('deleteUser');
                this.$router.push('/login');
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>