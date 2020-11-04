import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== "production",
  state: {
    todos: [
      { body: "Todo 1", isEditing: false },
      { body: "Todo 2", isEditing: false },
      { body: "Todo 4", isEditing: false }
    ],
    completedTodos: [{ body: "Todo 3", isEditing: false }]
  },
  getters: {},
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    editTodo(state, index) {
      Vue.set(state.todos[index], "isEditing", true);
    },
    editDone(state, payload) {
      Vue.set(state.todos[payload.index], "isEditing", false);
      Vue.set(state.todos[payload.index], "body", payload.value);
    },
    completeTodo(state, payload) {
      state.completedTodos.push(payload.todo);
      state.todos.splice(payload.index, 1);
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
    clearCompletedTodos(state) {
      state.completedTodos = [];
    }
  },
  action: {}
});
