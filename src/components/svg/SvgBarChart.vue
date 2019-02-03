<template>
  <div class="chart-line">
    <svg :viewBox="viewBox"
         :width="svgWidth"
         :height="svgHeight"
         >
      <g class="chart-line__series-line" :transform="axisYtransform">
        <path v-for="(line, i) in plot"
                  :key="i"
                  :d="line"
                  fill="none"
                  :stroke-width="20"
                  :class="'line-' + i"
                  >
        </path>
        <text :x="0" :y="chartHeight" font-size="12px">2000</text>
      </g>
      <!-- X軸 -->
      <line :x1="paddingLeft"
            :x2="svgWidth - paddingRight"
            :y1="chartHeight"
            :y2="chartHeight" stroke="#000"></line>
      <!-- Y軸 -->

      <line v-for="(item, i) in this.sample[0]" :key="i"
            :x1="paddingLeft"
            :x2="paddingLeft"
            :y1="0"
            :y2="chartHeight" stroke="#000"></line>
      <!--FIXME: これ繰り返しでできるようにせな-->
      <!--FIXME: あとテキストは適当な数値算出するように頑張る-->
      <text :x="0" :y="chartHeight" font-size="12px">2000</text>
      <text :x="paddingLeft" :y="svgHeight - (paddingBottom / 2  )" font-size="12px">111</text>
    </svg>
  </div>
</template>

<script>
// padding * はラベル描画領域の確保
export default {
  name: 'SvgBarChart',
  props: {
    svgWidth: { type: Number, default: 600 },
    svgHeight: { type: Number, default: 400 },
    barWidth: { type: Number, default: 20 },
    paddingBottom: { type: Number, default: 36 },
    paddingLeft: { type: Number, default: 36 },
    paddingRight: { type: Number, default: 12 },
  },
  data() {
    return {
      sample: [100, 200, 300, 400, 500],
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
    // applyで配列を引数として展開してくれる
    maxValue() { return Math.max(...this.sample); },
    ratio() { return (this.maxValue * 0.95) / this.maxValue; },
    convertPoint() {
      return this.sample
        .map((data, index) => [{
          x: ((this.barWidth * 2) * (index + 1)),
          // svgのY軸の扱いがグラフのY軸と逆のため-1
          y: Math.floor((data / this.maxValue) * this.ratio * this.chartHeight) * -1,
        }]);
    },
    // TODO: データラベルつけ
    plot() { return this.convertPoint.map(points => points.map(p => `M ${p.x} 0 V ${p.y} 0`)); },
    // Y軸方向の描画を逆にする
    axisYtransform() { return `translate(${this.paddingLeft} ${this.chartHeight})`; },
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
