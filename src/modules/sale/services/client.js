import axios from 'axios';
import API_URL from '@/services/api';
import store from '@/store';

export function loadClients() {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  axios.get(`${API_URL}/clients/`, optionAxios)
    .then((response) => {
      store.commit('sale2/SET_CLIENTS', response.data);
      const stringData = JSON.stringify(response.data);
      window.localStorage.setItem('Clients', stringData);
    });
}

export function createClient(invoice) {
  axios.post(`${API_URL}/clients/`, invoice)
    .then(() => {
      store.commit('sale/CREATE_CLIENT', invoice);
      axios.get(`${API_URL}/clients/`)
        .then((response) => {
          store.commit('sale/SET_CLIENTS', response.data);
          const stringData = JSON.stringify(response.data);
          window.localStorage.setItem('Clients', stringData);
        });
    })
    .catch((error) => {
      console.log(error.message);
      console.log(error.request);
      console.log(error.request.status);
    });
}

export function deleteClient(ClientID) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  if (navigator.onLine) {
    axios.delete(`${API_URL}/clients/${ClientID}`, optionAxios)
      .then(() => {
        store.commit('sale/DELETE_CLIENT', ClientID);
      });
  }
  const dataToDel = window.localStorage.getItem('Clients');
  const empDel = JSON.parse(dataToDel);
  window.localStorage.setItem('Clients', JSON.stringify(empDel));
  store.commit('sale/DELETE_CLIENT', ClientID);
}

export default { loadClients, createClient, deleteClient };
