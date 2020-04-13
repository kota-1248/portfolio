<template>
  <div id="mainSection">
    <div id="userName">
      <h1>K.Ozawa</h1>
    </div>
    <div id="line">
      <hr
        size="1"
        width="170"
        color="white"
        align="center"
      >
    </div>
    <div id="companyName">
      <h1>Seattleconsulting</h1>
    </div>
    <div id="profile">
      <img
        id="profilePicture"
        src="../assets/sample.jpg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: {default: '', type: String}
  }
}
</script>

<style scoped>
#mainSection {
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  padding-bottom: 30px;
  text-align: center;
}

#userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
  padding: 20px 0;
  border-bottom: 1px solid#fff;
  margin: 0 310pt;
}

#companyName {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
}

h1 {
  color: white;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: font-wight hold;
  font-size: 18pt;
  text-shadow: 1px 2px 3px #c0c0c0;
}

.body {
  background: linear-gradient(#80e1f7, #06c1e6);
}

hr {
  width: 120pt;
  color: white;
  size: 1px;
}

#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
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

hr{
  margin:auto;
  color:white;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
</style>