<template>
  <div>
    <div v-if="vif_Complete_todoitems">
      <ul class="titles">
        <li>완료</li>
      </ul>
      <ul class="ulcss" v-for="(name,index) in todoLists2" :key="name.id">
        <li><input type="checkbox" @click="wan_ck_click(index)" v-model="name.checked"></li>
        <li>{{ name.id }}</li>
        <li @click="go_miwan(index)" :class="{ active: isActive }">{{ name.title }}</li>
        <li>{{ name.date }}</li>
        <li>완료</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from "vuex";

export default {
  name: "todo_wan",
  data() {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapState(['num','vif_Complete_todoitems']),
    ...mapGetters({
      todoLists2: 'todoLists2'
    }),
  },
  methods: {
    ...mapMutations({
      wan_ck_click: 'wan_ck_click',
      go_miwan: 'go_miwan'
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