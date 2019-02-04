<template>
  <div class="chart-line">
    <svg :viewBox="viewBox"
         :width="svgWidth"
         :height="svgHeight"
    >
      <g class="chart-line__series-line" :transform="axisYtransform">
        <polyline v-for="(line, i) in plot"
              :key="i"
              :points="line"
              fill="none"
              :stroke-width="20"
              :class="'line-' + i"
        >
        </polyline>
      </g>
      <!-- X軸 -->
      <line :x1="paddingLeft"
            :x2="svgWidth - paddingRight"
            :y1="chartHeight"
            :y2="chartHeight" stroke="#000"></line>
      <!-- Y軸 -->
      <line :x1="paddingLeft"
            :x2="paddingLeft"
            :y1="0"
            :y2="chartHeight" stroke="#000"></line>
      <!--FIXME: これ繰り返しでできるようにせな-->
      <text :x="0" :y="chartHeight" font-size="12px">2000</text>
      <!--FIXME: あとテキストは適当な数値算出するように頑張る-->
      <text :x="paddingLeft" :y="svgHeight - (paddingBottom / 2  )" font-size="12px">111</text>
    </svg>
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
    paddingLeft: { type: Number, default: 36 },
    paddingRight: { type: Number, default: 12 },
  },
  data() {
    return {
      sample: [
        [0, 100, 200, 300, 400, 500],
        [0, 200, 300, 400, 2000, 100],
        [0, 300, 400, 500, 100, 200],
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
          // svgのY軸の扱いがグラフのY軸と逆のため-1
          Math.floor((elem / this.maxValue) * this.ratio * this.chartHeight) * -1,
        ]));
    },
    plot() { return this.convertPoint.map(points => points.map(p => p.join(' ')).join(' ')); },
    // Y軸方向の描画を逆にする
    axisYtransform() { return `translate(${this.paddingLeft} ${this.chartHeight})`; },
  },
};
</script>

<style lang="scss" scoped>
.line-0{
  stroke:red;
  stroke-width: 1px;
}
.line-1{
  stroke:blue;
  stroke-width: 1px;
}

.line-2{
  stroke:green;
  stroke-width: 1px;
}
</style>
