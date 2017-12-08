import * as types from 'store/types'

const state = {
  content: [
    { enable: false, key: "complete", name: "완료" },
    { enable: false, key: "incomplete", name: "미완료" },
  ],
  toggle: true,
}

const getters = {
  enableConditions: state => {
    return state.content.filter(element => element.enable)
  },
}

const mutations = {
  [types.SWITCH_CONDITION] (state, {key, enable}) {
    const index = state.content.findIndex(element => element.key === key)
    state.content[index].enable = enable

    if (state.content.filter(element => element.enable).length === 0) {
      state.toggle = true
    } else {
      state.toggle = false
    }
  },
  [types.TOGGLE_CONDITIONS] (state) {
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
