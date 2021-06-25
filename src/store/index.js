import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    xAxisValue: "",
    selectedMetrics: ""
  },

  mutations: {
    setXAxisValue(state, xAxisValue) {
      state.xAxisValue = xAxisValue;
    },

    setSelectedMetrics(state, selectedMetrics) {
      state.selectedMetrics = selectedMetrics;
    }
  },

  getters: {
    getXAxisValue: state => state.xAxisValue,

    getSelectedMetrics: state => state.selectedMetrics
  }
});
