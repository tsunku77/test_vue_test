import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: [],todoitems2:[],
        wan_if: [],
        ifif1: false, ifif2: false,
        wan:true, wan2:false
    },
    getters:{
        todoLists: state => state.todoitems
    },
    mutations: { //state 를 바꿔주는 역할 payload
        down_btn(state, payload) {
            console.log(state.todoitems.length); //5
            console.log(state.todoitems[payload-1]); //내용출력
            console.log(payload); //1
            console.log(state.todoitems.slice(0)[0])
        },
        ck_click(state, payload) {
            //상하 버튼 조정
            if (payload ===  state.todoitems.length) {    //상
                state.ifif1 = !state.ifif1
            } else if (payload === 1) {  //하
                state.ifif2 = !state.ifif2
                state.ifif1 = false;
            } else {   //상하
                state.ifif1 = !state.ifif1
                state.ifif2 = !state.ifif2
            }

            //완료 미완료
            state.wan_if[payload] = !state.wan_if[payload]
        },
        add_btn(state, payload) {
            // console.log(state.todoitems.length+1);
            // console.log(payload);
            state.todoitems.unshift(payload) // 입력값 배열에 넣기
        },

        del_btn(state) {
            // todoitems 안에 있는 todo 아이템만큼 반복문 실행
            for(let n=0;n<state.todoitems.length;n++){

                // n번 인덱스에 있는 todo 아이템의 boolean 값을 확인
                // true 인 경우: 체크 된 상태
                // false 인 경우: 체크 안된 상태
                if(state.todoitems[n].boolean){
                    // 체크 된 todo 아이템을 삭제
                    state.todoitems.splice(n,1)
                }
            }
        },
    }
});