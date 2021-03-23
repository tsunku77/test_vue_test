import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: [], //미완료 배열
        Complete_todoitems: [], //완료 배열
        showComplete: [], //완료,미완료 표시
        vif_down: false,  //아래 화살표
        vif_up: false,  //위 화살표
        vif_todoitems: true,  //미완료 배열 보이기
        vif_Complete_todoitems: true, //완료 배열 보이기
        del_checking: 'n' //반복문 속 경고창 조건에 쓰이는 변수
    },
    getters: {
        todoLists: state => state.todoitems,
        todoLists2: state => state.Complete_todoitems,
        showComplete: state => state.showComplete,
        vif_todoitems: state => state.vif_todoitems,
        vif_Complete_todoitems:state => state.vif_Complete_todoitems,
        notice:state => state.notice
    },
    mutations: {
        reset_btn(state) { //초기화버튼
            state.todoitems.splice(0)  //미완료 배열 삭제
            state.Complete_todoitems.splice(0) //완료 배열 삭제
            state.vif_down = false; //아래 화살표 삭제
            state.vif_up = false; //위 화살표 삭제
        },
        //버튼 클릭시 상하 이동
        down_btn(state) { //아래 화살표 클릭시
            for (let k = 0; k < state.todoitems.length; k++) { //index 0~개수만큼 반복문 돌려
                if (state.todoitems[k].checked) {  // 그중 checkbox가 true인걸 찾는다
                    if (k < state.todoitems.length - 1) {  //노드가 개수보다 작다면
                        k++                                 //1증가한 후
                        state.todoitems.splice(k-1, 0)   //체크한 위치 항목 삭제(0클릭시 1-1=0)
                        state.todoitems.splice(k, 0, state.todoitems.splice(k-1, 1)[0]) //1위치에 삭제한 항목 넣기
                        state.vif_up = true;  //위 화살표 등장
                    }
                    else {  //그 외는 아래화살표 x 위화살표 o
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
        ck_click(state, payload) { //payload =index
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
            state.showComplete[payload] = !state.showComplete[payload]
        },
        // 입력값 배열 넣기
        add_btn(state, payload) { //payload = 입력값(배열)
            state.todoitems.splice(0, 0, payload)
        },
        changelist(state, payload) {
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
        del_btn(state) {
            // todoitems 안에 있는 todo 아이템만큼 반복문 실행
            for (let n = 0; n < state.todoitems.length; n++) {
                if (state.todoitems[n].checked) {
                    if (confirm('todolist를 정말 삭제하시겠습니까?')) { // 체크 된 todo 아이템을 삭제
                        state.del_checking = 'y'
                        state.todoitems.splice(n--, 1)
                        state.vif_down = false
                        state.vif_up = false
                    }
                }
            }

            for (let k = 0; k < state.Complete_todoitems.length; k++) {
                if (state.Complete_todoitems[k].checked) {
                    console.log(state.Complete_todoitems[k])
                    if (confirm('완료 todolist를 정말 삭제하시겠습니까?')) {
                    state.del_checking = 'y'
                    state.Complete_todoitems.splice(k--, 1)
                    state.vif_down = false
                    state.vif_up = false
                    }
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