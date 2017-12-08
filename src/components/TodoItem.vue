<template>
  <div class="row no-gutters todo-item">
    <div class="d-inline-block form-check text-center pt-4 todo-w-40">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input position-static"
               aria-label="할 일의 완료 상태"
               v-bind:checked="todo.condition === 'complete'"
               v-on:change="toggleTodo()">
      </label>
    </div>
    <div class="col p-2">
      <p class="text-muted mb-0">
        <small>중요도: {{ levelName(todo.level) }}</small>
      </p>
      <p class="text-muted mb-0">
        <small>추가일: {{ todo.date }}</small>
      </p>
      <p v-if="todo.condition === 'complete'" class="mb-0">
        <del>{{ todo.text }}</del>
      </p>
      <p v-else class="mb-0">{{ todo.text }}</p>
    </div>
    <div class="d-inline-block todo-w-40 bg-silver"></div>
  </div>
</template>

<script>
export default {
  props: [
    'todo',
    'levelName',
  ],

  data() {
    return {
      editable: false
    }
  },

  methods: {
    toggleTodo() {
      this.$emit('toggleTodo', {
        id: this.todo.id,
        condition: this.todo.condition === 'incomplete' ? 'complete' : 'incomplete'
      })
    },
  },
}
</script>

<style>
.todo-item {
  border-top: 1px solid #e7e7e7;
}
.todo-item:last-child {
  border-bottom: 1px solid #e7e7e7;
}
.todo-w-40 {
  width: 40px!important;
}
.bg-silver {
  background: #c0c0c0;
}
</style>
