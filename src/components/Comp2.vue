<template>
  <div class="Comp2">
    <input type="text" v-model="$store.state.counter" placeholder="할 일을 작성해주세요">
    <button v-text="$store.state.btns" @click="add_btn"></button>
  </div>
</template>

<script>
export default {
  name: "Comp2",
  methods:{
    add_btn(){
      this.$store.commit('add_btn',this.$store.state.counter);
    },
  }
}
</script>