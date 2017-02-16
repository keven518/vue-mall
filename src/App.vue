<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link v-bind:to="'/goods'">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello';
import header from './components/header/header.vue';

export default {
  components: {
    Hello,
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  .tab-item
    flex:1
    text-align: center
    & > a
      display: block
      font-size: 14px
      color:rgb(77, 85, 93)
      &.active
        color: rgb(240, 20, 20)
</style>
