<template>
  <div class="todo_miwan">
    <ul class="ulcss" style="background: red; color:white !important;">
      <li v-text="ck"></li>
      <li v-text="no"></li>
      <li v-text="todo"></li>
      <li v-text="date"></li>
      <li v-text="wan_miwan"></li>
      <li v-text="result"></li>
      <li v-text="order"></li>
    </ul>
    <ul class="titles">
      <li v-text="miwan"></li>
    </ul>
    <ul class="ulcss" v-for="(name,index) in $store.state.todoitems" :key="index" ref="changeColor">
      <li><input type="checkbox" @click="ck_click(name,index)" ref="ckck" v-model="$store.state.abc[index]"></li>
      <li>{{index+1}}</li>
      <li @click="$event.target.classList.toggle('active')" :class="{ active: isActive }">{{name.split("?")[0]}}</li>
      <li>{{name.split("?")[1].substr(0,19)}}</li>
      <li v-if="wan_if[index]">{{msg}}</li>
      <li v-else>{{miwan}}</li>
      <li><button type="button" v-text="btns4"  @click="complete(index)"></button></li>
      <li v-if="ifif">{{$store.state.arraw}}</li>
      <li v-if="ifif2 && countUP===index">{{$store.state.arraw1}}</li>
      <li v-if="ifif3 && countUP===index">{{$store.state.arraw2}}</li>
<!--      <li v-if="ifif3 && countUP===index">{{arraw2}}</li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo_miwan",
  data(){
    return{
      ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",date:"작성일시",result:"상태",
      miwan:"미완료",order:"순서",wan_miwan:"결과",msg:"완료",wan_if:[],
      ifif:true,countUP:0, ifif2:false,ifif3:false,
      btns3:"수정",btns4:"완료시키기",isActive:false,
    }
  },
  methods:{
    ck_click(name,index){ //getters로 하고싶은데 index를 못갖고옴 ㅠㅠ

      // if(this.countUP===0) {
      //   this.ifif = !this.ifif
      //   this.ifif2 = !this.ifif2
      // }
      // else {
      //   this.ifif = !this.ifif
      //   this.ifif3 = !this.ifif3
      // }
      // else{
      //   this.ifif = true;
      // }

      //undefined,true false 조정
      if(this.$store.state.abc[index]===undefined){
        this.$store.state.abc[index]=true
        if(this.$store.state.abc[index]===true){
          this.$refs.changeColor[index].style.background="pink"
          this.wan_if[index] = true;
        }
      }else if(this.$store.state.abc[index]===true){
        this.$store.state.abc[index]=false
        if(this.$store.state.abc[index]===false){
          this.$refs.changeColor[index].style.background="none"
          this.wan_if[index] = false;
        }
      }else{
        this.$store.state.abc[index]=true
        if(this.$store.state.abc[index]===true){
          this.$refs.changeColor[index].style.background="pink"
          this.wan_if[index] = true;
        }
      }
    },
    del_btn(name,index){
      this.$store.commit('del_btn',{name,index});
      this.$refs.changeColor[index].style.background="none"
      this.$refs.ckck[index].checked=false
    },
    complete(index){
        this.$delete(this.$store.state.todoitems,index);
        //삭제된거 완료로 붙여넣기.
    }
  }
}
</script>
<style>
.titles{
  list-style: none; margin:0; padding:0;
  width:750px; height:30px;
}
.titles>li{
  border:1px solid black;
  height:30px; color:red; font-weight: bolder;
  display:flex; flex-direction: row; justify-content: center; align-items: center;
}
.active{
  text-decoration: line-through;
}
.ulcss{
  list-style: none; margin:0; padding:0;
  width:750px; height:auto;
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
.ulcss>li:nth-of-type(4){width:200px;}
.ulcss>li:nth-of-type(5){width:100px; }
.ulcss>li:nth-of-type(6){width:100px;}
.ulcss>li:nth-of-type(7){width:50px;}
</style>