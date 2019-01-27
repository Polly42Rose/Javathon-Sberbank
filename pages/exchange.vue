<template>
    <div>
        <currency-translater></currency-translater>
    </div>
</template>

<script>
import CurrencyTranslater from '@/components/CurrencyTranslater';

export default {
    name: "exchange",
    layout: 'NavMenu',
    components: {
        CurrencyTranslater,
    }
}
</script>

<style lang="scss" scoped>

</style>