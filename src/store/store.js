import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        todoitems:[],
        abc:[],wan_if:[],
        arraw:"",arraw1:"↓",arraw2:"↕",arraw3:"↑",
    },
    mutations:{
        ck_click(state,{payload,index}){
            console.log(payload);
            if(state.abc[index]===undefined){
                state.abc[index]=true
                if(state.abc[index]===true){
                    state.wan_if[index] = true;
                }
            }else if(state.abc[index]===true){
                state.abc[index]=false
                if(state.abc[index]===false){
                    state.wan_if[index] = false;
                }
            }else{
                state.abc[index]=true
                if(state.abc[index]===true){
                    state.wan_if[index] = true;
                }
            }
        },
        add_btn(state,payload){
            state.todoitems.unshift(payload) // 입력값 배열에 넣기
            state.counter = '';
        },
        del_btn(state,payload){
            if(confirm("삭제 하시겠습니까?")){
                state.todoitems.splice(payload.index,1000);
            }
        },
    }
});