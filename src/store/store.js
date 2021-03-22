import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: [], Complete_todoitems: [],
        showComplete: [],
        vif_down: false, vif_up: false,
        vif_todoitems: true, vif_Complete_todoitems: true,
        del_checking: 'n'
    },
    getters: {
        todoLists: state => state.todoitems,
        todoLists2: state => state.Complete_todoitems,
    },
    mutations: {
        reset_btn(state) {
            state.todoitems.splice(0)
            state.Complete_todoitems.splice(0)
            state.vif_down = false;
            state.vif_up = false;
        },
        //버튼 클릭시 상하 이동
        down_btn(state) {
            for (let k = 0; k < state.todoitems.length; k++) {
                //하나 체크시
                if (state.todoitems[k].checked) {
                    if (k < state.todoitems.length - 1) {
                        console.log(k)
                        k++
                        state.todoitems.splice(k-1, 0)
                        state.todoitems.splice(k, 0, state.todoitems.splice(k-1, 1)[0])
                        state.vif_up = true;
                    }
                    else {
                        state.vif_down = false;
                        state.vif_up = true;
                    }
                }
            }
        },
        up_btn(state) {
            for (let k = state.todoitems.length - 1; k >= 0; k--) { //버튼을 컴포넌트에서 하나로 쓰기 때문
                if (state.todoitems[k].checked) {
                    if (k > 0) {
                        k--
                        state.todoitems.splice(k, 0)
                        state.todoitems.splice(k + 1, 0, state.todoitems.splice(k, 1)[0]);
                        state.vif_down = true;
                    } else {
                        state.vif_up = false;
                        state.vif_down = true;
                    }
                }
            }
        },
        ck_click(state, payload) {
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
        // 입력값 배열 넣기
        add_btn(state, payload) { //payload = 입력값(배열)
            state.todoitems.splice(0, 0, payload)
        },
        changelist(state, payload) {
            console.log(payload)
            state.Complete_todoitems.splice(0, 0, state.todoitems[payload])
            state.todoitems.splice(payload, 1)
            state.vif_down = false;
            state.vif_up = false;
        },
        go_miwan(state, payload) {
            state.todoitems.splice(0, 0, state.Complete_todoitems[payload])
            state.Complete_todoitems.splice(payload, 1)
        },

        //#.삭제버튼
        del_btn(state) {  //payload=length
            // todoitems 안에 있는 todo 아이템만큼 반복문 실행
            for (let n = 0; n < state.todoitems.length; n++) {
                if (state.todoitems[n].checked) {
                    if (confirm(state.todoitems[n].id + '번이 삭제됩니다')) { // 체크 된 todo 아이템을 삭제
                        state.del_checking = 'y'
                        state.todoitems.splice(n--, 1)
                        state.vif_down = false
                        state.vif_up = false
                    }
                }
            }

            for (let k = 0; k < state.Complete_todoitems.length; k++) {
                if (state.Complete_todoitems[k].checked) {
                    state.del_checking = 'y'
                    state.Complete_todoitems.splice(k--, 1)
                    state.vif_down = false
                    state.vif_up = false
                }
            }
            if (state.del_checking === 'n') {
                alert('삭제할것을 클릭해주세요');
            }
            state.del_checking = 'n'
        },
        //#.미완료,완료,ALL 버튼
        miwan_btn(state) {
            state.vif_Complete_todoitems = false
            state.vif_todoitems = true
            state.vif_down = false
            state.vif_up = false
        },
        wan_btn(state) {
            state.vif_todoitems = false
            state.vif_Complete_todoitems = true
            state.vif_down = false
            state.vif_up = false
        },
        all_btn(state) {
            state.vif_todoitems = true
            state.vif_Complete_todoitems = true
            state.vif_down = false
            state.vif_up = false
        },
    }
});