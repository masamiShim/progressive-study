import Vue from 'vue';
import Router from 'vue-router';
import QiitaItemListView from '@/components/QiitaItemListView';
import SvgChartLine from '@/components/svg/SvgChartLine';
import SvgBarChart from '@/components/svg/SvgBarChart';
import SvgDonutChart from '@/components/svg/SvgDonutChart';
import PortfolioView from '@/components/vue-portfolio/PortfolioView';
import ProjectDetailView from '@/components/vue-portfolio/ProjectDetailView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QiitaItemListView',
      component: QiitaItemListView,
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
    {
      path: '/portfolio/resume',
      name: 'PortfolioView',
      component: PortfolioView,
    },
    {
      path: '/portfolio/project',
      name: 'ProjectDetailView',
      component: ProjectDetailView,
    },
  ],
});
