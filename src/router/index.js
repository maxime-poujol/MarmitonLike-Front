import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/pages/Homepage";
import Recipes from "@/pages/recipe/Recipes";
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
            component: Recipes,
            name: 'Recipes',
            path: '/recipes'
        },
        {
            component: Recipe,
            name: 'Recipe',
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