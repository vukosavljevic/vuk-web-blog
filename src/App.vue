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
html {
  --scrollbarBG: rgb(146, 133, 133);
  --thumbBG: red;
}
body::-webkit-scrollbar {
  width: 20px;
  margin:0 !important;
  padding: 0 !important;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
}


body{
  background:rgb(146, 133, 133);
  background-size: cover;
}
.container{
    width: 50%;
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
