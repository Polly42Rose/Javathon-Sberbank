import { generateString } from "@/assets/js/helper.js";

const AccountAdapter = (account, isFake = false) => {
    if (isFake) {
        return {
            id: Math.random(),
            name: generateString(),
            money: Math.random(),
            currency: generateString(),
        }
    }
    return {
        id: account.id,
        name: account.name,
        money: account.money,
        currency: account.currency,
    }
};

export default AccountAdapter;