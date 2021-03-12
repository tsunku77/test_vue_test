<template>
  <div class="Comp3">
    <ul :class="ulcss" style="background: red; color:white">
      <li v-text="ck"></li>
      <li v-text="no"></li>
      <li v-text="todo"></li>
      <li v-text="modi"></li>
      <li v-text="del"></li>
    </ul>
    <ul :class="ulcss" v-for="(name,index) in $store.state.todoitems" :key="index" ref="changeColor">
      <li><input type="checkbox" ref="ckck" @click="ck_click(name,index)"></li>
      <li>{{index+1}}</li>
      <li>{{name}}</li>
      <li><button type="button" v-text="btns3" @click="mo_btn()"></button></li>
      <li><button type="button" v-text="btns2" @click="del_btn(name,index)"></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comp3",
  data(){
    return{
      ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",
      btns2:"삭제",btns3:"수정",ulcss:"ulcss",
    }
  },
  methods:{
    del_btn(name,index){
      this.$store.commit('del_btn',{name,index});
      this.$refs.changeColor[index].style.background="none"
      this.$refs.ckck[index].checked=false
    },
    ck_click(name,ref_index){
      if(this.$refs.ckck[ref_index].checked===true ){
          this.$refs.changeColor[ref_index].style.background="pink"
      }
      else{
        this.$refs.changeColor[ref_index].style.background="none"
      }
    },
    mo_btn(){
      alert("준비중 입니다^^");
    }
  }
}
</script>
<style>
  .ulcss{
    list-style: none; margin:0; padding:0;
    width:400px; height:auto;
    display:flex; flex-direction: row;
  }
  .ulcss>li{
    border:1px solid black;
    height:30px;
    display:flex; flex-direction: row; justify-content: center; align-items: center;
  }
  .ulcss>li:nth-of-type(1){width:50px;}
  .ulcss>li:nth-of-type(2){width:50px;}
  .ulcss>li:nth-of-type(3){width:200px;}
  .ulcss>li:nth-of-type(4){width:50px;}
  .ulcss>li:nth-of-type(5){width:50px;}
</style>