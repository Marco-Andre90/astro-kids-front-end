export const mutations = { 
    setUsuarioLogado(state, payload) {
        state.id_usuario = payload.idUsuario
        state.nome = payload.nome
        state.sobrenome = payload.sobrenome
    }
}