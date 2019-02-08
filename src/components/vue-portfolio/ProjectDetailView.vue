<template>
  <div>
    <PortfolioHeader />
    <ProjectDetailContents />
    <PortfolioFooter/>
  </div>
</template>

<script>
import ProjectDetailContents from '@/components/vue-portfolio/components/project/ProjectDetailContents';
import PortfolioHeader from '@/components/vue-portfolio/PortfolioHeader';
import PortfolioFooter from '@/components/vue-portfolio/PortfolioFooter';

export default {
  name: 'ProjectDetailView',
  components: {
    PortfolioHeader,
    ProjectDetailContents,
    PortfolioFooter,
  },
};
</script>

<style scoped>

</style>
