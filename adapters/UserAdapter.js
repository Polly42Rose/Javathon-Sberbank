import { generateFullName } from "/assets/js/helper.js";

const UserAdapter = (user, isFake = false) => {
    if (isFake) return {
        id: Math.random(),
        name: generateFullName(),
    };
    return {
        id: user.id,
        name: user.firstName + " " + user.middleName + " " + user.lastName,
        // name: 'Иванов Иван Иванович',
        accounts: user.accounts,
    }
};

export default UserAdapter;