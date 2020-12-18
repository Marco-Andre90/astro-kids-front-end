import api from '../../service/api'


export const actions = {
    registroUsuario(context, [usuario]){
        api.post('usuario', usuario).then(
            (res)=> {
                context.commit('setUsuarioLogado', res.data)
            }
        )
    },
    logarNoSistema(context, [usuario, senha]){
        api.post('login', {usuario,senha}).then( (res) =>{
            context.commit('setUsuarioLogado', res.data)
            window.location.reload()
        })
    }
}