<template>
  <div class="Comp3">
    <ul :class="$store.state.ulcss" style="background: red; color:white">
      <li v-text="$store.state.ck"></li>
      <li v-text="$store.state.no"></li>
      <li v-text="$store.state.todo"></li>
      <li v-text="$store.state.modi"></li>
      <li v-text="$store.state.del"></li>
    </ul>
    <ul :class="$store.state.ulcss" v-for="(name,index) in $store.state.todoitems" :key="index" ref="changeColor">
      <li><input type="checkbox" v-model="$store.state.ckck" @click="ck_click(index)"></li>
      <li>{{index+1}}</li>
      <li>{{name}}</li>
      <li><button type="button" v-text="$store.state.btns3" @click="mo_btn()"></button></li>
      <li><button type="button" v-text="$store.state.btns2" @click="del_btn(name,name.index)"></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comp3",
  methods:{
    del_btn(){
      this.$store.dispatch('del_btn');
    },
    ck_click(){
      console.log(this.$store.state.ckck);
      // if(this.$store.state.ckck===false ){
      //     this.$refs.changeColor[ref_index].style.background="pink"
      //   this.$store.state.ckck===false
      // }
      // else{
      //   this.$refs.changeColor[ref_index].style.background="none"
      // }
    },
    mo_btn(){
      alert("준비중 입니다^^ㅎㅎ");
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
    width:100%; height:30px;
    display:flex; flex-direction: row; justify-content: center; align-items: center;
  }
  .ulcss>li:nth-of-type(1){width:50px;}
  .ulcss>li:nth-of-type(2){width:50px;}
  .ulcss>li:nth-of-type(3){width:200px;}
  .ulcss>li:nth-of-type(4){width:50px;}
  .ulcss>li:nth-of-type(5){width:50px;}
</style>