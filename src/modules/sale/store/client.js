// initial state
const state = () => ({
  clients: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  ClientGetter(state) {
    return state.clients;
  },
};

// actions
const actions = {
};

// mutations
const mutations = {
  SET_CLIENTS(state, data) {
    state.clients = data;
  },
  UPDATE_CLIENT(state, client) {
    const index = state.clients.findIndex((inv) => (inv).id === client.id);
    return state.clients.splice(index, 1, client);
  },
  CREATE_CLIENT(state, client) {
    return state.clients.push(client);
  },
  DELETE_CLIENT(state, id) {
    const index = state.clients.findIndex((inv) => (inv).id === id);
    return state.clients.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
