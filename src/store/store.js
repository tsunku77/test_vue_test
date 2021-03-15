import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        todoitems:[],
        ck_model:""
    },
    mutations:{
        add_btn(state,payload){
                state.todoitems.unshift(payload) // 입력값 배열에 넣기
                state.counter = '';
        },
        del_btn(state,payload){
            if(confirm("삭제 하시겠습니까?")){
            state.todoitems.splice(payload.index,1000);
            }
        }
    }
});