<template>
  <div>
    <h3>Completed</h3>
    <ul>
      <li
        v-for="(todo, index) in completedTodos"
        :key="index"
        class="completed-todo"
      >
        {{ todo }}
      </li>
    </ul>
    <b-button variant="danger" @click="clearCompletedTodos">Clear all</b-button>
  </div></template
>

<script>
export default {
  computed: {
    completedTodos() {
      return this.$store.state.completedTodos;
    }
  },
  methods: {
    clearCompletedTodos() {
      this.$store.commit("clearCompletedTodos");
    }
  }
};
</script>

<style>
.completed-todo {
  text-decoration: line-through;
}
</style>
