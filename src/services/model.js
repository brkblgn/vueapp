import axios from 'axios';
import store from '@/store';
import { toTitle } from '@/utils/case';

const API_URL2 = 'http://bb.linux.com.tr:3000';
export function loadRecords(ns, model) {
  console.log(ns)
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  try {
    axios.get(`${API_URL2}/${model}s`, optionAxios)
      .then((response) => {
        store.commit(`${toTitle(ns)}/SET_${model.toUpperCase()}S`, response.data);
        const stringData = JSON.stringify(response.data);
        window.localStorage.setItem(`${toTitle(model)}s`, stringData);
      });
  } catch (err) {
    console.log(err);
  }
}

export function loadRecord(ns, model) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  try {
    axios.get(`${API_URL2}/${model}s`, optionAxios)
      .then((response) => {
        store.commit(`${toTitle(ns)}/SET_${model.toUpperCase()}S`, response.data);
        const stringData = JSON.stringify(response.data);
        window.localStorage.setItem(`${toTitle(model)}s`, stringData);
      });
  } catch (err) {
    console.log(err);
  }
}

export function createRecord(ns, model, record) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    console.log(record);
    axios.post(`${API_URL2}/${model}s`, record, optionAxios)
      .then(() => {
        store.commit(`${toTitle(ns)}/CREATE_${model.toUpperCase()}`, record);
       // console.log(record)
        axios.get(`${API_URL2}/${model}s`)
          .then((response) => {
            store.commit(`${ns}/SET_${model.toUpperCase()}S`, response.data);
            const stringData = JSON.stringify(response.data);
            window.localStorage.setItem(`${toTitle(model)}s`, stringData);
          });
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.request);
        console.log(error.request.status);
      });
  } catch (err) {
    console.log(err);
  }
}

export function deleteRecord(ns, model, recordID) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  if (navigator.onLine) {
    try {
      axios.delete(`${API_URL2}/${model}s/${recordID}`, optionAxios)
        .then(() => {
          console.log(recordID)
          store.commit(`${ns}/DELETE_${model.toUpperCase()}`, recordID);
        });
    } catch (err) {
      console.log(err);
    }
  }
  const dataToDel = window.localStorage.getItem(`${toTitle(model)}s`);
  const empDel = JSON.parse(dataToDel);
  window.localStorage.setItem(`${toTitle(model)}s`, JSON.stringify(empDel));
}

export default {
  loadRecords, loadRecord, createRecord, deleteRecord,
};
