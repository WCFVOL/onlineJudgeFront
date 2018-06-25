// 用户状态
const state = {
  profile: {}
}

const getters = {
  user: state => state.profile || {},
  profile: state => state.profile,
  isSignIn: (state, getters) => {
    return !!getters.user.id
  }
}

const actions = {

}

const mutations = {
  setProfile (state, pro) {
    state.profile = pro
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
