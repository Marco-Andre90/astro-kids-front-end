import api from '../../service/api'


export const actions = {
    registraCrianca(context, [usuarioCrianca]){
        api.post('usuario', usuarioCrianca)
    }
}