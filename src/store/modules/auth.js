import authAPI from '@/api/auth'

const state = {
  isSubmitting: false
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
  },
  registerSuccess(state) {
    state.isSubmitting = false
  },
  registerFailure(state) {
    state.isSubmitting = false
  }
}

const actions = {
  register(contex, credentials) {
    return new Promise(resolve => {
      contex.commit('registerStart');
      authAPI
        .register(credentials)
        .then(response => {
          console.log('response', response);
          contex.commit('registerSuccess', response.data.user);
          resolve(response.data.user);
        })
        .catch(result => {
          contex.commit('registerFailure', result.response.data.errors);
          console.log('result errors', result);
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}