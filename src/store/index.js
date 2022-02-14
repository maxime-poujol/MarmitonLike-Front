import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    userRecipes: [],
    recipe: {},
    _token: ""
  },
  mutations: {
    GET_RECIPES (state, recipes) {
      state.recipes = recipes;
    },
    GET_RECIPE(state, recipe){
      state.recipe = recipe;
    },
    SET_TOKEN(state, token){
      state._token = token;
    },
    GET_USER_RECIPES(state,recipes) {
      state.userRecipes = recipes;
    }
  },
  actions: {
    getRecipes(context) {
      axios.get(`${process.env.VUE_APP_IP}/recipes`,{
        headers: {
          Authorization:`Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        context.commit("GET_RECIPES",r.data);
      })

    },
    getRecipe(context, id){
      axios.get(`${process.env.VUE_APP_IP}/recipes/${id}`, {
        headers: {
          Authorization:`Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        context.commit("GET_RECIPE", r.data[0]);

      }).catch(err => {
        console.log(err);
      })
    },
    login(context, body){
      axios.post(`${process.env.VUE_APP_IP}/login`, body).then(r => {
        context.commit("SET_TOKEN", r.data)
        sessionStorage.token = r.data;
        router.push("recipes");
      }).catch(() => {
        this.error = "Mauvais profil/mdp";
      })
    },
    setToken(context, token){
      context.commit("SET_TOKEN", token)
    },

    getUserRecipes(context) {
      axios.get(`${process.env.VUE_APP_IP}/myrecipes`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`
        }
      }).then(r => {
        context.commit("GET_USER_RECIPES",r.data);
      })
    }
  },
  modules: {
  }
})
