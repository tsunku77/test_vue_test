<template>
  <div class="todo_miwan">
    <ul class="ulcss" style="background: red; color:white">
      <li v-text="ck"></li>
      <li v-text="no"></li>
      <li v-text="todo"></li>
      <li v-text="date"></li>
      <li v-text="wan_miwan"></li>
      <li v-text="result"></li>
    </ul>
    <ul class="titles">
      <li v-text="miwan"></li>
    </ul>
    <ul class="ulcss" v-for="(name,index) in todoitems" :key="index">
      <li><input type="checkbox" @click="clickEv(index)" v-model="abc[index]"></li>
      <li>{{todoitems.length-index}}</li>
      <li @click="$event.target.classList.toggle('active')" :class="{ active: isActive }">{{name.split("?")[0]}}</li>
      <li>{{name.split("?")[1].substr(0,19)}}</li>
      <li v-if="wan_if[index]">{{msg}}</li>
      <li v-else>{{miwan}}</li>
      <li><button type="button" v-text="btns4"  @click="complete(index)"></button></li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: "todo_miwan",
  data(){
    return{
      ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",date:"작성일시",result:"상태",
      miwan:"미완료",wan_miwan:"결과",msg:"완료",
      btns3:"수정",btns4:"완료시키기",isActive:false,
    }
  },
  computed: {
    ...mapState(['todoitems','abc','wan_if']),
    // ...mapGetters(['abc']),
  },
  methods:{
    ...mapMutations({
      ck_click:'ck_click'
    }),

    clickEv(index){
      // this.$store.commit('ck_click',index)
      this.ck_click(index)
    },
    complete(index){
        this.$delete(this.todoitems,index);
        //삭제된거 완료로 붙여넣기.
    },
  }
}
</script>
<style>
.titles{
  list-style: none; margin:0; padding:0;
  width:700px; height:30px;
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
  width:700px; height:auto;
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
</style>