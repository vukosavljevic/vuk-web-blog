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
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&family=Open+Sans:wght@400;600;700&display=swap');
body{
  background:rgb(146, 133, 133);
  background-size: cover;
}
#app {
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  margin-top: 2rem;
}
</style>
