<template>
  <div id="app">
    <h1 class="header-styling">{{ header }}</h1>
    <main>
      <curve-switch @switched="changeData" :values="switchValues"></curve-switch>
      <br />
      <curve :records="currentRecord"></curve>
    </main>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Curve from "./components/Curve";
import CurveSwitch from "./components/CurveSwitch";
import Reports from "./assets/reports.json";

export default {
  name: "app",

  components: {
    Curve,
    CurveSwitch
  },

  data() {
    return {
      header: "Annual Report",
      xAxisValue: "",
      records: [],
      switchValues: [],
      currentRecord: []
    };
  },

  methods: {
    ...mapMutations(["setXAxisValue"]),

    // Loads initial data from the assets and filters them accordingly
    getFilteredData() {
      this.xAxisValue = Reports.xaxis;
      this.records = Reports.records;

      let keys = Object.keys(this.records[0]);
      keys.shift();
      this.switchValues = [...keys];

      this.setXAxisValue(this.xAxisValue);
    },

    // Filters the records based on the selected metrics
    changeData(value) {
      this.currentRecord = this.records.map(item => {
        return [item.date, item[value]];
      });

      this.currentRecord.unshift([this.xAxisValue, value]);
    }
  },

  created() {
    this.getFilteredData();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header-styling {
  font-weight: bold;
  text-decoration: underline;
}
</style>
