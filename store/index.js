/* eslint-disable no-console */
/* eslint-disable no-console */
export const state = () => ({
    user: null,
  })
  
export const mutations = {
    updateUser: (state, user) => {
        state.user = user
    },
}
  
export const getters = {
    user: (state) => {
        return state.user
    },
    
    isAuthenticated(state) {
        return state.auth.loggedIn
    },
    
    loggedInUser(state) {
        return state.auth.user
    }
}