import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import ip from "@/config/adress";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recepies: []
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
    }
  },
  actions: {
    getRecepies(context) {
      context.commit("GET_RECEPIES")
    }
  },
  modules: {
  }
})
