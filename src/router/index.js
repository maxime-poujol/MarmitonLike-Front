import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/components/Homepage";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            component: Homepage,
            name: 'homePage',
            path: '/'
        }
    ]
})