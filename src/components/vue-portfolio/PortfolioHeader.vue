<template>
  <header class="c-header l-header">
    <div>About</div>
    <router-link to="/portfolio/project">project</router-link>
  </header>
</template>

<script>
export default {
  name: 'PortfolioHeader',
};
</script>

<style lang="scss" scoped>
 .c-header {
   font-size: 2em;
   width: 100%;
   background-color: #efefef;
   height: 100px;
   line-height: 100px;
   box-sizing: border-box;
 }
  .l-header {
    margin: 0 auto;
  }
</style>
