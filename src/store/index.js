import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recepies: [],
    recipe: {},
    _token: ""
  },
  mutations: {
    GET_RECEPIES (state, recepies) {
      state.recepies = recepies;
    },
    GET_RECIPE(state, recipe){
      state.recipe = recipe;
    },
    SET_TOKEN(state, token){
      state._token = token;
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
    },
    login(context, body){
      axios.post(`${process.env.VUE_APP_IP}/login`, body).then(r => {
        context.commit("SET_TOKEN", r.data)
        sessionStorage.token = r.data;
        router.push("recepies");
      }).catch(() => {
        this.error = "Mauvais profil/mdp";
      })
    },
    setToken(context, token){
      context.commit("SET_TOKEN", token)
    }
  },
  modules: {
  }
})
