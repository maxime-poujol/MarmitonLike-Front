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
            return state.recipes[index];
        }
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
        getRecipe(context, id) {
            const index = context.state.recipes.findIndex((recipe) => {
                return recipe.id === parseInt(id)
            });
            return context.state.recipes[index];

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

        }
    },
    modules: {}
})
