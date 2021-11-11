const state = {
  navbara: null,
  navbara_title: 'b',
  token: localStorage.getItem("token") || null,
  // token:"",
};
const getters = {
  navbara: (state) => (state).navbara,
  loggedIn(state) {
    return state.token !== null
  },
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
  destroyToken(context) {
    if (context.getters.loggedIn) {
      localStorage.removeItem('token')
      context.commit('DESTROY_TOKEN')
      }
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

RETRIEVE_TOKEN(state, token) {
    state.token = token;
  },

DESTROY_TOKEN(state) {
    state.token = null;
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
};
