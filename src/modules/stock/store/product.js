// initial state
const state = () => ({
  products: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  ProductGetter(state) {
    return state.products;
  },
};

// actions
const actions = {
};

// mutations
const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data;
  },
  UPDATE_PRODUCT(state, product) {
    const index = state.products.findIndex((inv) => (inv).id === product.id);
    return state.products.splice(index, 1, product);
  },
  CREATE_PRODUCT(state, product) {
    return state.products.push(product);
  },
  DELETE_PRODUCT(state, id) {
    const index = state.products.findIndex((inv) => (inv).id === id);
    return state.products.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
