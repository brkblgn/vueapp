// initial state
const state = () => ({
  orders: [],
});

// getters
const getters = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  OrderGetter(state) {
    return state.orders;
  },
};
// actions
const actions = {
};
// mutations
const mutations = {
  SET_ORDERS(state, data) {
    state.orders = data;
  },
  UPDATE_ORDER(state, order) {
    const index = state.orders.findIndex((inv) => (inv)._id === order.id);
    return state.orders.splice(index, 1, order);
  },
  CREATE_ORDERS(state, order) {
    return state.orders.push(order);
  },
  DELETE_ORDERS(state, id) {
    const index = state.orders.findIndex((inv) => (inv)._id === id);
    return state.orders.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
