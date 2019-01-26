import { generateBoolean } from "../assets/js/helper.js";

const CurrencyAdapter = (currency, isFake) => {
    if (isFake) {
        return {
            value: Math.random().toFixed(2),
            name: "USD",
            isUp: generateBoolean(),
        }
    }
    return {
        name: currency.charCode,
        value: currency.value,
        isUp: currency.isUp,
    };
};

export default CurrencyAdapter;
