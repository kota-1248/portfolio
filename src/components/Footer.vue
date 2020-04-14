<template>
  <div id="footerSection">
    <a
      href="#app"
      @click="clickSmoothScroll()"
    ><img
      id="footerScroll"
      src="../assets/footer.png"
    ></a>
    <div id="footerCopyright">
      &copy; Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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