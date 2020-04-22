import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skillCategories: [],
  },

  getters: {
    getSkills:(state) => (category) => {
      if (state.skillCategories.length > 0) { 
        return state.skillCategories.find((skill) => skill.category===category);
      }
    return [];
    },
  },

  mutations: {
    skillCategories(state, payload) {
      state.skillCategories = payload.skillCategories;
    },
  },

  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await axios.get('https://us-central1-kota1248-98213.cloudfunctions.net/skills')
      res.data.forEach((category) => {
        skillCategories.push(category);
      });    
      commit('setSkillCategories',{skillCategories});
    },
  },
})