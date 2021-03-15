<template>
  <div class="Comp4">
    <ul class="titles2">
      <li v-text="miwan2"></li>
    </ul>
    <ul class="ulcss" v-for="(name,index) in $store.state.todoitems" :key="index" ref="changeColor">
      <li><input type="checkbox" ref="ckck" @click="ck_click(name,index)"></li>
      <li>{{index+1}}</li>
      <li @click="contentsTODO" :class="{ active: isActive}">{{name}}</li>
      <li><button type="button" v-text="btns3" @click="mo_btn()"></button></li>
      <li>{{$moment().format('YYYY-MM-DD HH:mm:ss')}}</li>
      <li><button type="button" v-text="btns4"></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comp4",
  data(){
    return{
      ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",date:"작성일시",result:"상태",
      miwan2:"완료^^",
      btns3:"수정",btns4:"완료",isActive:false
    }
  },
  methods:{
    contentsTODO(){
      this.isActive = !this.isActive;
    },
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
.titles{
  list-style: none; margin:0; padding:0;
  width:600px; height:30px;
}
.titles>li{
  border:1px solid black;
  height:30px; color:black; font-weight: bolder;
  display:flex; flex-direction: row; justify-content: center; align-items: center;
}
.active{
  text-decoration: line-through;
}
.ulcss{
  list-style: none; margin:0; padding:0;
  width:600px; height:auto;
  display:flex; flex-direction: row;
}
.ulcss>li{
  border:1px solid black;
  height:30px;
  display:flex; flex-direction: row; justify-content: center; align-items: center;
}
.ulcss>li:nth-of-type(1){width:50px;}
.ulcss>li:nth-of-type(2){width:50px;}
.ulcss>li:nth-of-type(3){width:200px; cursor:pointer;}
.ulcss>li:nth-of-type(4){width:50px;}
.ulcss>li:nth-of-type(5){width:200px;}
.ulcss>li:nth-of-type(6){width:50px;}
</style>