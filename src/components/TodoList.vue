<template>
  <div id="todo-list">
    <TodoItem v-for="todo in todos"
              v-bind:todo="todo"
              v-bind:levelName="levelName"
              v-bind:key="todo.id"
              v-on:toggleTodo="toggleTodo">
    </TodoItem>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: [
    'todos',
    'levelName',
  ],

  components: {
    TodoItem,
  },

  methods: {
    toggleTodo({id, condition}) {
      this.$emit('toggleTodo', {id, condition})
    },
  },
}
</script>

<style>
</style>
