import Vuex from 'vuex';

const state = {
    csrfToken: '',
    user: null,
};

const getters = {
    // isAuthenticated: (state) => !!state.user,
    isAuthenticated: () => true,
    loggedUser: (state) => state.user,
    csrf: ({ csrfToken }) => csrfToken,
};

const actions = {
    nuxtServerInit({ commit }) {
        // return this.$api.getUser().then(r => {
        //     commit('setUser', r.result);
        // });
    },
    nuxtClientInit({ dispatch }) {
    },
};

const mutations = {
    setUser(state, user) {
        state.user = user || null;
    },
};

const createStore = () => new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

export default createStore;
