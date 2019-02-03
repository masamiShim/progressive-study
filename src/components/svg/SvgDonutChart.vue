<template>
  <div class="chart-line">
    <svg :viewBox="viewBox"
         :width="svgWidth"
         :height="svgHeight"
         >
      <g class="chart-line__series-line" transform="rotate(-90)">
        <path v-for="(p, i) in plot"
                  :key="i"
                  :d="p.d"
                  fill="none"
                  :stroke-width="40"
                  :class="'line-' + i"
                  :transform="p.transform"
                  >
        </path>
        <text :x="0" :y="chartHeight" font-size="12px">2000</text>
      </g>
    </svg>
  </div>
</template>

<script>
// padding * はラベル描画領域の確保
export default {
  name: 'SvgDonutChart',
  props: {
    svgWidth: { type: Number, default: 640 },
    svgHeight: { type: Number, default: 640 },
    barWidth: { type: Number, default: 20 },
    paddingBottom: { type: Number, default: 36 },
    paddingLeft: { type: Number, default: 36 },
    paddingRight: { type: Number, default: 12 },
    chartR: { type: Number, default: 160 },
  },
  data() {
    return {
      sample: [100, 200, 300, 400, 500],
    };
  },
  computed: {
    viewBox() {
      return `${this.svgWidth / -2} ${this.svgHeight / -2} ${this.svgWidth} ${this.svgHeight}`;
    },
    chartWidth() {
      return this.svgWidth - (this.paddingLeft + this.paddingRight);
    },
    chartHeight() {
      return this.svgHeight - this.paddingBottom;
    },
    // applyで配列を引数として展開してくれる
    maxValue() { return Math.max(...this.sample); },
    totalValue() { return this.sample.reduce((res, cur) => res + cur); },
    ratio() { return (this.maxValue * 0.95) / this.maxValue; },
    convertDataPercent() {
      return this.sample
        .map(data => data / this.totalValue);
    },
    // TODO: データラベルつけ
    plot() {
      // 始点
      const x1 = this.chartR * Math.cos(0);
      const y1 = this.chartR * Math.sin(0);
      let subTotal = 0;
      const PIE2 = Math.PI * 2;

      return this.convertDataPercent.map((value) => {
        // 描画の最終点。 360°に数値の割合をかけたもの
        const x2 = this.chartR * Math.cos(PIE2 * value);
        const y2 = this.chartR * Math.sin(PIE2 * value);

        const matrix = [Math.cos(PIE2 * subTotal), Math.sin(PIE2 * subTotal)];
        matrix.push(matrix[1] * -1, matrix[0], 0, 1);

        subTotal += value;

        return {
          value,
          d: `M ${x1} ${y1} a ${this.chartR} ${this.chartR} ${0} ${value > 0.5 ? 1 : 0} ${1} ${x2 - x1} ${y2 - y1}`,
          transform: `matrix(${matrix.join(' ')})`,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.line-0{
  stroke:red;
}
.line-1{
  stroke:blue;
}

.line-2{
  stroke:green;
}

.line-3{
  stroke:yellow;
}

.line-4{
  stroke:purple;
}
</style>
