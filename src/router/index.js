import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/pages/Homepage";
import Recepies from "@/pages/recipe/Recepies";
import Recipe from "@/pages/recipe/Recipe";

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
        }

    ]
})