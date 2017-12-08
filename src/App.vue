<template>
  <div class="app-todo">
    <TodoHeader v-bind:levels="levels"
                v-on:addTodo="addTodo">
    </TodoHeader>
    <TodoFilter v-bind:levels="levels"
                v-bind:levelsToggle="levelsToggle"
                v-bind:conditions="conditions"
                v-bind:conditionsToggle="conditionsToggle"
                v-on:swichLevel="swichLevel"
                v-on:swichCondition="swichCondition"
                v-on:toggleLevels="toggleLevels"
                v-on:toggleConditions="toggleConditions">
    </TodoFilter>
    <TodoList v-bind:todos="todos"
              v-bind:levelName="levelName"
              v-on:toggleTodo="toggleTodo">
    </TodoList>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import TodoHeader from './components/TodoHeader.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoList from './components/TodoList.vue'
import * as types from 'store/types'

export default {
  components: {
    TodoHeader,
    TodoFilter,
    TodoList,
  },

  computed: {
    ...mapGetters({
      todos: 'filterTodos',
      levelName: 'getLevelName',
    }),
    ...mapState({
      levels: state => state.levels.content,
      levelsToggle: state => state.levels.toggle,
      conditions: state => state.conditions.content,
      conditionsToggle: state => state.conditions.toggle,
    }),
  },

  methods: {
    ...mapMutations({
      swichLevel: types.SWITCH_LEVEL,
      swichCondition: types.SWITCH_CONDITION,
      toggleLevels: types.TOGGLE_LEVELS,
      toggleConditions: types.TOGGLE_CONDITIONS,
      addTodo: types.ADD_TODO,
      toggleTodo: types.TOGGLE_TODO,
    }),
    ...mapActions({
    }),
  },
}
</script>

<style>
body {
  font-family: AppleSDGothicNeo,"Helvetica","Malgun Gothic","맑은고딕",sans-serif;
}
.app-todo {
  margin-top: 40px;
}
</style>
