import * as axios from 'axios';

const host = 'https://qiita.com';

export default {
  async fetchTags() {
    const res = await axios({
      method: 'GET',
      url: `${host}/api/v2/tags`,
      param: {
        page: 1,
        per_page: 20,
        sort: 'count',
      },
    });
    return res;
  },
  async fetchItems(q, pageNum, perPage) {
    const res = await axios({
      method: 'GET',
      url: `${host}/api/v2/items`,
      param: {
        page: pageNum,
        per_page: perPage,
        query: encodeURIComponent(q),
      },
    });
    return res;
  },
};

