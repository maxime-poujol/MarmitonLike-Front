import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/pages/Homepage";
import Recepies from "@/pages/Recepies";

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
        }

    ]
})