<template>
  <div class="chart-line">
    <svg :viewBox="viewBox"
         :width="svgWidth"
         :height="svgHeight"
         >
      <g class="chart-line__series-line">
        <polyline v-for="(line, i) in plot"
                  :key="i"
                  :points="line"
                  fill="none"
                  stroke="#333"
                  stroke-width="2">
        </polyline>
      </g>
    </svg>
    {{ plot }}
  </div>
</template>

<script>
// padding * はラベル描画領域の確保
export default {
  name: 'SvgChartLine',
  props: {
    svgWidth: { type: Number, default: 600 },
    svgHeight: { type: Number, default: 400 },
    paddingBottom: { type: Number, default: 36 },
    paddingLeft: { type: Number, default: 24 },
    paddingRight: { type: Number, default: 12 },
  },
  data() {
    return {
      sample: [
        [100, 200, 300, 400, 500],
        [200, 300, 400, 800, 100],
        [300, 400, 500, 100, 200],
      ],
    };
  },
  computed: {
    viewBox() {
      return `${0} ${0} ${this.svgWidth} ${this.svgHeight}`;
    },
    chartWidth() {
      return this.svgWidth - (this.paddingLeft + this.paddingRight);
    },
    chartHeight() {
      return this.svgHeight - this.paddingBottom;
    },
    xAxisStep() {
      return this.chartWidth / Math.max(...this.sample.map(data => data.length - 1));
    },
    // applyで配列を引数として展開してくれる
    maxValue() { return Math.max(...(Array.prototype.concat.apply([], this.sample))); },
    ratio() { return (this.maxValue * 0.95) / this.maxValue; },
    convertPoint() {
      return this.sample
        .map(data => data.map((elem, index) => [
          (this.xAxisStep * index),
          (elem / this.maxValue) * this.ratio,
        ]));
    },
    plot() { return this.convertPoint.map(points => points.map(p => p.join(' ')).join(' ')); },
  },
};
</script>

<style scoped>

</style>
