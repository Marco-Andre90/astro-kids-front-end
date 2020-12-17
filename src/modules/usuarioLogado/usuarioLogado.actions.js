import api from '../../service/api'


export const actions = {
    requisicaoZoada(context, [usuario, {app}]){
        api.post('usuario', usuario).then(
            (res)=> {
                context.commit('setUsuarioLogado', res.data) 
                app.hasId = true
            }
        )
    }
}