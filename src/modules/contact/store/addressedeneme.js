/* eslint no-underscore-dangle: 0 */

// const API_URL2 = 'http://bb.linux.com.tr:3000';
// initial state
const state = () => ({
    addresses: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  CityGetter(state) {
    return state.addresses;
  },
};

// mutations
const mutations = {
  SET_CITY(state, data) {
    state.addresses = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
