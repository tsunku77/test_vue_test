<template>
  <div class="todo_input">
    <div class="col-md-12 input_box">
      <b-form-input type="text" class="form-control-md" v-model="Atodo"
             placeholder="할 일을 작성해주세요" @keypress.enter="add_btn()" autofocus></b-form-input>
      <b-button squared variant="warning" size="lg" @click.prevent="add_btn()">추가</b-button>
      <b-button squared variant="success" size="lg" @click.prevent="del_btn()">삭제</b-button>
    </div>
    <div class="btns_box">
      <b-button pill variant="outline-info" @click.prevent="miwan_btn()">미완료 보기</b-button>
      <b-button pill variant="outline-danger" @click.prevent="wan_btn()">완료 보기</b-button>
      <b-button pill variant="outline-primary" @click.prevent="all_btn()">전체 보기</b-button>
      <b-button pill variant="outline-warning" @click.prevent="reset_btn()">초기화</b-button>
      <button type="button" @click.prevent="down_btn()" class="btn_hasal" v-if="vif_down">▼</button>
      <button type="button" @click.prevent="up_btn()" class="btn_hasal btn_location" v-if="vif_up">▲</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from "vuex";

export default {
  name: "todo_input",
  data() {
    return {
      num: 0, Atodo: "",
    }
  },
  computed: {
    ...mapGetters({
      todoLists: 'todoLists'
    }),
    ...mapState({
      vif_down: 'vif_down',
      vif_up: 'vif_up',
    }),
  },
  methods: {
    ...mapMutations({
      del_btn: 'del_btn',
      add_btn2: 'add_btn',
      miwan_btn: 'miwan_btn',
      wan_btn: 'wan_btn',
      all_btn: 'all_btn',
      down_btn: 'down_btn',
      up_btn: 'up_btn',
      reset_btn:'reset_btn'
    }),
    add_btn() {
      this.num++
      if (this.Atodo.trim() !== '') {
        this.add_btn2({
          id: this.num,
          title: this.Atodo,
          date: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
          checked: false,
        });
        this.Atodo = '';
      } else alert("할 일을 작성해주세요");
        this.Atodo = '';
    }
  }
}
</script>
<style>
.todo_input {
  width: 600px;
  height: auto;
}

.input_box {
  width:100%; height:auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.form-control{
  margin-right:10px;
}

.btns_box {
  width: 100%;
  height: auto;
  float: left;
  line-height: 50px;
  position: relative;
}

.btn_hasal {
  float: right;
  width: 50px;
  height: 49px;
  box-sizing: border-box;
  font-size: 30px;
  color: white;
  background: red;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
}

.btn_location {
  position: absolute; right:50px;
}

.btn_hasal:hover {
  background: white;
  color: red;
}
</style>