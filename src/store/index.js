import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recepies: [],
    recipe: {}
  },
  mutations: {
    GET_RECEPIES (state, recepies) {
      state.recepies = recepies;
    },
    GET_RECIPE(state, recipe){
      state.recipe = recipe;
    }
  },
  actions: {
    getRecepies(context) {
      axios.get(`${process.env.VUE_APP_IP}/recipes`,{
        headers: {
          Authorization:`Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        context.commit("GET_RECEPIES",r.data)
      })

    },
    getRecipe(context, id){
      axios.get(`${process.env.VUE_APP_IP}/recipes/${id}`, {
        headers: {
          Authorization:`Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        context.commit("GET_RECIPE", r.data);

      }).catch(err => {
        console.log(err)
      })

    }
  },
  modules: {
  }
})
