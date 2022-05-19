<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'APP',
  components:{
    Header,
    Footer
  },
  mounted(){
    //通知Vuex发请求，获取数据，存储在仓库、
    this.$store.dispatch("categroyList");
  }
}
</script>

<style>

</style>
