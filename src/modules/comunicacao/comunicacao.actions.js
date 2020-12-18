import api from '../../service/api'


export const actions = {
    listarCartoes(context, [{app}]){
        api.get('cartoes').then((res)=>{
            context.commit('setCards', res.data)
            app.isLoaded = true
        })
    },
    enviaCartao(context, [Usuario]){
        console.log(Usuario)
        api({
            method: 'post',
            url: '/enviar',
            data: Usuario
        }).then((res)=>{
            console.log(res)
        })
    }
}