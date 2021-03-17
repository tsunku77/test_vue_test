import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: [], abc: [], wan_if: [],
        ifif1: false, ifif2: false
    },
    mutations: { //state 를 바꿔주는 역할 payload
        down_btn(state, payload) {
            console.log(state.todoitems.length); //5
            console.log(state.todoitems[payload-1]); //내용출력
            console.log(payload); //1
            // state.todoitems = state.todoitems.concat([])
            console.log(state.todoitems.slice(0)[0])
            // state.todoitems.splice(state.todoitems.indexOf(payload),1); //삭제가 되면,
        },
        ck_click(state, payload) {
            //상하 버튼
            if (payload === 0) {
                state.ifif1 = !state.ifif1
            } else if (payload + 1 === state.todoitems.length) {
                state.ifif2 = !state.ifif2
                state.ifif1 = false;
            } else {
                state.ifif1 = !state.ifif1
                state.ifif2 = !state.ifif2
            }

            //완료 미완료
            if (state.abc[payload] === undefined) {
                state.abc[payload] = true
                if (state.abc[payload]) {
                    state.wan_if[payload] = true;
                }
            } else if (state.abc[payload]) {
                state.abc[payload] = false
                if (state.abc[payload] === false) {
                    state.wan_if[payload] = false;
                }
            } else {
                state.abc[payload] = true
                if (state.abc[payload]) {
                    state.wan_if[payload] = true;
                }
            }
        },
        add_btn(state, payload) {
            state.todoitems.unshift(payload) // 입력값 배열에 넣기
        },
        del_btn(state, payload) { //가라로 만든 삭제로직
            console.log(state.abc);
            console.log(state.abc[payload - 1]); // true뜨게함
            console.log(payload); //1,2,3,,,
            console.log(state.todoitems.length); //6
            if (state.abc[payload - 1] === true && confirm(payload + '번을 삭제하시겠습니까?')) {
                state.todoitems.splice(payload - 1, 1)
                state.abc[payload - 1] = false
            } else {
                alert('삭제할것을 체크해주세요');
            }
        },
    }
});