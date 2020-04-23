import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    skills:[],
    loaded:false
  },
   mutations: {
    setSkillCategories (state,payload) {
    state.skills = payload
    state.loaded = true
    }
  },
  actions: {
    updateSkillCategories:function({commit}) {
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillCategories';
      return axios.get(functionsUrl)
      .then(response => {
        commit('setSkillCategories',response.data);
      })
    },
  },
  getters: {
    skillName: (state) => (index) => {
      const skillNameArray = []
      if(state.skills){

        state.skills[index].skills.forEach((Skill) => {
          skillNameArray.push(Skill.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => (index) => {
      const skillScoreArray = []
      if(state.skills[index]){
        state.skills[index].skills.forEach((Skill) => {
          skillScoreArray.push(Skill.score)
        })
      }
      return skillScoreArray
    },
    
    }
  }
  
)
