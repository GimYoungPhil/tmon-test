<template>
  <div class="bg-grey p-3" id="todo-filter">
    <div class="pb-2">
      <button type="button" class="btn btn-sm btn-todo rounded-0"
              v-bind:class="[levelsToggle ? 'btn-enable' : '']"
              v-on:click="toggleLevels($event)">
        모두
      </button>
      <button type="button" class="btn btn-sm btn-todo rounded-0 mr-1"
              v-for="level in levels"
              v-bind:key="level.key"
              v-bind:class="[level.enable ? 'btn-enable' : '']"
              v-on:click="toggleLevel(level.key, !level.enable, $event)">
        {{ level.name }}
      </button>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-todo rounded-0"
              v-bind:class="[conditionsToggle ? 'btn-enable' : '']"
              v-on:click="toggleConditions($event)">
        모두
      </button>
      <button type="button" class="btn btn-sm btn-todo rounded-0 mr-1"
              v-for="condition in conditions"
              v-bind:key="condition.key"
              v-bind:class="[condition.enable ? 'btn-enable' : '']"
              v-on:click="toggleCondition(condition.key, !condition.enable, $event)">
        {{ condition.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'levels',
    'levelsToggle',
    'conditions',
    'conditionsToggle',
  ],

  methods: {
    toggleLevel(key, enable, event) {
      event.target.blur()
      this.$emit('swichLevel', {key, enable})
    },
    toggleCondition(key, enable, event) {
      event.target.blur()
      this.$emit('swichCondition', {key, enable})
    },
    toggleLevels(event) {
      event.target.blur()
      this.$emit('toggleLevels')
    },
    toggleConditions(event) {
      event.target.blur()
      this.$emit('toggleConditions')
    }
  },

}
</script>

<style>
.btn-todo.btn-enable {
  color: #f0f0f0;
  background-color: #ff4f00;
  border-color: #ff4f00;
}
.btn-todo {
  color: #111111;
  background-color: transparent;
  border-color: #111111;
}
.btn-todo:hover {
  background-color: #ff4f00;
  border-color: #ff4f00;
}
.bg-grey {
  background: #f0f0f0;
}
</style>
