export const mutations = { 
    setUsuarioLogado(state, payload) {
        state.idUsuario = payload.idUsuario
        state.nome = payload.nome
        state.sobrenome = payload.sobrenome
        state.tipo = payload.tipo
        state.data = payload.dataNascimento
        state.celular = payload.celular
        state.endereco = payload.endereco
        state.email = payload.email
        state.userLogin = payload.userLogin
        state.senha = payload.senha
        state.familia = payload.familia
        state.cartoes = []
        localStorage.setItem('usuarioLogado', JSON.stringify(state))
    },
    setCartoes(state, payload){
        state.cartoes.push(payload)
    }
}