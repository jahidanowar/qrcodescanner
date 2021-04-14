import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      qrData: [],
    };
  },
  getters: {
    getQrData(state) {
      return state.qrData;
    },
  },
  mutations: {
    SET_QRDATA(state, payload) {
      state.qrData = payload;
    },
    PUSH_QRDATA(state, payload) {
      state.qrData.push(payload);
    },
    REMOVE_QRDATA(state, payload) {
      state.qrData.splice(payload, 1);
    },
  },
  actions: {
    saveToStorage({ state }) {
      localStorage.removeItem("qr-scans");
      localStorage.setItem("qr-scans", JSON.stringify(state.qrData));
    },
    addData({ commit, dispatch }, data) {
      commit("PUSH_QRDATA", data);
      return dispatch('saveToStorage')
    },
    getData({ commit }) {
      let data = JSON.parse(localStorage.getItem("qr-scans"));
      if (data) {
        commit("SET_QRDATA", data);
      }
    },
    removeData({ state, commit, dispatch }, index) {
      if (state.qrData.length >= 1) {
        // const scan = state.qrData.find((el) => el.id === id);
        commit("REMOVE_QRDATA", index);
        return dispatch("saveToStorage");
      }
    },
  },
});

export default store;
