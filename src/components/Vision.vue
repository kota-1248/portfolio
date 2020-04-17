<template>
  <div id="visionSection">
    <div id="visionTitle">
      Vision
    </div>
    <div id="visionExplain">
      <p>
        地元でおきた豪雨災害にて、被害にあった友人と連絡が取れなくなったことがきっかけでITインフラについて興味を持ちました。HTMLやCSSをもっと勉強するとともに、Linuxシステムにおけるハードウェア、OS、ミドルウェアなど様々な構築の経験を持ち将来は構築だけにとどまらず、設計から携われるエンジニアになりたいと考えています。
      </p>
    </div>
  </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#visionSection {
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px 0;
  height: auto;
  width: 100%;
}

#visionTitle {
  color: #20879f;
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  padding-bottom: 10px;
  text-shadow: 0 0 6px gray;
}

#visionExplain {
  font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin: auto;
  width: 75%;
  text-align: left;
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