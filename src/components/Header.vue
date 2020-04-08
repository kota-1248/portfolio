
<template>
  <div id="app">
    <button @toggle="header" class="btn btn-success">toggle</button>
    <Drawer @toggle="header" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>
 
<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "App",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 150px;
  margin: 0 auto;
  width: 800px;
}
</style>