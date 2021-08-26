export const state = () => ({
    user: null,
    newUser: false,
    isAdmin: false,
  })
  
  export const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
      if (!authUser) {
        state.commit('SET_USER', null)
        state.commit('SET_ADMIN', false)
        state.commit('SET_NEWUSER', false)
        state.commit('cart/setItems', [])
  
        this.$router.push({
          path: '/products'
        })
      } else {
        const { uid, email } = authUser
        state.commit('SET_USER', {
          uid,
          email
        })

        
      }
    }
  }
  
  export const mutations = {
    SET_USER(state, user) {
      state.user = user
    },
  
    SET_NEWUSER(state, status) {
      state.newUser = status
    },
  
    SET_ADMIN(state, status) {
      state.isAdmin = status
    },
  
    SET_CONTACT(state, data) {
      state.user.phoneNo = data.phoneNo
      state.user.address = data.address
    },
  
    SET_ADDRESS(state, data) {
      state.user.address = data
    },
  
    SET_PHONE(state, data) {
      state.user.phoneNo = data
    },
  
    SET_GUEST(state, data) {
      state.user = data
    }
  }
  
  export const getters = {
    getUser: state => state.user
  }