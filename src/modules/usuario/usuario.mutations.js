export const mutations = { 
    resetState (state) {
        Object.assign(state, this.getDefaultUsuario)
    },
}