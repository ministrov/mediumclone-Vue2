import authAPI from '@/api/auth';
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSucces',
  registerFailure: '[auth] registerFailure',

  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSucces',
  loginFailure: '[auth] loginFailure',

  getCurrentUserStart: '[auth] getCurrentUserStart',
  getCurrentUserSuccess: '[auth] getCurrentUserSucces',
  getCurrentUserFailure: '[auth] getCurrentUserFailure',

  updateCurrentUserStart: '[auth] updateCurrentUserStart',
  updateCurrentUserSuccess: '[auth] updateCurrentUserSucces',
  updateCurrentUserFailure: '[auth] updateCurrentUserFailure',

  logout: '[auth] logout'
}

export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
  getCurrentUser: '[auth] getCurrentUser',
  updateCurrentUser: '[auth] updateCurrentUser',
  logout: '[auth] logout'
}

export const getterTypes = {
  currentUser: '[auth] currentUser',
  isLoggedIn: '[auth] isLoggedIn',
  isAnonymous: '[auth] isAnonymous'
}

const getters = {
  [getterTypes.currentUser]: state => {
    return state.currentUser;
  },
  [getterTypes.isLoggedIn]: state => {
    return Boolean(state.isLoggedIn);
  },
  [getterTypes.isAnonymous]: state => {
    return state.isLoggedIn === false
  }
}

const mutations = {
  [mutationTypes.registerStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationTypes.registerFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.getCurrentUserStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getCurrentUserSuccess](state, payload) {
    state.isLoading = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationTypes.getCurrentUserFailure](state) {
    state.isLoading = false
    state.isLoggedIn = false
    state.currentUser = null
  },
  [mutationTypes.updateCurrentUserStart]() {},
  [mutationTypes.updateCurrentUserSuccess](state, payload) {
    state.currentUser = payload
  },
  [mutationTypes.updateCurrentUserFailure]() {},
  [mutationTypes.logout]() {
    state.currentUser = null
    state.isLoggedIn = false
  }
}

const actions = {
  [actionTypes.register](contex, credentials) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.registerStart);
      authAPI
        .register(credentials)
        .then(response => {
          contex.commit(mutationTypes.registerSuccess, response.data.user);
          setItem('accessToken', response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          contex.commit(mutationTypes.registerFailure, result.response.data.errors);
        })
    })
  },

  [actionTypes.login](contex, credentials) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.loginStart);
      authAPI
        .login(credentials)
        .then(response => {
          contex.commit(mutationTypes.loginSuccess, response.data.user);
          setItem('accessToken', response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          contex.commit(mutationTypes.loginFailure, result.response.data.errors);
        })
    })
  },

  [actionTypes.getCurrentUser](contex) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.getCurrentUserStart);
      authAPI
        .getCurrentUser()
        .then(response => {
          contex.commit(mutationTypes.getCurrentUserSuccess, response.data.user);
          resolve(response.data.user);
        })
        .catch(() => {
          contex.commit(mutationTypes.getCurrentUserFailure);
        })
    })
  },

  [actionTypes.updateCurrentUser](contex, { currentUserInput }) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.updateCurrentUserStart);
      authAPI
        .updateCurrentUser(currentUserInput)
        .then(user => {
          contex.commit(mutationTypes.updateCurrentUserSuccess, user);
          resolve(user);
        })
        .catch(result => {
          contex.commit(mutationTypes.updateCurrentUserFailure, result.response.data.errors);
        })
    })
  },

  [actionTypes.logout](context) {
    return new Promise(resolve => {
      setItem('accessToken', '')
      context.commit(mutationTypes.logout)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}