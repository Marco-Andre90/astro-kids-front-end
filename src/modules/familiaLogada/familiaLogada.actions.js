import api from '../../service/api'


export const actions = {
    registrarFamilia(context, [familia]){
        api.post('familia', familia).then(
            (res)=> {
                context.commit('setFamiliaLogada', res.data)
            }
        )
    }
}