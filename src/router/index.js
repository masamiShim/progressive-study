import Vue from 'vue';
import Router from 'vue-router';
import QiitaItemListView from '@/components/QiitaItemListView';
import SvgView from '@/components/svg/SvgView';
import SvgChartLine from '@/components/svg/SvgChartLine';
import SvgBarChart from '@/components/svg/SvgBarChart';
import SvgDonutChart from '@/components/svg/SvgDonutChart';

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
    {
      path: '/svg-bar',
      name: 'SvgBarChart',
      component: SvgBarChart,
    },
    {
      path: '/svg-donut',
      name: 'SvgDonutChart',
      component: SvgDonutChart,
    },
  ],
});
