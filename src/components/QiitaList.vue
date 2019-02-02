<template>
  <div class="c-scroll-wrapper" @scroll="infiniteScroll">
    <ul class="c-qiita-lists l-qiita-lists">
      <li class="c-qiita-list l-qiita-list" v-for="(i, index) in items" :key="index">
        <h3 class="c-qiita-list_title l-qiita-list_title">{{ i.title }}</h3>
        <div class="c-qiita-list_tags">
            <span class="c-qiita-list_tag l-qiita-list_tag"
                  v-for="(tag, index) in i.tags"
                  :key="index">
              {{ tag.name }}
            </span>
        </div>
        <div class="c-qiita-list_content">
          <pre class="c-qiita-list_description">{{ i.body }}</pre>
        </div>
        <div class="c-qiita-list_link"><a :href="i.url" target="_blank">続きはこちら</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QiitaList',
  props: ['items'],
  methods: {
    infiniteScroll(event) {
      if ((event.target.scrollTop + event.target.offsetHeight)
        >= (event.target.scrollHeight - 100)) {
        this.$emit('handle-next');
      }
    },
  },
};
</script>

<style scoped>

  .c-scroll-wrapper{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }
  .c-qiita-lists {
    margin: 0;
    padding: 0;
  }

  .l-qiita-lists {
    width: 80%;
    margin: 0 auto;
  }

  .c-qiita-list {
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
  }

  .l-qiita-list {
    width: 100%;
  }

  .c-qiita-list_title {
    font-weight: bold;
    text-align: left;
  }

  .l-qiita-list_title {
  }

  .c-qiita-list_tag {
    display: inline-block;
    font-size: 12px;
    padding: 8px 10px;
    background-color: slateblue;
    color: #ffffff;
    border-radius: 12px;
  }

  .l-qiita-list_tag {
    margin-right: 10px;
    margin-top: 12px;
  }

  .l-qiita-list_tag:last-child {
    margin-right: 0;
  }

  .c-qiita-list_content {
    margin-top: 20px;
  }

  .c-qiita-list_description {
    font-size: 12px;
    height: 12em;
    width: 100%;
    overflow: hidden;
    line-height: 2em;
    white-space: pre-wrap;
  }

</style>
