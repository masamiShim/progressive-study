import Vue from 'vue';
import Router from 'vue-router';
import QiitaItemListView from '@/components/QiitaItemListView';
import SvgView from '@/components/svg/SvgView';
import SvgChartLine from '@/components/svg/SvgChartLine';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QiitaItemListView',
      component: QiitaItemListView,
    },
    {
      path: '/svg',
      name: 'SvgView',
      component: SvgView,
    },
    {
      path: '/svg-chart',
      name: 'SvgChartLine',
      component: SvgChartLine,
    },
  ],
});
