<!--<template>-->
<!--  <div class="todo_miwan">-->
<!--    <ul class="titles">-->
<!--      <li v-text="miwan2"></li>-->
<!--    </ul>-->
<!--    <ul class="ulcss" v-for="(name,index) in $store.state.todoitems" :key="index" ref="changeColor">-->
<!--      <li><input type="checkbox" @click="ck_click(name,index)" ref="ckck"></li>-->
<!--      <li>{{index+1}}</li>-->
<!--      <li @click="$event.target.classList.toggle('active')" :class="{ active: isActive }">{{name}}</li>-->
<!--      <li>{{$moment().format('YYYY-MM-DD HH:mm:ss')}}</li>-->
<!--      <li><button type="button" v-text="btns4"  @click="complete()"></button></li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "todo_miwan",-->
<!--  data(){-->
<!--    return{-->
<!--      ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",date:"작성일시",result:"상태",-->
<!--      miwan2:"완료",-->
<!--      btns3:"수정",btns4:"완료",isActive:false,-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    del_btn(name,index){-->
<!--      this.$store.commit('del_btn',{name,index});-->
<!--      this.$refs.changeColor[index].style.background="none"-->
<!--      this.$refs.ckck[index].checked=false-->
<!--    },-->
<!--    ck_click(name,ref_index){-->
<!--      console.log(this.$refs.ckck[ref_index].checked);-->
<!--      if(this.$refs.ckck[ref_index].checked===true ){-->
<!--        this.$refs.changeColor[ref_index].style.background="pink"-->
<!--      }-->
<!--      else{-->
<!--        this.$refs.changeColor[ref_index].style.background="none"-->
<!--      }-->
<!--    },-->
<!--    complete(){-->
<!--      console.log('com');-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style>-->
<!--.titles{-->
<!--  list-style: none; margin:0; padding:0;-->
<!--  width:550px; height:30px;-->
<!--}-->
<!--.titles>li{-->
<!--  border:1px solid black;-->
<!--  height:30px; color:red; font-weight: bolder;-->
<!--  display:flex; flex-direction: row; justify-content: center; align-items: center;-->
<!--}-->
<!--.active{-->
<!--  text-decoration: line-through;-->
<!--}-->
<!--.ulcss{-->
<!--  list-style: none; margin:0; padding:0;-->
<!--  width:550px; height:auto;-->
<!--  display:flex; flex-direction: row;-->
<!--}-->
<!--.ulcss>li{-->
<!--  border:1px solid black;-->
<!--  height:30px;-->
<!--  display:flex; flex-direction: row; justify-content: center; align-items: center;-->
<!--}-->
<!--.ulcss>li:nth-of-type(1){width:50px;}-->
<!--.ulcss>li:nth-of-type(2){width:50px;}-->
<!--.ulcss>li:nth-of-type(3){width:200px; cursor:pointer;}-->
<!--.ulcss>li:nth-of-type(4){width:200px;}-->
<!--.ulcss>li:nth-of-type(5){width:50px;}-->
<!--</style>-->