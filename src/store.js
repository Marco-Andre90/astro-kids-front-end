import login from "./modules/login/login"
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        login
    }
})
