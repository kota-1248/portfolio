<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      <p>
        ozawa
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: {default: '', type: String}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aboutSection {
  background-color: #f5f5f5;
  text-align: center;
  padding: 10px;
}

#aboutTitle {
  color: #20879f;
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  padding-bottom: 10px;
}

#aboutExplain {
  font-size: 12pt;
  color: #707070;
  font-family:"Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif; 
  line-height:1.5;
  margin: auto;
  width: 65%;
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