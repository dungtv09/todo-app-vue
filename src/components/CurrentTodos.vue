<template>
  <div class="current-todos">
    <h3>Todos</h3>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todo">
        <span v-show="!isEditing(index)">{{ todo.body }}</span>
        <input
          v-show="isEditing(index)"
          :value="currentValue(index)"
          @input="valueInput = $event.target.value"
          class="edit-input"
          @keyup.enter="editDone(index)"
        />

        <div class="btn-div">
          <b-button
            v-show="!isEditing(index)"
            variant="info"
            @click="editTodo(index)"
            >Edit</b-button
          >
          <b-button
            v-show="isEditing(index)"
            variant="info"
            @click="editDone(index)"
            >Done</b-button
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
  data() {
    return {
      valueInput: ""
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    // lay gia tri
    isEditing(index) {
      return this.$store.state.todos[index].isEditing;
    },
    currentValue(index) {
      return this.$store.state.todos[index].body;
    },

    editTodo(index) {
      this.$store.commit("editTodo", index);
    },
    editDone(index) {
      let value = this.valueInput;
      if (value === "") {
        value = this.currentValue(index);
      }
      this.$store.commit("editDone", { value, index });
      this.valueInput = "";
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
.edit-input {
  width: 50%;
}
</style>
