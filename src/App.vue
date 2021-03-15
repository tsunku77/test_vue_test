<template>
  <div id="app">
    <todo_box></todo_box>
  </div>
</template>

<script>
import todo_box from './components/todo_box.vue'

export default {
  name:'App',
  components: {todo_box},
}
</script>
