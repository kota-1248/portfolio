<template>
  <div>
    <div id="app">
      <Header />
      <Main />
      <About />
      <Skill />
      <Vision />
      <Footer />
    </div>
    
    <!-- //*<transition name="fade">
      <a
        v-show="isShow"
        v-scroll-to="'#top'"
        href="#app"
        class="scroll-top"
      >
        <i class="fa fa-angle-up fa-lg scroll-top__ico" />
      </a>
    </transition> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
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
    Footer
  },
  mounted () {
 this.$store.dispatch('updateSkillCategories')
 },
  
}


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