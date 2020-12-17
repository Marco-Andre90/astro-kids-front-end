export function getDefaultUsuarioLogado(){
    return {
        id_usuario: null,
        nome: null,
        sobrenome: null,
        tipo: null,
        data_nascimento: new Date().toISOString().substr(0, 10),
        celular: null,
        endereco: null,
        email: null,
        usuario_login: null,
        senha: null,
        nomeCriancao: null,
        sobrenomeCrianca: null,
        usuarioCrianca: null,
        senhaCrianca: null
    }
}
