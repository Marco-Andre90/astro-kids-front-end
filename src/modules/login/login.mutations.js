export const mutations = { 
    alertLogin(state){ 
        console.log(state)
    },

    bindLogin(state, payload){
        state.login = payload
    }
}