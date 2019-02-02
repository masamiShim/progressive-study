<template>
  <div>
    <div>
      <ul>
        <li v-for="(err, index) in errors" :key="index">
          {{ err }}
        </li>
      </ul>
    </div>
    <div v-show="loading" class="c-loading-wrapper">
      <i class="c-loading-icon"></i>
    </div>
    <QiitaList :items="items" @handle-next="handleFetchNext" />
  </div>
</template>

<script>
/* eslint-disable no-return-assign */


import QiitaList from '@/components/QiitaList';
import API from '../api/index';

export default {
  name: 'QiitaItemListView',
  components: { QiitaList },
  data() {
    return {
      items: [],
      loading: false,
      page: 1,
      per: 20,
      errors: [],
    };
  },
  methods: {
    async fetch() {
      this.loading = true;
      API.QiitaClient.fetchItems('', this.page, this.per)
        .then((res) => {
          const result = res.data.map(dat => ({
            title: dat.title,
            tags: dat.tags,
            body: dat.body,
            url: dat.url,
          }));
          this.items = result;
        })
        .catch((err) => {
          if (err.response) {
            this.errors.push(`${err.response.data.message} , ${err.response.data.type}`);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleFetchNext() {
      this.page = this.page + 1;
      this.fetch();
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .c-loading-icon {
    display: block;
    position: fixed;
    top: calc(50% - 125px / 2);
    left: calc(50% - 125px / 2);
    height: 125px;
    width: 125px;
    animation: spin 1.5s linear infinite;
    background-image: url(/static/img/loading.png);
    z-index: 9999;
  }

  .c-loading-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    background-color: #cdcdcd;
    opacity: .8;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
