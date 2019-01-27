import Vuex from 'vuex';

const state = {
    csrfToken: '',
    user: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    // isAuthenticated: () => true,

    loggedUser: (state) => state.user,
    csrf: ({ csrfToken }) => csrfToken,
};

const actions = {
    nuxtServerInit({ commit }) {
        return this.$api.getUUser().then((r) => {
            console.log(r);
            commit('setUser', r);
        });
    },
    nuxtClientInit({ dispatch }) {
    },
};

const mutations = {
    setUser(state, user) {
        if (user.id !== 0)
            state.user = user;
        else
            state.user = null;
    },
};

const createStore = () => new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

export default createStore;
