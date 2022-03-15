import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
        userRecipes: [],
        _token: ""
    },
    mutations: {
        GET_RECIPES(state, recipes) {
            state.recipes = recipes;
        },
        SET_TOKEN(state, token) {
            state._token = token;
        },
        GET_USER_RECIPES(state, recipes) {
            state.userRecipes = recipes;
        }
    },
    getters: {
        getRecipe: (state) => (id) => {
            const index = state.recipes.findIndex((recipe) => {
                return recipe.id === parseInt(id)
            });
            const recipe = state.recipes[index]
            recipe.ingredients = JSON.parse(recipe.ingredients);
            return recipe;
        },

        getUserRecipe: (state) => (id) => {
            const index = state.userRecipes.findIndex((recipe) => {
                return recipe.id === parseInt(id)
            });
            return state.userRecipes[index];
        },
    },
    actions: {
        getRecipes(context) {
            axios.get(`${process.env.VUE_APP_IP}/recipes`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
            }).then(r => {
                context.commit("GET_RECIPES", r.data);
            })

        },
        login(context, body) {
            axios.post(`${process.env.VUE_APP_IP}/login`, body).then(r => {
                context.commit("SET_TOKEN", r.data)
                sessionStorage.token = r.data;
                router.push("recipes");
            }).catch(() => {
                this.error = "Mauvais profil/mdp";
            })
        },
        setToken(context, token) {
            context.commit("SET_TOKEN", token)
        },
        getUserRecipes(context) {
            axios.get(`${process.env.VUE_APP_IP}/myrecipes`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
            }).then(r => {
                context.commit("GET_USER_RECIPES", r.data);
            })
        },
        deleteRecipe(context,id) {
            axios.delete(`${process.env.VUE_APP_IP}/recipes/${id}`,{
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
            })
        },
        createRecipe(context,data) {
            data.cookingTime = parseInt(data.cookingTime);
            data.preparationTime = parseInt(data.preparationTime);
            data.restTime = parseInt(data.restTime);
            axios.post(`${process.env.VUE_APP_IP}/recipes/`,data,{
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
            })
        },
        updateRecipe(context,payload) {
            axios.put(`${process.env.VUE_APP_IP}/recipes/${payload.id}`,payload.data,{
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
            })
        },
    },
    modules: {}
})
