import Vue from "vue";
import Vuex from "vuex";

import * as types from "./Mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navVisible: false,
    cart: []
  },
  getters: {
    itemCount: state => state.cart.reduce((total, item) => total + item.quantity, 0),
  },
  mutations: {
    [types.NAV_TOGGLE](state) {
      state.navVisible = !state.navVisible;
    },
    [types.NAV_CLOSE](state) {
      state.navVisible = false;
    },
    [types.CART_ADD_ITEM](state, item) {
      let existingCartItem = state.cart.find(f => f.sku === item.sku);
      if (existingCartItem) {
        existingCartItem.quantity = existingCartItem.quantity + item.quantity;
      } else {
        existingCartItem = item;
      }

      let updatedCart = [...state.cart];
      updatedCart = updatedCart.filter(f => f.sku !== item.sku);
      updatedCart.push(existingCartItem);

      state.cart = updatedCart;
    },
    [types.CART_UPDATE_ITEM](state, item) {
      let existingCartItem = state.cart.find(f => f.sku === item.sku);
      if (existingCartItem) {
        existingCartItem.quantity = ParseInt(item.quantity);
      } else {
        existingCartItem = item;
      }

      let updatedCart = [...state.cart];
      updatedCart = updatedCart.filter(f => f.sku !== item.sku);
      updatedCart.push(existingCartItem);

      state.cart = updatedCart;
    },
    [types.CART_REMOVE_ITEM](state, item) {
      let updatedCart = [...state.cart];
      updatedCart = updatedCart.filter(f => f.sku !== item.sku);
      state.cart = updatedCart;
    },
    [types.CARD_CHECKOUT](state) {

    }
  },
  actions: {
    [types.NAV_TOGGLE](context) {
      context.commit(types.NAV_TOGGLE);
    },
    [types.NAV_CLOSE](context) {
      context.commit(types.NAV_CLOSE);
    },
    [types.CART_ADD_ITEM](context, item) {
      context.commit(types.CART_ADD_ITEM, item);
    },
    [types.CART_UPDATE_ITEM](context, item) {
      context.commit(types.CART_UPDATE_ITEM, item);
    },
    [types.CART_REMOVE_ITEM](context, item) {
      context.commit(types.CART_REMOVE_ITEM, item);
    },
    [types.CARD_CHECKOUT](context) {

    }
  }
});