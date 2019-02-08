<template>
  <aside class="c-sidebar l-sidebar">
    <ul class="c-project-list__container">
      <li>案件1</li>
      <li>案件2</li>
      <li>案件3</li>
      <li>案件4</li>
      <li>案件5</li>
      <li>案件6</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'PortfolioSidebar',
};
</script>

<style scoped>
  .c-sidebar {
    width: 20%;
    height: 100%;
    background-color: #2c3e50;
    color: white;
  }
 .l-sidebar {
   display: block;
   float: left;
 }
  .c-project-list__container{
    list-style: none;
  }
  .l-project-list{

  }
</style>
