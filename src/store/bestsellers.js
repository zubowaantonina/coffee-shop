const bestsellers = {
  state: {
    bestsellers: [],
  },
  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data;
    },
  },
  actions: {
    setBestsellersData({ commit }, data) {
      commit("setBestsellersData", data);
    },
  },
  getters: {
    getBestsellers(state) {
      // return { other: state.other };
      return state.bestsellers;
    },
  },
};
export default bestsellers;
