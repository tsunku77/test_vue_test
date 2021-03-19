<template>
  <div>
    <ul class="ulcss ulcss3">
      <li>체크</li>
      <li>NO</li>
      <li>TO DO</li>
      <li>작성일시</li>
      <li>결과</li>
    </ul>
    <div v-if="if_miwan">
      <ul class="titles">
        <li>미완료</li>
      </ul>
      <ul class="ulcss" v-for="(name,index) in todoLists" :key="name.id">
        <li><input type="checkbox" @click="ck_click(index)" v-model="name.boolean"></li>
        <li>{{ name.id }}</li>
        <li @click="changelist(index)" :class="{ active: name.boolean }">{{ name.title }}</li>
        <li>{{ name.date }}</li>
        <li v-if="wan_if[name.id]">완료</li>
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
    ...mapState(['wan_if', 'num', 'if_miwan']),
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
}

.titles > li {
  border: 1px solid black;
  height: 30px;
  color: red;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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