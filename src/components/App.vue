<template>
  <div id="app">
    <h1>Todo App</h1>

    <NewTodo />

    <CurrentTodos />

    <CompletedTodos />
  </div>
</template>

<script>
import NewTodo from "./NewTodo.vue";
import CurrentTodos from "./CurrentTodos.vue";
import CompletedTodos from "./CompletedTodos.vue";
export default {
  name: "app",
  components: {
    NewTodo,
    CurrentTodos,
    CompletedTodos
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 50px;
  max-width: 700px;
  margin: auto;
}
ul {
  padding: 0;
}
li {
  margin: 20px 0;
  list-style-type: none;
}
h1 {
  font-weight: 700;
}
</style>
