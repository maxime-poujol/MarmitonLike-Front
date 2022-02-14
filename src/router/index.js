import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/pages/Homepage";
import Recepies from "@/pages/recipe/Recepies";
import Recipe from "@/pages/recipe/Recipe";
import MyRecipe from "@/pages/recipe/MyRecipe";
import CreateRecipe from "@/pages/recipe/CreateRecipe";
import UpdateRecipe from "@/pages/recipe/UpdateRecipe";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            component: Homepage,
            name: 'homePage',
            path: '/'
        },
        {
            component: Recepies,
            name: 'recepies',
            path: '/recepies'
        },
        {
            component: Recipe,
            name: 'recipe',
            path: '/recipe/:id',
        },
        {
            component: MyRecipe,
            name: 'myRecipe',
            path: '/myrecipe',
        },
        {
            component: CreateRecipe,
            name: 'myRecipe-create',
            path: '/myrecipe/create',
        },
        {
            component: UpdateRecipe,
            name: 'myRecipe-update',
            path: '/myrecipe/update',
        },
        {
            component: UpdateRecipe,
            name: 'myRecipe-delete',
            path: '/myrecipe/delete',
        },

    ]
})