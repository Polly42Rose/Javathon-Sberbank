const AccountAdapter = (account) => {
    return {
        id: account.id,
        name: account.name,
        money: account.money,
        currency: account.currency,
    }
};