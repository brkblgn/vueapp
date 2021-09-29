import axios from 'axios';
import API_URL from '@/services/api';
import store from '@/store';
import { toTitle } from '@/utils/case';

export function loadRecords(model) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  axios.get(`${API_URL}/${model}s/`, optionAxios)
    .then((response) => {
      store.commit(`sale2/SET_${model.toUpperCase()}S`, response.data);
      const stringData = JSON.stringify(response.data);
      window.localStorage.setItem(toTitle(model), stringData);
    });
}

export function createRecord(model, record) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  axios.post(`${API_URL}/${model}s/`, optionAxios)
    .then(() => {
      store.commit('sale/CREATE_CLIENT', record);
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

export function deleteRecord(recordID) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  if (navigator.onLine) {
    axios.delete(`${API_URL}/clients/${recordID}`, optionAxios)
      .then(() => {
        store.commit('sale/DELETE_CLIENT', recordID);
      });
  }
  const dataToDel = window.localStorage.getItem('Clients');
  const empDel = JSON.parse(dataToDel);
  window.localStorage.setItem('Clients', JSON.stringify(empDel));
  store.commit('sale/DELETE_CLIENT', recordID);
}

export default { loadRecords, createRecord, deleteRecord };
