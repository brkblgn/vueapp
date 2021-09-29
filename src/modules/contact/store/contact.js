// initial state
const state = () => ({
  contacts: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  ContactGetter(state) {
    return state.contacts;
  },
};

// actions
const actions = {
};

// mutations
const mutations = {
  SET_CONTACTS(state, data) {
    state.contacts = data;
  },
  UPDATE_CONTACT(state, contact) {
    const index = state.contacts.findIndex((inv) => (inv).id === contact.id);
    return state.contacts.splice(index, 1, contact);
  },
  CREATE_CONTACT(state, contact) {
    return state.contacts.push(contact);
  },
  DELETE_CONTACT(state, id) {
    const index = state.contacts.findIndex((inv) => (inv).id === id);
    return state.contacts.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
