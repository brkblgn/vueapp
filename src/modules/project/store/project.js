/* eslint no-underscore-dangle: 0 */
import axios from 'axios';

const API_URL2 = 'http://bb.linux.com.tr:3000';
// initial state
const state = () => ({
  projects: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  ProjectGetter(state) {
    return state.projects;
  },
};
// mutations
const mutations = {
  SET_PROJECTS(state, data) {
    state.projects = data;
  },
  UPDATE_PROJECTS(state, project) {
    const index = state.projects.findIndex((inv) => (inv)._id === project.id);
    return state.projects.splice(index, 1, project);
  },
  CREATE_PROJECTS(state, project) {
    return state.projects.push(project);
  },
  DELETE_PROJECTS(state, id) {
    const index = state.projects.findIndex((inv) => (inv)._id === id);
    return state.projects.splice(index, 1);
  },
};
const actions = {
  deleteProject({ commit }, { ProjectID, index }) {
    if (navigator.onLine) {
      axios.delete(`${API_URL2}/projects/${ProjectID}`)
        .then(() => {
          commit('DELETE_PROJECT', ProjectID);
        });
    }
    const dataToDel = window.localStorage.getItem('Projects');
    const empDel = JSON.parse(dataToDel);
    empDel.splice(index, 1);
    window.localStorage.setItem('Contacts', JSON.stringify(empDel));
    commit('DELETE_PROJECT', ProjectID);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
