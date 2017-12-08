export const filterTodos = (state, getters) => {
  return state.todos.content.filter(todo => {
    if ((!getters.enableConditions.length ||
        getters.enableConditions.find(condition => condition.key === todo.condition)) &&
        (!getters.enableLevels.length ||
        getters.enableLevels.find(level => level.key === todo.level))) {
      return true
    }
    return false
  })
}
