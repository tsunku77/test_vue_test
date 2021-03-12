<template>
  <div class="Comp1">
    <h1>Todo List</h1>
    <Comp2/>
    <Comp3/>
  </div>
</template>

<script>
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

export default {
  name: 'Comp1',
  components: {
    Comp2,
    Comp3
  }
}
</script>
