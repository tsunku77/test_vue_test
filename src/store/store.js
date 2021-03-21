import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: [], Complete_todoitems: [],
        showComplete: [],
        vif_down: false, vif_up: false,
        vif_todoitems: true, vif_Complete_todoitems: true,cc:'y'
    },
    getters: {
        todoLists: state => state.todoitems,
        todoLists2: state => state.Complete_todoitems,
    },
    mutations: {
        //버튼 클릭시 상하 이동
        down_btn(state) {
            for (let k = 0; k < state.todoitems.length; k++) {
                if (state.todoitems[k].checked) {
                    if (k < state.todoitems.length - 1) {
                        k++
                        state.todoitems.splice(k, 0)
                        state.todoitems.splice(k-1, 0,state.todoitems.splice(k, 1)[0])
                        state.vif_up=true;
                    }else{
                        alert('더이상 내려갈 수 없습니다');
                        state.todoitems[k].checked=false;
                        state.vif_down = false;
                        state.vif_up = false;
                        state.showComplete[state.todoitems[k].id] = !state.showComplete[state.todoitems[k].id]
                    }
                }
            }
        },
        up_btn(state) {
            for (let k = state.todoitems.length-1; k >= 0 ; k--) {
                if (state.todoitems[k].checked) {   //4->3이되고. 3삭제.
                    if (k > 0) {
                        k--
                        state.todoitems.splice(k, 0)
                        state.todoitems.splice(k+1,0,state.todoitems.splice(k, 1)[0]);
                        state.vif_down=true;
                    }else{
                        alert('더이상 올라갈 수 없습니다');
                        state.todoitems[k].checked=false;
                        state.vif_up = false;
                        state.vif_down = false;

                    }
                }
            }
        },
        ck_click(state, payload) {
            //체크박스 하나만 선택
            for(let i=0; i<state.todoitems.length; i++){
                if(i !== payload){
                    state.todoitems[i].checked=false;
                    state.showComplete[state.todoitems[i].id] = false
                }
            }

            // (미완료) 상하 버튼 조정
            if (payload === 0) {    //상
                state.vif_down = true;
                state.vif_up = false;
                if (state.todoitems[payload].checked) {
                    state.vif_down = false;
                    state.vif_up = false;
                }
            } else if (payload === state.todoitems.length - 1) {  //하
                state.vif_up = true;
                state.vif_down = false;
                if (state.todoitems[payload].checked) {
                    state.vif_down = false;
                    state.vif_up = false;
                }
            } else {   //상하
                state.vif_down = true;
                state.vif_up = true;
                if (state.todoitems[payload].checked) {
                    state.vif_down = false;
                    state.vif_up = false;
                }
            }
            //결과 완료 미완료
            state.showComplete[state.todoitems[payload].id] = !state.showComplete[state.todoitems[payload].id]
        },
        wan_ck_click(state, payload) {
            //체크박스 하나만 선택
            for(let i=0; i<state.Complete_todoitems.length; i++){
                if(i !== payload){
                    state.Complete_todoitems[i].checked=false;
                }
            }
        },
        // 입력값 배열에 넣기
        add_btn(state, payload) { //payload = 입력값(배열)
            state.todoitems.splice(0,0,payload)
        },
        changelist(state, payload) {
            state.Complete_todoitems.splice(0,0,state.todoitems[payload])
            state.todoitems.splice(payload, 1)
        },
        go_miwan(state, payload) {
            state.todoitems.splice(0,0,state.Complete_todoitems[payload])
            state.Complete_todoitems.splice(payload, 1)
        },

        //#.삭제버튼
        del_btn(state) {
            // todoitems 안에 있는 todo 아이템만큼 반복문 실행
            for (let n = 0; n < state.todoitems.length; n++) {
            //     // n번 인덱스에 있는 todo 아이템의 checked 값을 확인
            //     // true 인 경우: 체크 된 상태
            //     // false 인 경우: 체크 안된 상태
                if (state.todoitems[n].checked) {
                    // 체크 된 todo 아이템을 삭제
                    state.todoitems.splice(n, 1)
                    state.vif_down = false
                    state.vif_up = false
                }
            }
            for (let n = 0; n < state.Complete_todoitems.length; n++) {
                if (state.Complete_todoitems[n].checked){
                    state.Complete_todoitems.splice(n, 1)
                    state.vif_down = false
                    state.vif_up = false
                }
            }
        },
        //#.미완료,완료,ALL 버튼
        miwan_btn(state) {
            state.vif_Complete_todoitems = !state.vif_Complete_todoitems
            state.vif_todoitems = true
        },
        wan_btn(state) {
            state.vif_todoitems = !state.vif_todoitems
            state.vif_Complete_todoitems = true
        },
        all_btn(state) {
            state.vif_todoitems = true
            state.vif_Complete_todoitems = true
        },
    }
});