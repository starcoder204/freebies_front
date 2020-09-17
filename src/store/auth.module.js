import { userServices } from '@/services/index'

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: null
}

const mutations = {
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, data) {
    state.status = 'success'
    state.token = data.token
    state.user = data.user
    localStorage.setItem('token', data.token)
  },
  auth_error (state) {
    state.status = 'error'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = null
    localStorage.removeItem('token')
  }
}

const actions = {
  async login ({ commit }, payload) {
    return await userServices.login(payload).then(resp => {
      if (resp.user) {
        commit('auth_success', { token: resp.token, user: resp.user })
      }
      return resp
    }).catch(err => {
      console.log(err)
    })
    // return new Promise((resolve, reject) => {
    //   userServices.login(payload,
    //     resp => {
    //       if (resp.user) {
    //         commit('auth_success', { token: resp.token, user: resp.user })
    //       }
    //       resolve(resp)
    //     },
    //     errors => {
    //       console.log('error load products ')
    //       reject(errors)
    //     }
    //   )
    // })
    // return new Promise((resolve, reject) => {
    //   commit('auth_request')
    //   commit('auth_success', { token: 'token', user: payload }) // for TEST
    //   axios({url: 'http://localhost:3000/login', data: user, method: 'POST' })
    //   .then(resp => {
    //     const token = resp.data.token
    //     const user = resp.data.user
    //     localStorage.setItem('token', token)
    //     axios.defaults.headers.common['Authorization'] = token
    //     commit('auth_success', token, user)
    //     resolve(resp)
    //   })
    //   .catch(err => {
    //     commit('auth_error')
    //     localStorage.removeItem('token')
    //     reject(err)
    //   })
    // })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
    // axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
    // .then(resp => {
    //   const token = resp.data.token
    //   const user = resp.data.user
    //   localStorage.setItem('token', token)
    //   axios.defaults.headers.common['Authorization'] = token
    //   commit('auth_success', token, user)
    //   resolve(resp)
    // })
    // .catch(err => {
    //   commit('auth_error', err)
    //   localStorage.removeItem('token')
    //   reject(err)
    // })
    })
  },
  async logout ({ commit }) {
    return await userServices.logout().then(() => {
      commit('logout')
    }).catch(err => {
      console.log(err)
    })
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
}

export default {
  state,
  actions,
  mutations,
  getters
}
