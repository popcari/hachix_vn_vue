<template>
  <body>
    <AppHeader/>
    <AppWallpaper/>
    <AppFooter/>
    
  </body>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from '../../components/AppHeader/AppHeader.vue'
import AppWallpaper from '../../components/AppWallpaper/AppWallpaper.vue'
import AppFooter from '../../components/AppFooter/AppFooter.vue'
export default {
    name: 'PageTwo',
    components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    AppHeader,
        // eslint-disable-next-line vue/no-unused-components
        AppWallpaper,    
    AppFooter
    
}
}
</script>

<style>
</style>
