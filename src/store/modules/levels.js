import * as types from 'store/types'

const state = {
  content: [
    { enable: false, key: "veryimportant", name: "매우 중요" },
    { enable: false, key: "important", name: "중요" },
    { enable: false, key: "normal", name: "보통" },
  ],
  toggle: true,
}

const getters = {
  enableLevels: state => {
    return state.content.filter(element => element.enable)
  },
  getLevelName: (state, getters) => (key) => {
    return state.content.find(element => element.key === key).name
  },
}

const mutations = {
  [types.SWITCH_LEVEL] (state, {key, enable}) {
    const index = state.content.findIndex(element => element.key === key)
    state.content[index].enable = enable

    if (state.content.filter(element => element.enable).length === 0) {
      state.toggle = true
    } else {
      state.toggle = false
    }
  },
  [types.TOGGLE_LEVELS] (state) {
    state.content.forEach(element => element.enable = false)

    state.toggle = true
  },
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions,
}
