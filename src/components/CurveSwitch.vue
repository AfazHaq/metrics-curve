<template>
  <div>
    <label>Select Metric:</label>&nbsp;
    <select
      @change="changeCurve(selectedMetrics)"
      v-model="selectedMetrics"
      class="select-box"
    >
      <option v-for="value in values" :key="value">{{ value }}</option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    values: {
      default: [],
      required: true
    }
  },

  data() {
    return {
      selectedMetrics: ""
    };
  },

  methods: {
    ...mapMutations(["setSelectedMetrics"]),

    // The metrics is changed on selection of the value from the select box
    changeCurve(value) {
      this.setSelectedMetrics(value);
      this.$emit("switched", this.selectedMetrics);
    }
  },

  // Initializing the metrix with the first value of the choice array
  created() {
    this.selectedMetrics = this.values[0];
    this.changeCurve(this.selectedMetrics);
  }
};
</script>

<style scoped>
.select-box {
  background-color: #f4f2f9;
  border-radius: 6px;
}
</style>