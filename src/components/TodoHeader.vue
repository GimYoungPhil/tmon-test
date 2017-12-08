<template>
  <div class="fixed-top bg-white" id="todo-header">
    <form v-on:submit.prevent="addTodo">
      <div class="row no-gutters todo-h-40">
        <div class="d-inline-block todo-w-60 pt-1">
          <select class="form-control form-control-sm todo-select px-0"
                  title="할 일의 중요도를 입력하세요"
                  v-model="todoLevel">
            <option value="">중요도</option>
            <option v-for="level in levels"
                    v-bind:value="level.key"
                    v-bind:key="level.key">
              {{ level.name }}
            </option>
          </select>
        </div>
        <div class="col">
          <input class="form-control border-0 rounded-0 h-100" type="text"
                 title="할 일을 입력하세요"
                 placeholder="할 일을 입력하세요"
                 v-model="todoText">
        </div>
        <div class="d-inline-block todo-w-80">
          <button class="btn btn-add btn-block rounded-0 h-100" type="submit">추가</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'levels',
  ],

  data() {
    return {
      todoLevel: '',
      todoText: ''
    }
  },

  methods: {
    addTodo() {
      const text = this.todoText.trim()
      const level = this.todoLevel
      if (text && level) {
        this.$emit('addTodo', {level, text})
        this.todoText = ''
        this.todoLevel = ''
      }
    },
  },
}
</script>

<style>
.todo-select {
  font-size: 10px;
}
.todo-h-40 {
  height: 40px!important;
}
.todo-w-60 {
  width: 60px!important;
}
.todo-w-80 {
  width: 80px!important;
}
.btn-add {
  color: #f0f0f0;
  background-color: #ff4f00;
}
</style>
