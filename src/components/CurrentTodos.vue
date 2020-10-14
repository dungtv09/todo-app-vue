<template>
  <div class="current-todos">
    <h3>Todos</h3>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todo">
        {{ todo }}
        <div class="btn-div">
          <b-button variant="info" @click="editTodo(todo, index)"
            >Edit</b-button
          >
          <b-button variant="success" @click="completedTodo(todo, index)">
            Complete
          </b-button>
          <b-button variant="danger" @click="removeTodo(index)"
            >Remove</b-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    editTodo(todo, index) {
      this.$store.commit("editTodo", index);
    },
    completedTodo(todo, index) {
      this.$store.commit("completeTodo", { todo, index });
    },
    removeTodo(index) {
      this.$store.commit("removeTodo", index);
    }
  }
};
</script>

<style>
.current-todos {
  margin: 30px 0;
}
.todo {
  display: flex;
  justify-content: space-between;
  border: 1px solid #333;
  padding: 5px;
  border-radius: 5px;
  justify-items: center;
}
</style>
