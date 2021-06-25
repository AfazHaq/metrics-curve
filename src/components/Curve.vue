<template>
  <div class="graph-canvas">
    <div id="curve_chart" style="width: 900px; height: 500px"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    records: {
      required: true,
      default: []
    }
  },

  computed: {
    ...mapGetters(["getSelectedMetrics", "getXAxisValue"])
  },

  // Watches the records, if any change is there the graph is updated
  watch: {
    records: {
      deep: true,
      handler(value) {
        google.charts.load("current", { packages: ["corechart", "line"] });
        google.charts.setOnLoadCallback(() => {
          var data = google.visualization.arrayToDataTable(value);

          var options = {
            title: `Company Performance - ${this.getSelectedMetrics} vs ${this.getXAxisValue}`,
            legend: { position: "top" }
          };

          var chart = new google.visualization.LineChart(
            document.getElementById("curve_chart")
          );

          chart.draw(data, options);
        });
      }
    }
  }
};
</script>

<style scoped>
.graph-canvas {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>