<template>
  <div id="app">
<<<<<<< HEAD
   <button @click="toggle" class="btn btn-success">toggle</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div> 
    </Drawer>
    <div class="absolute_test">
</div>
=======
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
>>>>>>> 3248624b005c006146d3d49e2588590cc1ab806f
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
.absolute_test {
    position:  absolute;        /* 要素の配置方法を指定 */
    background-color: #ccc;     /* 背景色指定 */
    padding:  20px;             /* 余白指定 */
    left:  100px;                /* 左からの位置指定 */
    top: 50px;                  /* 上からの位置指定 */
}
</style>