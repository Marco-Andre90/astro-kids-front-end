import agenda from "./modules/agenda/agenda"
import comunicacao from "./modules/comunicacao/comunicacao"
import familia from "./modules/familia/familia"
import login from "./modules/login/login"
import usuario from "./modules/usuario/usuario"
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        agenda,
        comunicacao,
        familia,
        login,
        usuario,
    }
})
