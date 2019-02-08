<template>
  <div>
    <PortfolioHeader/>
    <PortfolioContents/>
    <PortfolioFooter/>
  </div>
</template>

<script>
import PortfolioHeader from '@/components/vue-portfolio/PortfolioHeader';
import PortfolioContents from '@/components/vue-portfolio/PortfolioContents';
import PortfolioFooter from '@/components/vue-portfolio/PortfolioFooter';

export default {
  name: 'PortfolioView',
  components: {
    PortfolioFooter,
    PortfolioContents,
    PortfolioHeader,
  },
};
</script>

<style scoped>

</style>
