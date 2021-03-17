<template>
  <div class="todo_input">
    <input type="text" v-model="counter" placeholder="할 일을 작성해주세요" @keypress.enter="add_btn()" ref="ref_focus" autofocus>
    <button type="button" v-text="btns" @click="add_btn()"></button>
    <button type="button" v-text="btns2" @click="click_del(abc.length)"></button>
    <span style="color:red; font-size:12px; font-weight:bolder; margin-left:30px;">{{notice}}</span>
    <button type="button" v-text="btns4" @click="click_down(abc.length)" class="btn_hasal" v-if="ifif1"></button>
    <button type="button" v-text="btns3"  class="btn_hasal" v-if="ifif2"></button>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
  name: "todo_input",
  data(){
    return{
      counter:'', btns: "추가", btns2:"삭제",notice:'※ 체크 막 누르지 말고 정말 삭제할 것만 눌러주세요 ^^',
      btns3:'▲',btns4:'▼',

    }
  },
  computed: {
    ...mapState(['todoitems','abc','ifif1','ifif2']),
  },
  methods:{
    ...mapMutations({
      del_btn:'del_btn'
    }),
    ...mapMutations({
      down_btn:'down_btn'
    }),
    click_del(z){
      this.del_btn(z)
    },
    click_down(x){
      this.down_btn(x)
    },
    add_btn(){
      if(this.counter.trim() !== ''){
          this.$store.commit('add_btn',this.counter +'?'+this.$moment().format('YYYY-MM-DD HH:mm:ss'));
          this.counter = '';
          this.$refs.ref_focus.focus();
      }else {
        alert("할 일을 작성해주세요");
        this.counter = '';
        this.$refs.ref_focus.focus();
      }
    }
  }
}
</script>
<style>
  .todo_input{
    width:700px; height:50px;
  }
  .btn_hasal{
    float: right; width:50px; height:50px;
    font-size:30px; color:white; background: red; border:1px solid black;
    border-radius: 10px 10px 0 0;
  }
  .btn_hasal:hover{
    background: white; color:red;
  }
</style>