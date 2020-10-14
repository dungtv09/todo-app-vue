import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: ["Todo 1", "Todo 2", "Todo 4"],
    completedTodos: ["Todo 3"],
    newTodo: ""
  },
  getters: {},
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    editTodo(state, index) {
      state.newTodo = state.todos[index];
      state.todos.splice(index, 1);
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
