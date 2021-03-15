<template>
  <div class="todo_input">
    <input type="text" v-model="counter" placeholder="할 일을 작성해주세요" @keypress.enter="add_btn()" ref="ref_focus" autofocus>
    <button type="button" v-text="btns" @click="add_btn"></button>
    <button type="button" v-text="btns2" @click="del_btn()"></button>
  </div>
</template>

<script>
export default {
  name: "todo_input",
  data(){
    return{
      counter:'', btns: "추가", btns2:"삭제",
    }
  },
  methods:{
    add_btn(){
      if(this.counter.trim() !== ''){
          this.$store.commit('add_btn',this.counter);
          this.counter = '';
          this.$refs.ref_focus.focus();
      }else {
        alert("할 일을 작성해주세요");
        this.counter = '';
        this.$refs.ref_focus.focus();
      }
    },
    del_btn(){
      this.$store.commit('del_btn',this.counter);
    }
  }
}
</script>