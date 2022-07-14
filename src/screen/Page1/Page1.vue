<template>
  <body>
    <AppHeader />
    <AppSlideshow/>
    <AppFooter/>
    
  </body>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from '../../components/AppHeader/AppHeader.vue'
import AppSlideshow from '../../components/AppSlideshow/AppSlideshow.vue'
import AppFooter from '../../components/AppFooter/AppFooter.vue'
export default {
  name: 'PageOne',
  components: {
    // HelloWorld,
    AppHeader,
    AppFooter,
    AppSlideshow
}
}
</script>

<style>
</style>
