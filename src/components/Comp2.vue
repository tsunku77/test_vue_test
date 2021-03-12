<template>
  <div class="Comp2">
    <input type="text" v-model="counter" placeholder="할 일을 작성해주세요" @keyup.enter="add_btn" autofocus>
    <button type="button" v-text="btns" @click="add_btn"></button>
  </div>
</template>

<script>
export default {
  name: "Comp2",
  data(){
    return{
      counter:'',btns: "추가"
    }
  },
  methods:{
    add_btn(){
      if(this.counter.trim() !== ''){
          this.$store.commit('add_btn',this.counter);
          this.counter = '';

      }else {
        alert("할 일을 작성해주세요");
      }
    },
  }
}
</script>