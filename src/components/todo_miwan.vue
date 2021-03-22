<template>
  <div>
    <ul class="ulcss ulcss3">
      <li>체크</li>
      <li>NO</li>
      <li>TO DO</li>
      <li>작성일시</li>
      <li>결과</li>
    </ul>
    <div v-if="vif_todoitems">
      <ul class="titles">
        <li>미완료</li>
      </ul>
      <ul class="ulcss" v-for="(value,index) in todoLists" :key="value.id">
        <li><input type="checkbox" @click="ck_click(index)" v-model="value.checked"></li>
        <li>{{ todoLists.length-index }}</li>
        <li @click="changelist(index)" :class="{ active: isActive }">{{ value.title }}</li>
        <li>{{ value.date }}</li>
        <li v-if="showComplete[value.id]">완료</li>
        <li v-else>미완료</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from "vuex";

export default {
  name: "todo_miwan",
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState(['showComplete', 'num', 'vif_todoitems']),
    ...mapGetters({
      todoLists: 'todoLists',
    }),
  },
  methods: {
    ...mapMutations({
      ck_click: 'ck_click',
      changelist: 'changelist'
    }),
  }
}
</script>
<style>
.titles {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 600px;
  height: 30px;
  background: pink;
}

.titles > li {
  border: 1px solid black;
  height: 30px;
  color: black;
  font-weight: bolder;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.active {
  text-decoration: line-through;
}

.ulcss {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: row;
}

.ulcss > li {
  border: 1px solid black;
  height: 30px;
}

.ulcss > li:nth-of-type(1) {
  width: 50px;
}

.ulcss > li:nth-of-type(2) {
  width: 50px;
}

.ulcss > li:nth-of-type(3) {
  width: 200px;
  cursor: pointer;
}

.ulcss > li:nth-of-type(4) {
  width: 200px;
}

.ulcss > li:nth-of-type(5) {
  width: 100px;
}

.ulcss > li:nth-of-type(6) {
  width: 100px;
}

.ulcss3 {
  background: red;
  color: white
}
</style>