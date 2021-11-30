// initial state
/* eslint no-underscore-dangle: 0 */
const state = () => ({
    orders: [],
    products: [],
});

// getters
const getters = {
    /* eslint no-shadow: ["error", { "allow": ["state"] }] */
    OrderGetter(state) {
        return state.orders;
    },
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
    CREATE_PRODUCTS(state, product) {
        return state.products.push(product);
    },
    DELETE_PRODUCTS(state, id) {
        console.log(id)
        const index = state.products.findIndex((inv) => (inv._id) === id);
        console.log(index)
        return state.products.splice(index, 1);
    },
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
