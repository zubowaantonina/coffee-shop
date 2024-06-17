import Vue from "vue";
import Vuex from "vuex";
import links from "./links";
import coffee from "./coffee";
import goods from "./goods";
import bestsellers from "./bestsellers";
import isLoading from "./isLoading";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    coffee,
    goods,
    bestsellers,
    isLoading
  },
});
export default store;
