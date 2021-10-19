/* eslint no-underscore-dangle: 0 */
import axios from 'axios';

const API_URL2 = 'http://bb.linux.com.tr:3000';
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

// mutations
const mutations = {
  SET_CONTACTS(state, data) {
    state.contacts = data;
  },
  UPDATE_CONTACTS(state, contact) {
    const index = state.contacts.findIndex((inv) => (inv)._id === contact.id);
    return state.contacts.splice(index, 1, contact);
  },
  CREATE_CONTACTS(state, contact) {
    return state.contacts.push(contact);
  },
  DELETE_CONTACTS(state, id) {
  const index = state.contacts.findIndex((inv) => (inv)._id === id);
    return state.contacts.splice(index, 1);
  },
};
const actions = {
  deleteInvoice({ commit }, { ContactID, index }) {
    if (navigator.onLine) {
      axios.delete(`${API_URL2}/contacts/${ContactID}`)
        .then(() => {
          commit('DELETE_CONTACT', ContactID);
        });
    }
    const dataToDel = window.localStorage.getItem('Contacts');
    const empDel = JSON.parse(dataToDel);
    empDel.splice(index, 1);
    window.localStorage.setItem('Contacts', JSON.stringify(empDel));
    commit('DELETE_CONTACT', ContactID);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
