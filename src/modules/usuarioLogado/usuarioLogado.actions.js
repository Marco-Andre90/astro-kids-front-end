import api from '../../service/api'


export const actions = {
    registroUsuario(context, [usuario]){
        api.post('usuario', usuario).then(
            (res)=> {
                context.commit('setUsuarioLogado', res.data)
            }
        )
    }
}