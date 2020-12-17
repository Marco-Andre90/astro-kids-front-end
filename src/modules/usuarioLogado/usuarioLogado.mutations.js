export const mutations = { 
    setUsuarioLogado(state, payload) {
        state.id_usuario = payload.idUsuario
        state.nome = payload.nome
        state.sobrenome = payload.sobrenome
        state.tipo = payload.tipo
        state.data = payload.dataNascimento
        state.celular = payload.celular
        state.endereco = payload.endereco
        state.email = payload.email
        state.usuario = payload.usuario
        state.senha = payload.senha
        state.familia = payload.familia
    }
}