import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"

export class State {
    count: number = 1;
}

const getters = <GetterTree<State, any>> {
    count(state: State): number {
        return state.count
    }
};

const mutations = <MutationTree<State>> {
    inc(state: State, amount: number) {
        state.count += amount
    },
    dec(state: State) {
        state.count -= 1
    }
};

const actions = <ActionTree<State, any>> {
    inc(store: ActionContext<State, any>, amount: number) {
        store.commit('inc', amount)
    },
    dec(store: ActionContext<State, any>) {
        store.commit('dec')
    }
};

export const counter = {
    namespaced: true,
    state: new State(),
    getters: getters,
    mutations: mutations,
    actions: actions
};
