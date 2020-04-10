<template>
  <div id="app">
    <button
      class="btn btn-success"
      @click="toggle"
    >
      toggle
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open" />
    </Drawer>
    <header>
      <div id="nav-drawer">
        <input
          id="nav-input"
          type="checkbox"
          class="nav-unshown"
        >
        <label
          id="nav-open"
          for="nav-input"
        ><span /></label>
        <label
          id="nav-close"
          class="nav-unshown"
          for="nav-input"
        />
        <div id="nav-content">
          ここに中身を入れる
        </div>
      </div>
    </header>
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