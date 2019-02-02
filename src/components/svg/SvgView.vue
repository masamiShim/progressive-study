<template>
  <div>
  <!-- width, heightは画面上に表示されるサイズ -->
  <!-- viewBoxは切り取って詰め込む？(x y width height)-->
  <svg :width="svgHeight()"
       :height="120 * ratio"
       :viewBox="'0 0 ' + svgHeight() + ' ' + 120 * ratio"
       class="line-graph">
    <g v-for="data in all_data" :key="data.type" :class="'type-' + data.type">
      <g v-for="(score, index) in data.scores" :key="index">
        <!-- lineは始点と終点を設定可能-->
        <line v-if="index != 0"
              :x1="(index - 1) * row_height"
              :y1="data.scores[index-1] * ratio"
              :x2="index * row_height"
              :y2="score * ratio"
        />
        <!-- circleは円の中心の座標と半径を指定(今回はcssで指定してるらしい)-->
        <circle
          :cx="index * row_height"
          :cy="score * ratio"
          />
      </g>
    </g>
    <g v-for="(point, index) in points" :key="index" class="line">
      <line :x1="0"
            :x2="120 * ratio"
            :y1="point"
            :y2="point"
      />
    </g>
  </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgView',
  data() {
    return {
      all_data: [
        {
          type: 'a',
          scores: [34, 46, 28, 39, 60],
        },
        {
          type: 'b',
          scores: [47, 32, 52, 33, 52],
        },
        {
          type: 'c',
          scores: [38, 29, 42, 53, 41],
        },
        {
          type: 'd',
          scores: [52, 57, 69, 48, 46],
        },
      ],
      points: [
        0,
        20,
        40,
        60,
        80,
        100,
      ],
      ratio: 4,
      row_height: 30,
    };
  },
  methods: {
    svgHeight() {
      return (this.all_data[0].scores.length + 1) * this.row_height;
    },
  },
};
</script>

<style lang="scss" scoped>
  $types: (
  'a': #838a90,
  'b': #62b2f7,
  'c': #e24f7c,
  'd': #e69042
  );

  .line-graph{
    background-color: #fff;
    padding: 20px;
    @each $type, $color in $types{
      .type-#{$type}{
        circle{
          cursor: pointer;
          fill: $color;
          r: 4;
          transition: all .1s;
          &:hover{
            r: 6;
          }
        }
        line{
          stroke: rgba($color, .5);
          stroke-width: 1.5px;
        }
      }
    }
  }
  .line {
    stroke: rgba(#898989, .5);
    stroke-width: 1.5px;
  }
</style>
