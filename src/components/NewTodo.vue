<template>
  <div>
    <label for="todo-input">New todo:</label>
    <b-form-input
      type="text"
      id="todo-input"
      v-model="value"
      placeholder="Enter new todo"
      @keyup.enter="addTodo"
    />
    <b-button variant="primary" @click="addTodo" class="add-btn">Add</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addTodo() {
      if (this.value === "") {
        alert("Không được để trống");
      } else {
        this.$store.commit("addTodo", { body: this.value, isEditing: false });
        this.value = "";
      }
    }
  }
};
</script>

<style>
.add-btn {
  margin-top: 10px;
}
</style>
