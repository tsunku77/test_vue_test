<template>
  <div class="todo_input">
    <input type="text" v-model="counter" placeholder="할 일을 작성해주세요" @keypress.enter="add_btn()" ref="ref_focus"
           autofocus>
    <button type="button" @click.prevent="add_btn()">추가</button>
    <button type="button" @click.prevent="click_del()">삭제</button>
    <button type="button" @click="click_down()" class="btn_hasal" v-if="ifif1">▼</button>
    <button type="button" class="btn_hasal" v-if="ifif2">▲</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from "vuex";

export default {
  name: "todo_input",
  data() {
    return {
      num: 0,counter:"",
    }
  },
  computed: {
    ...mapGetters({
      todoLists:'todoLists'
    }),
    ...mapState({
      ifif1: 'ifif1',
      ifif2: 'ifif2',
    }),
  },
  methods: {
    ...mapMutations({
      del_btn: 'del_btn', down_btn: 'down_btn',
      add_btn2: 'add_btn'
    }),
    click_del() {
      this.del_btn()
    },
    click_down(x) {
      this.down_btn(x)
    },
    add_btn() {
      this.num++
      if (this.counter.trim() !== '') {
        this.add_btn2({
          id: this.num,
          title: this.counter,
          date: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
          boolean: false,
        });
        this.counter = '';
        this.$refs.ref_focus.focus();
      } else {
        alert("할 일을 작성해주세요");
        this.counter = '';
        this.$refs.ref_focus.focus();
      }
    }
  }
}
</script>
<style>
.todo_input {
  width: 600px;
  height: 50px;
}

.btn_hasal {
  float: right;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: white;
  background: red;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
}

.btn_hasal:hover {
  background: white;
  color: red;
}
</style>