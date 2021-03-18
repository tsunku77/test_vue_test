<template>
  <div class="todo_miwan">
    <ul class="titles">
      <li>완료</li>
    </ul>
    <div v-if="wan2">
    <ul class="ulcss" v-for="(name) in todoitems2" :key="name.id">
      <li><input type="checkbox" @click="clickEv(name.id)" v-model="name.boolean"></li>
      <li>{{name.id}}</li>
      <li @click="$event.target.classList.toggle('active')" :class="{ active: isActive }">{{name.title}}</li>
      <li>{{name.date}}</li>
      <li>완료</li>
    </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: "todo_miwan",
  data(){
    return{
      isActive:false,
    }
  },
  computed: {
    ...mapState(['todoitems2','wan_if','num','wan','wan2']),
  },
  methods:{
    ...mapMutations({
      ck_click:'ck_click'
    }),
    clickEv(ck){
      this.ck_click(ck)
    },
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
  display:none;
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
.ulcss>li:nth-of-type(5){width:100px; }
.ulcss>li:nth-of-type(6){width:100px;}
</style>