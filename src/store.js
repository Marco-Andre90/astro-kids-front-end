import agenda from "./modules/agenda/agenda"
import comunicacao from "./modules/comunicacao/comunicacao"
import familia from "./modules/familia/familia"
import familiaLogada from "./modules/familiaLogada/familiaLogada"
import login from "./modules/login/login"
import usuario from "./modules/usuario/usuario"
import usuarioLogado from "./modules/usuarioLogado/usuarioLogado"
import usuarioCrianca from "./modules/usuarioCrianca/usuarioCrianca"
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        agenda,
        comunicacao,
        familia,
        familiaLogada,
        login,
        usuario,
        usuarioLogado,
        usuarioCrianca,
    }
})
