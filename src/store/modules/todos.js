import * as types from 'store/types'

const state = {
  content: [
    {
      "id": 1509989708819,
      "date": "2017. 11. 07.",
      "level": "veryimportant",
      "condition": "incomplete",
      "text": "세탁소에서 세탁물 찾아오기",
    },
    {
      "id": 1509989708818,
      "date": "2017. 11. 07.",
      "level": "important",
      "condition": "complete",
      "text": "영어 공부하기",
    },
    {
      "id": 1509989708817,
      "date": "2017. 11. 07",
      "level": "normal",
      "condition": "incomplete",
      "text": "청소하기 - 두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우",
    },
    {
      "id": 1509989708816,
      "date": "2017. 11. 07.",
      "level": "veryimportant",
      "condition": "incomplete",
      "text": "영화보기",
    },
    {
      "id": 1509989708815,
      "date": "2017. 11. 07.",
      "level": "important",
      "condition": "incomplete",
      "text": "음악듣기",
    },
    {
      "id": 1509989708814,
      "date": "2017. 11. 07.",
      "level": "normal",
      "condition": "incomplete",
      "text": "명상하기 - 두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우",
    },
    {
      "id": 1509989708813,
      "date": "2017. 11. 07.",
      "level": "veryimportant",
      "condition": "incomplete",
      "text": "운동하기",
    },
    {
      "id": 1509989708812,
      "date": "2017. 11. 07.",
      "level": "important",
      "condition": "complete",
      "text": "설겆이하기 - 두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우,두줄인경우",
    },
    {
      "id": 1509989708811,
      "date": "2017. 11. 07.",
      "level": "normal",
      "condition": "complete",
      "text": "핸드폰 수리하기",
    }
  ],
}

const getters = {
}

const mutations = {
  [types.ADD_TODO] (state, {level, text}) {
    state.content.push({
      id: new Date().valueOf(),
      date: new Date().toLocaleDateString('ko-KR'),
      condition: 'incomplete',
      level,
      text,
    })
  },
  [types.TOGGLE_TODO] (state, {id, condition}) {
    let todo = state.content.find(todo => todo.id === id)
    todo.condition = condition
  },
  [types.UPDATE_TODO] (state, {id, level, text}) {

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
