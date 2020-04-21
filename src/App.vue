<template>
  <div>
    <div id="app">
      <Header />
      <Main />
      <div>{{ this.skills }}</div>
      <About />
      <Skill />
      <Vision />
      <sample />
      <Footer />
    </div>
    <transition name="fade">
      <a
        v-show="isShow"
        v-scroll-to="'#top'"
        href="#app"
        class="scroll-top"
      >
        <i class="fa fa-angle-up fa-lg scroll-top__ico" />
      </a>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import sample from './components/sample.vue'
import Footer from './components/Footer.vue'
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease"
});

export default {
  name: 'App',

  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    sample,
    Footer
  },
  data() {
    return {
      scrollY: 0,
      skills: []
    }
  },

  computed: {
      isShow() {
      return this,scrollY > 200 ? true : false;
      }
  },
  
  mounted () {
     this.getSkills();
    // スクロールを取得
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
    },
  
  methods: {
     getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-kota1248-98213.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
     },
    // スクロール値の取得
    onScroll() {
      this.scrollY = window.pageYOffset;
    }
  }
  };

</script>

<style lang="scss">
.scroll-top {
  position: fixed;
  background-color: blue;
  padding: 10px 16px;
  border-radius: 500px;
  display: none;

  &__ico {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  max-width: 768px;
  height: 1024px;
}
</style>