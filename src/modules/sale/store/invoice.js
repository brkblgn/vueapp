import axios from 'axios';
import API_URL from '@/services/api';

// initial state
const state = () => ({
  invoices: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  InvoiceGetter(state) {
    return state.invoices;
  },
};

// actions
const actions = {
  deleteInvoice({ commit }, { InvoiceID, index }) {
    if (navigator.onLine) {
      axios.delete(`${API_URL}/invoices/${InvoiceID}`)
        .then(() => {
          commit('DELETE_INVOICE', InvoiceID);
        });
    }

    const dataToDel = window.localStorage.getItem('Invoices');
    const empDel = JSON.parse(dataToDel);
    empDel.splice(index, 1);
    window.localStorage.setItem('Invoices', JSON.stringify(empDel));
    commit('DELemployees', InvoiceID);
  },
};

// mutations
const mutations = {
  SET_INVOICES(state, data) {
    state.invoices = data;
  },
  UPDATE_INVOICE(state, invoice) {
    const index = state.invoices.findIndex((inv) => (inv).id === invoice.id);
    return state.invoices.splice(index, 1, invoice);
  },
  CREATE_INVOICE(state, invoice) {
    return state.invoices.push(invoice);
  },
  DELETE_INVOICE(state, id) {
    const index = state.invoices.findIndex((inv) => (inv).id === id);
    return state.invoices.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
