const state = {
  navbara: null,
  navbara_title: 'b',
};

const getters = {
  navbara: (state) => (state).navbara,
};

const actions = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  toggleSidebar({ commit }, component) {
    commit('setNavbara', component);
  },
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  toggleSidebarTitle({ commit }, component) {
    commit('setNavbaraTitle', component);
  },
};

const mutations = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  setNavbara(state, component) {
    state.navbara = component;
  },
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  setNavbaraTitle(state, component) {
    state.navbara_title = component;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
