import axios from 'axios';
import store from '@/store';
import { toTitle } from '@/utils/case';

const API_URL2 = 'http://bb.linux.com.tr:3000';
export function loadRecords(module, model) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE4Mjc3YzlkNWI2MDk1Nzg1Y2UzNjlkIiwiZW1haWwiOiJ2dnZAaG8iLCJpYXQiOjE2MzU5NDAyOTcsImV4cCI6MTYzNTk0Mzg5N30.vwoNUetB0Aa9ohRaNTEui7X74JkXQaAF1be1CwE4LXE',
     Authorization: localStorage.getItem("token"),
    },
  };
  console.log("loadRecordsmodule", module)
  console.log("loadRecordsmodel", model)
console.log(localStorage.getItem("token"))

  console.log("loadRecordsmodel", (`${toTitle(module)}s/SET_${model.toUpperCase()}S`))
  try {
    axios.get(`${API_URL2}/${module}s/${model}`, optionAxios)
      .then((response) => {
        store.commit(`${toTitle(module)}/SET_${model.toUpperCase()}S`, response.data);
        const stringData = JSON.stringify(response.data);
        // console.log(stringData)
        window.localStorage.setItem(`${toTitle(module)}s.${toTitle(model)}`, stringData);
      });
  } catch (err) {
    console.log(err);
  }
}
export function loadRecord(module, model) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    axios.get(`${API_URL2}/${module}s/${model}`, optionAxios)
      .then((response) => {
        store.commit(`${toTitle(module)}/SET_${model.toUpperCase()}S`, response.data);
        const stringData = JSON.stringify(response.data);
        window.localStorage.setItem(`${toTitle(module)}s.${toTitle(model)}`, stringData);
      });
  } catch (err) {
    console.log(err);
  }
}
export function createRecord(module, model, record) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    console.log(record);
    axios.post(`${API_URL2}/${module}s/${model}`, record, optionAxios)
      .then(() => {
        store.commit(`${toTitle(module)}/CREATE_${model.toUpperCase()}S`, record);
        axios.get(`${API_URL2}/${module}s/${model}`)
          .then((response) => {
            store.commit(`${module}/SET_${model.toUpperCase()}S`, response.data);
            const stringData = JSON.stringify(response.data);
            window.localStorage.setItem(`${toTitle(module)}s.${toTitle(model)}`, stringData);
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
export function deleteRecord(module, model, recordID) {
  const optionAxios = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: localStorage.getItem("token"),
    },
  };
  if (navigator.onLine) {
    try {
      axios.delete(`${API_URL2}/${module}s/${model}/${recordID}`, optionAxios)
        .then(() => {
          console.log(recordID)
          store.commit(`${toTitle(module)}/DELETE_${model.toUpperCase()}S`, recordID);
        });
    } catch (err) {
      console.log(err);
    }
  }
    const dataToDel = window.localStorage.getItem(`${toTitle(module)}s.${toTitle(model)}`);
    const empDel = JSON.parse(dataToDel);
    window.localStorage.setItem(`${toTitle(module)}s.${toTitle(model)}`, JSON.stringify(empDel));
}

export default {
  loadRecords, loadRecord, createRecord, deleteRecord,
};
