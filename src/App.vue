<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
import TheFooter from './components/UI/TheFooter.vue';

export default {
  components : {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
body{
  background-color: #034159;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 2rem;
}
</style>
