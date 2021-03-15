<template>
  <div class="todo_miwan">
    <ul class="ulcss" style="background: red; color:white">
      <li v-text="ck"></li>
      <li v-text="no"></li>
      <li v-text="todo"></li>
      <li v-text="date"></li>
      <li v-text="result"></li>
      <li v-text="order"></li>
    </ul>
    <ul class="titles">
      <li v-text="miwan"></li>
    </ul>
    <ul class="ulcss" v-for="(name,index) in $store.state.todoitems" :key="index" ref="changeColor">
      <li><input type="checkbox" @click="ck_click(name,index)" :value="checkboxVal"
                 :checked="booleanValue"
                 @input="checkboxVal = $event.target.value"></li>
      <li>{{index+1}}</li>
      <li @click="$event.target.classList.toggle('active')" :class="{ active: isActive }">{{name}}</li>
      <li>{{$moment().format('YYYY-MM-DD HH:mm:ss')}}</li>
      <li><button type="button" v-text="btns4"  @click="complete()"></button></li>
      <li>{{arraw}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo_miwan",
  data(){
    return{
      ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",date:"작성일시",result:"상태",
      miwan:"미완료",order:"순서",arraw:"↕",booleanValue:false,checkboxVal:"",
      btns3:"수정",btns4:"완료",isActive:false,
    }
  },
  methods:{
    del_btn(name,index){
      this.$store.commit('del_btn',{name,index});
      this.$refs.changeColor[index].style.background="none"
      this.$refs.ckck[index].checked=false
    },
    ck_click(){
      console.log(this.booleanValue);
      // console.log(this.$refs.ckck[ref_index].checked);
      // if(this.$refs.ckck[ref_index].checked===true){
      //   this.$refs.changeColor[ref_index].style.background="pink"
      // }
      // else{
      //   this.$refs.changeColor[ref_index].style.background="none"
      // }
    },
    complete(){
      console.log('com');
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
  height:30px; color:red; font-weight: bolder;
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
.ulcss>li:nth-of-type(4){width:200px;}
.ulcss>li:nth-of-type(5){width:50px;}
.ulcss>li:nth-of-type(6){width:50px;}
</style>