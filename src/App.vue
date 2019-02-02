<template>
  <div id="app">
    <div class="container">
    <Header/>
    <Navigation />
    <router-view/>
    <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: { Footer, Header, Navigation },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
