import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import ip from "@/config/adress";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recepies: [],
    recipe: {}
  },
  mutations: {
    GET_RECEPIES (state) {
      axios.get(`${ip}/recipes`,{
        headers: {
          Authorization:`Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        state.recepies = r.data;
      })
    },
    GET_RECIPE(state, id){
      axios.get(`${ip}/recipes/${id}`, {
        headers: {
          Authorization:`Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        state.recipe = r.data

      }).catch(err => {
        console.log(err)
      })
    }
  },
  actions: {
    getRecepies(context) {
      context.commit("GET_RECEPIES")
    },
    getRecipe(context, id){
      context.commit("GET_RECIPE", id)
    }
  },
  modules: {
  }
})
