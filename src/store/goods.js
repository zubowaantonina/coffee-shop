const goods = {
  state: {
    goods: [],
  },
  mutations: {
    setGoodseData(state, data) {
      state.goods = data;
    },
  },
  actions: {
    setGoodseData({ commit }, data) {
      commit("setGoodseData", data);
    },
  },
  getters: {
    getCoods(state) {
      return state.goods;
    },
  },
};
export default goods;
