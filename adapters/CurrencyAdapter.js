import { generateBoolean, generateString } from "../assets/js/helper.js";

const CurrencyAdapter = (currency, isFake) => {
    if (isFake) {
        return {
            value: Math.random().toFixed(2),
            name: generateString(),
            isUp: generateBoolean(),
        }
    }
    return {
        name: currency.charCode,
        value: currency.value,
        isUp: currency.sign === "+",
    };
};

export default CurrencyAdapter;
