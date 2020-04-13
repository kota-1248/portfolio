<template>
  <div id="drawerSection">
    <span>Menu</span>
    <ul id="drawerMenuSection" />
    <ul id="drawerMenuSection">
      <img
        id="drawerButton"
        src="../assets/メニューの無料アイコン５.png"
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: {default: '', type: String}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>