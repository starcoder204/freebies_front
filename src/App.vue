<template>
  <div id="app">
    <HeaderNav />
    <b-container fluid>
      <router-view/>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    HeaderNav,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
