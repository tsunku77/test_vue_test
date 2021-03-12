import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter:"", todoitems:[], ckck:"",
        ck:"체크",no:"NO",todo:"TO DO", modi:"수정",del:"삭제",
        btns2:"삭제",btns3:"수정",
        ulcss:"ulcss",btns: "추가",
    },
    mutations:{
        add_btn(state,payload){
            if(state.counter.trim() !== ''){
                state.todoitems.push(payload) // 입력값 배열에 넣기
                state.counter = '';
            }else {
                alert("할 일을 작성해주세요");
            }
        },
        del_btn(state,payload){
            if(confirm("삭제 하시겠습니까?")){
            state.todoitems.splice(payload.index,1);
            }
        }
    }
});