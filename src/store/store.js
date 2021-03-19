import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: [], todoitems2: [],
        wan_if: [],
        ifif1: false, ifif2: false,
        if_miwan: true, if_wan: true
    },
    getters: {
        todoLists: state => state.todoitems,
        todoLists2: state => state.todoitems2,
    },
    mutations: { //state 를 바꿔주는 역할 payload
        down_btn(state,payload) {
            // console.log(payload); //length를 갖고옴..
            for (let k = 0; k < state.todoitems.length; k++) {
                if (state.todoitems[k].boolean) {
                    if (k < payload-1) {
                        k++
                        state.todoitems.splice(k, 0)
                        state.todoitems.unshift(state.todoitems.splice(k, 1)[0]);
                        console.log(k);
                    }else {
                        k = 0;
                    }
                }
            }
        },
        ck_click(state, payload) {
            //#. 상하 버튼 조정(미완)
            if (payload === 0) {    //상
                state.ifif1 = true;
                state.ifif2 = false;
                if (state.todoitems[payload].boolean) {
                    state.ifif1 = false;
                    state.ifif2 = false;
                }
            } else if (payload === state.todoitems.length - 1) {  //하
                state.ifif2 = true;
                state.ifif1 = false;
                if (state.todoitems[payload].boolean) {
                    state.ifif1 = false;
                    state.ifif2 = false;
                }
            } else {   //상하
                state.ifif1 = true;
                state.ifif2 = true;
                if (state.todoitems[payload].boolean) {
                    state.ifif1 = false;
                    state.ifif2 = false;
                }
            }
            //#. 결과 완료 미완료
            state.wan_if[state.todoitems[payload].id] = !state.wan_if[state.todoitems[payload].id]
        },
        wan_ck_click(state, payload) {
            //#. 상하 버튼 조정(완)
            if (payload === 0) {    //상
                state.ifif1 = true;
                state.ifif2 = false;
                if (state.todoitems2[payload].boolean) {
                    state.ifif1 = false;
                    state.ifif2 = false;
                }
            } else if (payload === state.todoitems2.length - 1) {  //하
                state.ifif2 = true;
                state.ifif1 = false;
                if (state.todoitems2[payload].boolean) {
                    state.ifif1 = false;
                    state.ifif2 = false;
                }
            } else {   //상하
                state.ifif1 = true;
                state.ifif2 = true;
                if (state.todoitems2[payload].boolean) {
                    state.ifif1 = false;
                    state.ifif2 = false;
                }
            }
        },
        add_btn(state, payload) {
            state.todoitems.unshift(payload) // 입력값 배열에 넣기
        },
        changelist(state, payload) {
            state.todoitems2.unshift(state.todoitems[payload])
            state.todoitems.splice(payload, 1)
        },
        go_miwan2(state, payload) {
            state.todoitems.unshift(state.todoitems2[payload])
            state.todoitems2.splice(payload, 1)
        },

        //#.삭제버튼
        del_btn(state) {
            // todoitems 안에 있는 todo 아이템만큼 반복문 실행
            for (let n = 0; n < state.todoitems.length; n++) {

                // n번 인덱스에 있는 todo 아이템의 boolean 값을 확인
                // true 인 경우: 체크 된 상태
                // false 인 경우: 체크 안된 상태
                if (state.todoitems[n].boolean) {
                    // 체크 된 todo 아이템을 삭제
                    state.todoitems.splice(n, 1)
                }
            }
        },

        //#.미완료,완료,ALL 버튼
        miwan_btn(state) {
            state.if_wan = !state.if_wan
            state.if_miwan = true
        },
        wan_btn(state) {
            state.if_miwan = !state.if_miwan
            state.if_wan = true
        },
        all_btn(state) {
            state.if_miwan = true
            state.if_wan = true
        },
    }
});