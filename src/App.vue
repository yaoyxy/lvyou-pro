<template>
  <div id="app">
    <div class="center">
      <my-header />
      <router-view />
      <my-foot/>
    </div>
  </div>
</template>

<script>
import MyFoot from './components/MyFoot.vue';
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader, MyFoot },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
/* #app {
  width: 100%;
  // width: 1690.67px;
  // overflow-x: hidden;
  margin: 0 auto;
  // .center {
  // }
} */
</style>
